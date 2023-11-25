// Module dependencies
import { appendToMessages } from "./domUtils.js";
import { client } from "./mqttConnectionHandler.js";
import { checkConnectionStatus } from "./mqttActionHandler.js";

// Callback function on successful connection
export function onConnect() {
    const topic = document.getElementById("topic_s").value;

    appendToMessages(`Subscribing to topic: ${topic}`);
    console.log(`[Subscribing to topic: ${topic}]`);

    client.subscribe(topic);
    checkConnectionStatus();
}

// Callback function on connection failure
export function onConnectFailure(error) {
    appendToMessages(`Connection failed: ${error.errorMessage}`);
}

// Callback function on connection loss
export function onConnectionLost(responseObject) {
    if (responseObject && responseObject.errorMessage && responseObject.errorMessage !== "AMQJSC0000I OK.") {
        appendToMessages("Error: Connection is lost...");
        appendToMessages(`Error: ${responseObject.errorMessage}`);
    }
}

// Callback function on receiving an MQTT message
export function onMessageArrived(message) {
    console.log(`[Message arrived!]`);

    // Check whether the received topic is "Sensor_KN/Winddata"
    if (message.destinationName === "Sensor_KN/Winddata") {
        try {
            const windData = JSON.parse(message.payloadString);

            if (windData && windData.Received) {
                const { windSpeed, windDirection, timestamp } = windData.Received;
                appendToMessages(`Wind Speed: ${windSpeed} m/s, Wind Direction: ${windDirection}°, Timestamp: ${timestamp}`);
            }
        } catch (e) {
            appendToMessages("Error: Received message is not in valid JSON format");
            console.log(`[Error: Received message is not in valid JSON format]`);
        }
    } else {
        appendToMessages(`Topic: ${message.destinationName} | Message: ${message.payloadString}`);
        console.log(`[Message: ${message.payloadString} (${message.destinationName})]`);
    }
}
