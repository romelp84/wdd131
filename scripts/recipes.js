
function flipCard(card) {
    card.querySelector('.card-inner').classList.toggle('flipped');
}

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});

document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.recipe-card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


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

