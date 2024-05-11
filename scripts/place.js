window.addEventListener('load', function() {
    // Update current year and last modified date
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerText = ' ' + currentYear + ' Romel Patino. Imbabura';

    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modified: " + lastModified;

    // Calculate and display windchill factor
    var temperature = 64; // Example temperature in Fahrenheit
    var windSpeed = 19.71; // Example wind speed in mph
    var windchillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill-factor').textContent = windchillFactor + ' °F';
});

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill);
    } else {
        return 'N/A';
    }
}
