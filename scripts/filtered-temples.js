const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Quito Temple",
        location: "Quito, Ecuador",
        dedicated: "2022, November, 20",
        area: 27830,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/800x500/quito_ecuador_temple.jpg"
    },
    {
        templeName: "Guayaquil",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 1",
        area: 70884,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/800x500/guayaquil-ecuador-temple-1159057-wallpaper.jpg"
    },
    {
        templeName: "Arequipa",
        location: "Arequipa, Peru",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
    },
];

function createTempleCard(temple) {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".image-grid").appendChild(card);
}

function renderTemples(filterFn, title) {
    const grid = document.querySelector(".image-grid");
    grid.innerHTML = ''; // Clear the current content

    const header = document.querySelector('header');
    // Remove any existing title element
    const existingTitle = document.querySelector('header h2');
    if (existingTitle) {
        header.removeChild(existingTitle);
    }

    if (title) {
        const titleElement = document.createElement("h2");
        titleElement.textContent = title;
        header.appendChild(titleElement);
    }

    temples.filter(filterFn).forEach(temple => createTempleCard(temple));
}

function parseDate(dateStr) {
    const [year, month, day] = dateStr.split(', ').map(part => part.trim());
    const months = {
        "January": 0, "February": 1, "March": 2, "April": 3,
        "May": 4, "June": 5, "July": 6, "August": 7,
        "September": 8, "October": 9, "November": 10, "December": 11
    };
    return new Date(year, months[month], day);
}

document.querySelector('nav ul').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const filter = event.target.textContent.toLowerCase();
        switch(filter) {
            case 'old':
                renderTemples(temple => parseDate(temple.dedicated) < new Date(1900, 0, 1), 'Old Temples');
                break;
            case 'new':
                renderTemples(temple => parseDate(temple.dedicated) > new Date(2000, 0, 1), 'New Temples');
                break;
            case 'large':
                renderTemples(temple => temple.area > 90000, 'Large Temples');
                break;
            case 'small':
                renderTemples(temple => temple.area < 10000, 'Small Temples');
                break;
            case 'home':
                renderTemples(() => true, 'All Temples');
                break;
        }
    }
});

document.addEventListener('DOMContentLoaded', () => renderTemples(() => true, 'All Temples'));

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('open');
    });
});