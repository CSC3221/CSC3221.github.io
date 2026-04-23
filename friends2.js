const API_URL = "https://friends-node-01-47e26a48b0b0.herokuapp.com/friends";
const loadAllBtn = document.getElementById("loadAllBtn");
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
        <td>${friend.firstName} ${friend.lastName}</td>
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