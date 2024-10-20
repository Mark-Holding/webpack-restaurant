import { loadMenu } from './modules/menu';
import { loadContact } from './modules/contact';
import { loadHome } from './modules/home';
import { loadAbout } from './modules/about';

function switchTab(tabFunction) {
    const contentDiv = document.getElementById('content')
    contentDiv.innerHTML = '';

    tabFunction();
}

document.getElementById('home-btn').addEventListener('click', () => {
    switchTab(loadHome);
});

document.getElementById('menu-btn').addEventListener('click', () => {
    switchTab(loadMenu);
});

document.getElementById('about-btn').addEventListener('click', () => {
    switchTab(loadAbout);
});

document.getElementById('contact-btn').addEventListener('click', () => {
    switchTab(loadContact);
});

switchTab(loadHome);