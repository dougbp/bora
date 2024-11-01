// Initialize the map and set its view to a specific location
var map = L.map('map').setView([0, 0], 2); // Set initial view to the world

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Placeholder for adding event markers
function addEventMarker(lat, lng, eventName) {
    L.marker([lat, lng]).addTo(map).bindPopup(eventName);
}

// Example events - replace with dynamic data later
addEventMarker(-23.5505, -46.6333, 'Event in São Paulo');
addEventMarker(40.7128, -74.0060, 'Event in New York');