export function loadAbout() {
    const contentDiv = document.getElementById('content');

    const heading = document.createElement('h1')
    heading.textContent = 'About Us';

    const image = document.createElement('img');
    image.src = require('../assets/images/about.jpg');
    image.alt = 'staff';
    image.style.maxWidth = '600px';

    const description = document.createElement('p');
    description.textContent = 'Welcome to the best restaurant in town! Enjoy our delicious meals.';

    // append elements to the div

    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(description);

}