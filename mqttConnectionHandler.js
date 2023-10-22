// Global MQTT client
let client;

// Function to append messages to the "messages" DOM element
function appendToMessages(message) {
    const messagesElem = document.getElementById("messages");
    messagesElem.innerHTML += `<span> ${message} </span><br>`;
}

// Function to start MQTT connection
function startConnect() {
    const clientID = "clientID - " + parseInt(Math.random() * 100);
    const host = document.getElementById("host").value;
    const port = Number(document.getElementById("port").value);
    const userId = document.getElementById("username").value;
    const passwordId = document.getElementById("password").value;

    // Display connection information
    appendToMessages(`Connecting to "${host}" on port "${port}"`);
    appendToMessages(`Using the client ID: "${clientID}"`);

    // Create new MQTT client instance
    client = new Paho.MQTT.Client(host, port, clientID);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // Set callback functions
    client.connect({
        onSuccess: onConnect,
        onFailure: onConnectFailure,
        userName: userId,
        password: passwordId,
    });
}

// Callback function on successful connection
function onConnect() {
    const topic = document.getElementById("topic_s").value;
    appendToMessages(`Subscribing to topic: ${topic}`);
    client.subscribe(topic);
}

// Callback function on connection failure
function onConnectFailure(error) {
    appendToMessages(`Connection failed: ${error.errorMessage}`);
}

// Callback function on connection loss
function onConnectionLost(responseObject) {
    if (responseObject && responseObject.errorMessage && responseObject.errorMessage !== "AMQJSC0000I OK.") {
        appendToMessages("Error: Connection is lost...");
        appendToMessages(`Error: ${responseObject.errorMessage}`);
    }
}

// Callback function on receiving an MQTT message
function onMessageArrived(message) {
    console.log(`OnMessageArrived: ${message.payloadString}`);
    appendToMessages(`Topic: ${message.destinationName} | Message: ${message.payloadString}`);
}

// Function to disconnect from the MQTT broker
function startDisconnect() {
    if (client && client.isConnected()) {
        client.disconnect();
        appendToMessages("Disconnected");
    }
}

// Function to check and display the connection status of the MQTT client
function checkConnectionStatus() {
    if (client.isConnected()) {
        appendToMessages("Client is connected");
    } else {
        appendToMessages("Client is not connected");
    }
}

// Function to publish an MQTT message
function publishMessage() {
    const msg = document.getElementById("Message").value.trim();
    const topic = document.getElementById("topic_p").value.trim();

    // Check if the topic and message are not empty
    if (topic === "" || msg === "") {
        appendToMessages("Error: Topic and Message are required.");
        return;
    }

    // Create new MQTT message instance
    const Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;

    // Send message to the broker
    client.send(Message);
    appendToMessages(`Message to topic ${topic} is sent`);
}

// Function to clear the content of the "messages" DOM element
function clearDisplay() {
    const messagesElem = document.getElementById("messages");
    messagesElem.innerHTML = ""; // Clear the content of "messages"
}

// EventListener
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("connectButton").addEventListener("click", startConnect);
    document.getElementById("disconnectButton").addEventListener("click", startDisconnect);
    document.getElementById("checkConnectionButton").addEventListener("click", checkConnectionStatus);
    document.getElementById("publishButton").addEventListener("click", publishMessage);
    document.getElementById("clearButton").addEventListener("click", clearDisplay);
});
