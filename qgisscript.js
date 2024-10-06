// Initialize the main map and set its view to Bangalore
const map = L.map("map").setView([12.9716, 77.5946], 12); // Center on Bangalore

const baseLayers = {
    "Street View": L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { attribution: "© OpenStreetMap contributors" }
    ).addTo(map),
    "Satellite View": L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        { attribution: "© OpenTopoMap contributors" }
    ),
};
L.control.layers(baseLayers).addTo(map);

// OpenWeatherMap API key
const apiKey = "7353f149f14533587ea58d711659990a"; // Replace with your own API key

// Function to get weather data based on latitude and longitude
function getWeather(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios
        .get(apiUrl)
        .then((response) => {
            const data = response.data;
            const weatherInfo = `
                <h3>Weather at (${lat.toFixed(2)}, ${lon.toFixed(2)})</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherInfo;
            updateMiniMap(lat, lon, data.main.temp);
        })
        .catch((error) => {
            document.getElementById(
                "weatherResult"
            ).innerHTML = `<p>Error fetching weather data</p>`;
        });
}

// Initialize the mini-map for temperature display
var miniMap = L.map("mini-map", {
    center: [12.9716, 77.5946],
    zoom: 13,
    zoomControl: false,
    attributionControl: false,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(miniMap);

// Function to update the mini-map with temperature data
function updateMiniMap(lat, lon, temp) {
    let color;
    if (temp < 15) {
        color = "lightblue"; // Low temperature
    } else if (temp >= 15 && temp <= 25) {
        color = "orange"; // Medium temperature
    } else {
        color = "lightred"; // High temperature
    }

    L.circle([lat, lon], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: 500,
    }).addTo(miniMap);

    miniMap.setView([lat, lon], 13);
}

// Call getWeather when the map is moved
map.on("moveend", function () {
    var center = map.getCenter();
    getWeather(center.lat, center.lng);
});

// Get the initial weather for the starting map position
getWeather(map.getCenter().lat, map.getCenter().lng);

// Function to go to a specific location entered by the user
function goToLocation() {
    const locationInput = document.getElementById("locationInput").value;
    axios
        .get(
            `https://nominatim.openstreetmap.org/search?format=json&q=${locationInput}`
        )
        .then((response) => {
            if (response.data.length > 0) {
                const lat = response.data[0].lat;
                const lon = response.data[0].lon;
                map.setView([lat, lon], 13);
                getWeather(lat, lon);
            } else {
                alert("Location not found.");
            }
        })
        .catch((error) => {
            alert("Error fetching location data.");
        });
}

// Custom icon for drainage problems
const drainageIcon = L.icon({
    iconUrl: 'minus_471642.png', // Update with the path to your custom icon image
    iconSize: [15, 15], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

// Variables to track the GeoJSON layers
let industrialLayer; 
let trafficLayer; 
let drainageLayer; 
let isIndustrialVisible = false;
let isTrafficVisible = false;
let isDrainageVisible = false;

// Function to display or hide the industrial pollution layer
function toggleIndustrialPollution() {
    if (isIndustrialVisible) {
        map.removeLayer(industrialLayer);
        document.getElementById("toggle-industrial").textContent = "Show Industrial Pollution";
        isIndustrialVisible = false;
    } else {
        axios.get("land pollution.geojson") // Replace with your GeoJSON path
            .then((response) => {
                const geoJsonData = response.data;
                industrialLayer = L.geoJSON(geoJsonData, {
                    style: {
                        color: "red",
                        weight: 2,
                        opacity: 0.7,
                    },
                }).addTo(map);
                document.getElementById("toggle-industrial").textContent = "Hide Industrial Pollution";
                isIndustrialVisible = true;
            })
            .catch((error) => {
                console.error("Error loading GeoJSON:", error);
            });
    }
}

// Function to display or hide the traffic area layer
function toggleTrafficArea() {
    if (isTrafficVisible) {
        map.removeLayer(trafficLayer);
        document.getElementById("toggle-traffic").textContent = "Show Traffic Area";
        isTrafficVisible = false;
    } else {
        axios.get("Traffic_area.geojson") // Replace with your GeoJSON path
            .then((response) => {
                const geoJsonData = response.data;
                trafficLayer = L.geoJSON(geoJsonData, {
                    style: {
                        color: "orange",
                        weight: 2,
                        opacity: 0.7,
                    },
                }).addTo(map);
                document.getElementById("toggle-traffic").textContent = "Hide Traffic Area";
                isTrafficVisible = true;
            })
            .catch((error) => {
                console.error("Error loading GeoJSON:", error);
            });
    }
}

// Function to display or hide the drainage problem layer
function toggleDrainageProblem() {
    if (isDrainageVisible) {
        map.removeLayer(drainageLayer);
        document.getElementById("toggle-drainage").textContent = "Show Drainage Problem";
        isDrainageVisible = false;
    } else {
        axios.get("drainage_problem.geojson") // Replace with your GeoJSON path
            .then((response) => {
                const geoJsonData = response.data;
                drainageLayer = L.geoJSON(geoJsonData, {
                    style: {
                        color: "blue",
                        weight: 2,
                        opacity: 0.7,
                    },
                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, { icon: drainageIcon }); // Custom icon for drainage problems
                    },
                }).addTo(map);
                document.getElementById("toggle-drainage").textContent = "Hide Drainage Problem";
                isDrainageVisible = true;
            })
            .catch((error) => {
                console.error("Error loading GeoJSON:", error);
            });
    }
}
