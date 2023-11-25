# MQTT_WebApp

This web platform provides a user-friendly interface to connect to an MQTT broker, ensuring seamless message subscription and publishing. Specially crafted to integrate with the WindTracker_IoT project, it offers users the capability to effectively monitor wind conditions.

## Features

-   **Connection**: Connect to an MQTT broker via hostname or IP and port.
-   **Authentication**: Use a username and password for secure authentication.
-   **Subscription**: Subscribe to specific topics.
-   **Publishing**: Publish messages.

## How to Use

To run this project, you will need [Node.js](https://nodejs.org/) installed on your system. The project utilizes `http-server` for local development.

1. Open the Command Prompt (cmd) or terminal on your system.
2. Install `http-server` globally using npm by running the following command:

```plaintext
npm install -g http-server
```

3. Navigate to your project's root directory (where your index.html file is located) and start the server by executing:

```plaintext
http-server
```

4. Open your web browser and go to `http://localhost:8080`. This will load `index.html` from your local server.
5. Enter the desired connection information into the form.
6. Click "Connect" to establish a connection with the MQTT broker.
7. Subscribe to topics and/or publish messages as needed.

## Integration with WindTracker_IoT

This MQTT Web App can be seamlessly integrated with the WindTracker_IoT project. It allows users to:

-   Receive real-time updates on wind conditions.
-   Track wind speed and direction.
-   Make informed decisions based on the collected wind data.

## External Libraries

-   **Paho MQTT JavaScript Client**: A client for MQTT, enabling the web app to connect with an MQTT broker.
