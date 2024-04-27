document.addEventListener('DOMContentLoaded', function() {
    // Get current year and update footer
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerText = ' ' + currentYear + ' Romel Patino. Ecuador';

    // Get last modified date and update footer
    var lastModified = new Date(document.lastModified);
    var formattedDate = formatDate(lastModified);
    document.getElementById('lastModified').innerText = 'Last modification: ' + formattedDate;
});

// Function to format date as MM/DD/YYYY HH:MM:SS
function formatDate(date) {
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());
    var year = date.getFullYear();
    var hours = padZero(date.getHours());
    var minutes = padZero(date.getMinutes());
    var seconds = padZero(date.getSeconds());
    return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}

// Function to add leading zero if needed
function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}
