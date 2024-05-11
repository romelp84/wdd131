document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerText = ' ' + currentYear + ' Romel Patino. Ecuador';
    
    var lastModified = new Date(document.lastModified);
    var formattedDate = formatDate(lastModified);
    document.getElementById('lastModified').innerText = 'Last modification: ' + formattedDate;

});
function formatDate(date) {
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());
    var year = date.getFullYear();
    var hours = padZero(date.getHours());
    var minutes = padZero(date.getMinutes());
    var seconds = padZero(date.getSeconds());
    return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}
