const menuJSON = {
    "home": {
        "name": "Home",
        "url": "index.html"
    },
    "about": {
        "name": "About Us",
        "url": "about.html"
    },
    "services": {
        "name": "Services",
        "url": "services.html"
    },
    "contact": {
        "name": "Contact",
        "url": "contact.html"
    },
    "blog": {
        "name": "Blog",
        "url": "blog.html"
    }
};

function loadMenu(menu) {
    const headerDiv = document.getElementById('header');
    let html = '<ul>';
    for (const key in menu) {
        const item = menu[key];
        html += `
            <li><a href="${item.url}">${item.name}</a></li>
        `;
    }

    html += '</ul>';
    headerDiv.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    loadMenu(menuJSON);
});
