# Proverse: Community Mapping System

**Proverse** is an innovative, GIS-powered community mapping platform designed to visualize and address local issues such as traffic congestion, pollution, and public services. This dynamic platform integrates advanced tools like GeoJSON data, voice recognition, weather APIs, and interactive Leaflet maps to create a compelling experience for decision-makers, urban planners, and local communities.

![Proverse Overview](https://github.com/user-attachments/assets/b31e9272-2da9-417c-a567-deec90df878c)
 https://drive.google.com/file/d/1lqvZteJx_eUMi6LiWr0XnsRdFYUn-xuI/view?usp=drive_link 
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage Guide](#usage-guide)
- [Open-Source Libraries and Tools](#open-source-libraries-and-tools)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Features

![Community Mapping](https://github.com/user-attachments/assets/b9052fb7-a57e-4f5f-95e7-fc7b32969fb3)

1. **Dynamic Map with Multiple Layers**
   - Utilizing Leaflet.js, Proverse features interactive maps with options for Street and Satellite views.
   - Seamlessly toggle between layers to view:
     - Traffic congestion hotspots
     - Land pollution zones
     - Drainage issues
     - Custom GeoJSON visualizations for specific problems like air quality and traffic density.

2. **Voice-Controlled Navigation**
   - Control map interactions using voice commands to search locations, mark points, and request directions.
   - Employs the SpeechRecognition API for seamless speech-to-text and Text-to-Speech (TTS) feedback.

3. **Routing and Directions**
   - Integrated with Leaflet Routing Machine, providing optimal routing and turn-by-turn directions between multiple waypoints.

4. **Real-Time Weather Data**
   - Fetch current weather conditions through OpenWeatherMap API based on the user’s location.
   - Dynamic weather updates visually represented on the map with a mini-map overlay for real-time temperature.

5. **Interactive Sidebars and Controls**
   - Toggle various features via control sidebars, such as:
     - Traffic congestion data
     - Pollution statistics
     - Weather forecasts
     - Educational and healthcare facilities layers

6. **Mobile-Responsive Design**
   - Fully responsive layout that adapts seamlessly to all devices—desktop, tablet, and mobile.

7. **Prototypes for Specific Use Cases**
   - Pre-built prototypes showcasing mapping data for vegetation, air quality, traffic flow, and community services (e.g., healthcare and education).
   - Custom icons used to highlight specific issues like drainage, pollution, and traffic.
![Screenshot 2024-10-06 192128](https://github.com/user-attachments/assets/059daae9-7db1-4d88-b667-eef56179e90f)


## Technologies Used
- **HTML5**, **CSS3**, **JavaScript**
- **Leaflet.js**: For creating interactive maps and marker layers.
- **GeoJSON**: For visualizing geospatial data.
- **SpeechRecognition API**: For enabling voice commands.
- **OpenWeatherMap API**: For real-time weather updates.
- **Leaflet Routing Machine**: For routing and directions.
- **Bootstrap**: For a responsive web design.

## Installation and Setup

1. **Install Dependencies**  
   Ensure you have Node.js installed, then run:
   npm install

2. **Get API Keys**  
   Sign up at OpenWeatherMap to obtain your API key and update the .env file:
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key

3. **Start Development Server**  
   npm start
   The application will now be available at http://localhost:3000.

## Usage Guide

### Interacting with the Map

- **Layer Toggle**: Use sidebars to switch between various layers, including street view, satellite view, and specific GeoJSON layers (e.g., traffic congestion).
- **Voice Commands**: Engage with the map using commands like "Go to [location]" or "Show traffic data."
- **Weather Data**: Automatic updates on weather information based on the current map location.

### Routing

- Select starting and ending points on the map or search for a location, and the map will calculate the best route.

## Open-Source Libraries and Tools

Proverse leverages an array of open-source technologies and libraries:

- **Leaflet.js**: For interactive maps and routing.
- **GeoJSON**: For community issue visualization.
- **OpenWeatherMap API**: For real-time weather data.
- **SpeechRecognition API**: For voice command functionality.
- **Leaflet Routing Machine**: For route planning and directions.
- **Bootstrap**: For responsive web design.

## How It Works

### Dynamic Mapping and Layer Control

Proverse displays a Leaflet.js-based map where users can dynamically load and toggle layers related to community data such as traffic congestion, pollution, and drainage issues.

### Voice Control

The voice recognition system allows users to interact with the map using verbal commands, such as requesting directions or displaying specific data (e.g., "Show drainage problems").

### Weather Data Integration

By utilizing the OpenWeatherMap API, Proverse fetches and displays current weather conditions based on the user's geographic location, enabling context-aware decision-making.

### Routing and Directions

The Leaflet Routing Machine plugin provides efficient point-to-point routing, allowing users to find optimal paths between multiple locations on the map.

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the project**.
2. **Create a new branch**:
   git checkout -b feature-branch
3. **Make your changes and commit them**:
   git commit -m 'Add new feature'
4. **Push your changes to the branch**:
   git push origin feature-branch
5. **Submit a pull request for review**.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Links

- **GitHub Repository**: Proverse Community Mapping
- **OpenWeatherMap**: OpenWeatherMap
- **Leaflet.js**: Leaflet.js
- **GeoJSON Documentation**: GeoJSON
- **Leaflet Routing Machine**: Leaflet Routing Machine
