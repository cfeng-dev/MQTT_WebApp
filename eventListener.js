// // Module dependencies
import { startConnect, startDisconnect } from "./modules/mqttConnectionHandler.js";
import { checkConnectionStatus, publishMessage } from "./modules/mqttActionHandler.js";
import { clearDisplay } from "./modules/domUtils.js";

// EventListeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("connectButton").addEventListener("click", startConnect);
    document.getElementById("disconnectButton").addEventListener("click", startDisconnect);
    document.getElementById("checkConnectionButton").addEventListener("click", checkConnectionStatus);
    document.getElementById("publishButton").addEventListener("click", publishMessage);
    document.getElementById("clearButton").addEventListener("click", clearDisplay);
});
