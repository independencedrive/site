// Aqu� est� el men� en formato JSON
const menuJSON = {
    "entradas": [
        {
            "nombre": "Ensalada C�sar",
            "precio": 8.50,
            "descripcion": "Ensalada fresca con lechuga, pollo, queso parmesano y aderezo C�sar."
        },
        {
            "nombre": "Sopa de Tomate",
            "precio": 6.00,
            "descripcion": "Sopa cremosa de tomate con albahaca y crujientes trozos de pan."
        }
    ],
    "platosPrincipales": [
        {
            "nombre": "Filete Mignon",
            "precio": 22.00,
            "descripcion": "Filete de res a la parrilla con guarnici�n de vegetales y papas."
        },
        {
            "nombre": "Pasta Alfredo",
            "precio": 18.00,
            "descripcion": "Pasta con una suave salsa Alfredo, champi�ones y pollo a la parrilla."
        }
    ],
    "postres": [
        {
            "nombre": "Tiramis�",
            "precio": 7.00,
            "descripcion": "Postre italiano con capas de caf� y mascarpone."
        },
        {
            "nombre": "Cheesecake",
            "precio": 6.50,
            "descripcion": "Cheesecake cremoso con base de galleta y mermelada de fresa."
        }
    ],
    "bebidas": [
        {
            "nombre": "Vino Tinto",
            "precio": 9.00,
            "descripcion": "Vino tinto de la regi�n de Bordeaux."
        },
        {
            "nombre": "C�ctel Margarita",
            "precio": 8.00,
            "descripcion": "C�ctel cl�sico de tequila con lim�n y sal."
        }
    ]
};

// Funci�n para cargar el men� en el div
function cargarMenu(menu) {
    const headerDiv = document.getElementById('header');
    let html = '';

    // Iterar sobre cada categor�a del men�
    for (const categoria in menu) {
        html += `<h2>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>`;
        
        // Iterar sobre los �tems en cada categor�a
        menu[categoria].forEach(item => {
            html += `
                <div class="item">
                    <h3>${item.nombre}</h3>
                    <p>Precio: $${item.precio.toFixed(2)}</p>
                    <p>${item.descripcion}</p>
                </div>
            `;
        });
    }

    headerDiv.innerHTML = html;
}

// Llamar a la funci�n para cargar el men�
cargarMenu(menuJSON);
