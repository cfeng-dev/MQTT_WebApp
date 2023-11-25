// Module dependency
import { appendToMessages } from "./domUtils.js";
import { client } from "./mqttConnectionHandler.js";

// Function to check and display the connection status of the MQTT client
export function checkConnectionStatus() {
    if (client.isConnected()) {
        appendToMessages("Client is connected");
        console.log(`[Connected with broker]`);
    } else {
        appendToMessages("Client is not connected");
        console.log(`[Not connected with broker]`);
    }
}

// Function to publish an MQTT message
export function publishMessage() {
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
