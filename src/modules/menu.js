export function loadMenu() {
    const contentDiv = document.getElementById('content');

    const heading = document.createElement('h1')
    heading.textContent = 'This is our Menu';

    const image = document.createElement('img');
    image.src = require('../assets/images/menu.png');
    image.alt = 'menu';
    image.style.maxWidth = '600px';

    const description = document.createElement('p');
    description.textContent = 'Welcome to the best restaurant in town! Enjoy our delicious meals.';

    // append elements to the div

    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(description);

}