const products = [
    {
        id: '00001',
        name: 'Prodyct 01',
        avgRating: 4.5
    },
    {
        id: '00002',
        name: 'Product 02',
        avgRating: 4.7
    },
    {
        id: '00003',
        name: 'Product 03',
        avgRating: 3.5
    },
    {
        id: '00004',
        name: 'Product 04',
        avgRating: 3.9
    },
    {
        id: '00005',
        name: 'Product 05',
        avgRating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-name');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
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
