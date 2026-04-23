const API_URL = "https://friends-node-01-47e26a48b0b0.herokuapp.com/friends";
const loadAllBtn = document.getElementById("loadAllBtn");
const findBtn = document.getElementById("findBtn");
const friendIdInput = document.getElementById("friendId");
const tableBody = document.querySelector("#friendsTable tbody");
const messageDiv = document.getElementById("message");

function clearTable() {
    tableBody.innerHTML = "";
}

function showMessage(message) {
    messageDiv.textContent = message;
}

function addFriendRow(friend) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${friend.id}</td>
        <td>${friend.firstName}</td>
        <td>${friend.lastName}</td>
        <td>${friend.phone}</td>
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

async function findFriend() {
    const id = friendIdInput.value.trim();

    if (id === "") {
        loadAllFriends();
        return;
    }

    clearTable();
    showMessage(`Looking for friend with ID ${id}...`);

    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (response.status === 404) {
            showMessage(`Friend with ID ${id} not found.`);
            return;
        }

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const friend = await response.json();
        addFriendRow(friend);
        showMessage(`Found friend with ID ${id}.`);
    } catch (error) {
        showMessage(`Error finding friend ${error.message}`);
    }
}

findBtn.addEventListener("click", findFriend);