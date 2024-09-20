function headerMenu(menu) {
    const section = document.getElementById('header');
    let html = '<ul>';

    // Logo
    html += `<li><a href = "${baseUrl}" class = "logo-link" ><img class="logo-header" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg" alt="Logo" class="logo" /></a></li>`;

    // Iterate over each item in the menu
    menu.items.forEach(item => {
        if (item.dropdown) {
            // Dropdown item
            html += `
                <li class="display-none dropdown">
                    <a href="${item.url}" class="dropbtn">${item.name}</a>
                    <div class="dropdown-content">
                        ${item.dropdown.map(subItem => 
                            `<a href="${subItem.url}">${subItem.name}</a>`
                        ).join('')}
                    </div>
                </li>
            `;
        } else {
            // Regular item
            html += `
                <li class="display-none"><a href="${item.url}">${item.name}</a></li>
            `;
        }
    });

    // Add an image at the end of the menu
    html += `
        <li>
            <img id="menu-icon" class="menu-mobile" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/menu-mobile_256x256.png" />
        </li>
    `;

    html += '</ul>';
    section.innerHTML = html;

    
}

document.addEventListener('DOMContentLoaded', () => {
    headerMenu(menuJSON);
});
