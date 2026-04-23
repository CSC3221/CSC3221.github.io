const API_URL = "https://friends-node-01-47e26a48b0b0.herokuapp.com/friends";
const loadAllBtn = document.getElementById("loadAllBtn");
const tableBody = document.querySelector("#friendsTable tbody");
const messageDiv = document.getElementById("message");
const friendDetailsDiv = document.getElementById("friendDetails");

function clearTable() {
    tableBody.innerHTML = "";
}

function showMessage(message) {
    messageDiv.textContent = message;
}

function addFriendRow(friend) {
    const row = document.createElement("tr");

    const fullName = `${friend.firstName} ${friend.lastName}`

    row.innerHTML = `
        <td>
            <a href="#" 
               onclick="showFriend(${friend.id}); return false;">
                ${fullName}
            </a>
        </td>
        `;

    tableBody.appendChild(row);
}

async function loadAllFriends() {
    clearTable();
    showMessage("Loading all friends...");

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const friends = await response.json();

        if (!Array.isArray(friends) || friends.length === 0) {
            showMessage("No friends found.");
            return;
        }

        friends.forEach(addFriendRow);
        showMessage(`Loaded ${friends.length} friend(s).`);
    } catch (error) {
        showMessage(`Error loading friends: ${error.message}`);
    }
}

loadAllBtn.addEventListener("click", loadAllFriends);

function showFriendDetails(friend){
    friendDetailsDiv.innerHTML = `
        <div class="card p-3">
            <h4>${friend.firstName} ${friend.lastName}</h4>
            <p><strong>ID:</strong> ${friend.id}</p>
            <p><strong>First Name:</strong> ${friend.firstName}</p>
            <p><strong>Last Name:</strong> ${friend.lastName}</p>
            <p><strong>Phone:</strong> ${friend.phone}</p>
        </div>
    `;
}

async function showFriend(id) {
    showMessage(`Loading friend ${id}...`);

    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }

        const friend = await response.json();

        showFriendDetails(friend);

        showMessage(`Showing friend ${friend.firstName} ${friend.lastName}`);
    } catch (error){
        showMessage(`Error loading friend: ${error.message}`);
    }
}