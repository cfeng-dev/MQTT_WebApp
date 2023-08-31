# MQTT_WebApp

This web platform provides a user-friendly interface to connect to an MQTT broker, ensuring seamless message subscription and publishing. Specially crafted to integrate with the WindTracker_IoT project, it offers users the capability to effectively monitor wind conditions.

## Features

-   **Connection**: Connect to an MQTT broker via hostname or IP and port.
-   **Authentication**: Use a username and password for secure authentication.
-   **Subscription**: Subscribe to specific topics.
-   **Publishing**: Publish messages.

## How to Use

1. Open the `index.html` file in your browser.
2. Enter the desired connection information into the form.
3. Click "Connect" to establish a connection with the MQTT broker.
4. Subscribe to topics and/or publish messages as needed.

## Integration with WindTracker_IoT

This MQTT Web App can be seamlessly integrated with the WindTracker_IoT project. It allows users to:

-   Receive real-time updates on wind conditions.
-   Track wind speed and direction.
-   Make informed decisions based on the collected wind data.

## External Libraries

-   **Paho MQTT JavaScript Client**: A client for MQTT, enabling the web app to connect with an MQTT broker.
