// Function to append messages to the "messages" DOM element
export function appendToMessages(message) {
    const messagesElem = document.getElementById("messages");
    messagesElem.innerHTML += `<span> ${message} </span><br>`;
}

// Function to clear the content of the "messages" DOM element
export function clearDisplay() {
    const messagesElem = document.getElementById("messages");
    messagesElem.innerHTML = ""; // Clear the content of "messages"
}
