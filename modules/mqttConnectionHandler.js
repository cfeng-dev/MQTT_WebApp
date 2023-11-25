// Module dependencies
import { appendToMessages } from "./domUtils.js";
import { onConnect, onConnectFailure, onConnectionLost, onMessageArrived } from "./mqttEventHandler.js";

// Global MQTT client
export let client;

// Function to start MQTT connection
export function startConnect() {
    const clientID = "clientID - " + parseInt(Math.random() * 100);
    const host = document.getElementById("host").value;
    const port = Number(document.getElementById("port").value);
    const userId = document.getElementById("username").value;
    const passwordId = document.getElementById("password").value;

    // Display connection information
    appendToMessages(`Connecting to "${host}" on port "${port}"`);
    appendToMessages(`Using the client ID: "${clientID}"`);
    console.log(`[Connecting to "${host}" on port "${port}"]`);
    console.log(`[${clientID}]`);

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

// Function to disconnect from the MQTT broker
export function startDisconnect() {
    if (client && client.isConnected()) {
        client.disconnect();
        appendToMessages("Disconnected");
        console.log(`[Disconnected with broker]`);
    }
}
