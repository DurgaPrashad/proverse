Proverse: Community Mapping System

![proverse](https://github.com/user-attachments/assets/0c5c3b7e-5da2-4910-a2bc-2f04a366bc03)

Proverse is an advanced, GIS-powered community mapping platform that visualizes and addresses local issues, including traffic congestion, pollution, public services, and environmental conditions. The platform integrates multiple tools like GeoJSON data, voice recognition, weather APIs, and leaflet maps to create an interactive and insightful experience for decision-makers, planners, and local communities.
![comunity mapping](https://github.com/user-attachments/assets/b9052fb7-a57e-4f5f-95e7-fc7b32969fb3)
![airpollution](https://github.com/user-attachments/assets/21d21285-dd91-45a6-8383-eda1d6c6eaf2)


Table of Contents
Features
Technologies Used
Installation and Setup
Usage Guide
Open-Source Libraries and Tools
How It Works
Contributing
License
Links
Features

1. Dynamic Map with Multiple Layers
Leaflet.js-based dynamic maps with layers for Street View and Satellite View.
Toggle between layers for issues like:
Traffic congestion areas
Land pollution zones
Drainage problems
Custom GeoJSON data visualization for specific issues like air quality, pollution, traffic density, etc.
2. Voice-Controlled Navigation
Voice commands to control map interactions, search locations, mark points, and request directions.
Uses SpeechRecognition API for speech-to-text and Text-to-Speech (TTS) for verbal feedback.
3. Routing and Directions
Integrated with Leaflet Routing Machine to provide optimal routes and turn-by-turn directions between multiple waypoints.
4. Real-Time Weather Data
OpenWeatherMap API integration to fetch weather data based on user location.
Dynamic weather updates visualized on the map.
Mini-map provides a visual temperature overlay that updates in real-time.
5. Interactive Sidebars and Controls
Control sidebars to toggle features such as:
Traffic congestion data
Pollution statistics
Weather forecasts
Education and healthcare facilities layers
6. Mobile-Responsive Design
Fully responsive design that scales well on all devices (desktop, tablet, mobile).
7. Prototypes for Specific Use Cases
Pre-built prototypes showcasing mapping data for vegetation, air pollution, traffic flow, and community services (e.g., healthcare, education).
Use of custom icons for specific issues such as drainage, pollution, and traffic.
Technologies Used
HTML5, CSS3, JavaScript
Leaflet.js - For interactive maps and marker layers.
GeoJSON - For geospatial data visualization.
SpeechRecognition API - For voice commands.
OpenWeatherMap API - For real-time weather data.
Leaflet Routing Machine - For route planning and directions.
Bootstrap - For responsive web design.
Installation and Setup
1. Clone the Repository
bash
Copy code
git clone https://github.com/username/proverse.git
cd proverse
2. Install Dependencies
Ensure you have Node.js installed, then run:

bash
Copy code
npm install
3. Get API Keys
Sign up at OpenWeatherMap to obtain your API key.
Update the .env file with your OpenWeatherMap API key:
bash
Copy code
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
4. Start Development Server
bash
Copy code
npm start
The application will now be available at http://localhost:3000.

Usage Guide
1. Interacting with the Map
Layer Toggle: Use the sidebars to toggle various layers such as street view, satellite view, and problem-specific GeoJSON layers (e.g., traffic congestion).
Voice Commands: Use voice commands like "Go to [location]" or "Show traffic data" to interact with the map.
Weather Data: Weather information updates automatically based on the current map location.
2. Routing
Select starting and ending points on the map or search for a location, and the map will calculate the best route.
Open-Source Libraries and Tools
This project leverages several open-source technologies and libraries:

Leaflet.js - Interactive maps, marker layers, and routing.
GeoJSON - Geospatial data format for visualizing community issues.
OpenWeatherMap API - Provides real-time weather data.
SpeechRecognition API - Used for voice control functionality.
Leaflet Routing Machine - For providing route planning and directions.
Bootstrap - Used for responsive web design.
How It Works
Dynamic Mapping and Layer Control:
The application displays a Leaflet.js-based map where users can toggle between layers like Street View and Satellite View. GeoJSON layers dynamically load community data such as traffic congestion, pollution, and drainage problems.

Voice Control:
The voice recognition system allows users to speak commands that interact with the map. For example, users can ask the system to navigate to a particular area or display specific data (e.g., "Show drainage problems").

Weather Data Integration:
The OpenWeatherMap API fetches current weather conditions based on the user’s geographic location. This data is visually displayed on the map, allowing users to make context-aware decisions (e.g., factoring weather when considering environmental issues).

Routing and Directions:
The Leaflet Routing Machine plugin provides point-to-point routing, allowing users to find the best path between multiple locations on the map.

Contributing
We welcome contributions from the community! To contribute:

Fork the project.
Create a new branch:
bash
Copy code
git checkout -b feature-branch
Make your changes and commit them:
bash
Copy code
git commit -m 'Add new feature'
Push your changes to the branch:
bash
Copy code
git push origin feature-branch
Submit a pull request to review your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Links
GitHub Repository: Proverse Community Mapping
OpenWeatherMap: https://openweathermap.org/
Leaflet.js: https://leafletjs.com/
Documentation for GeoJSON: https://geojson.org/
Leaflet Routing Machine: http://www.liedman.net/leaflet-routing-machine/
