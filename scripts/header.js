// Aquí está el menú en formato JSON
const menuJSON = {
    "entradas": [
        {
            "nombre": "Ensalada César",
            "precio": 8.50,
            "descripcion": "Ensalada fresca con lechuga, pollo, queso parmesano y aderezo César."
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
            "descripcion": "Filete de res a la parrilla con guarnición de vegetales y papas."
        },
        {
            "nombre": "Pasta Alfredo",
            "precio": 18.00,
            "descripcion": "Pasta con una suave salsa Alfredo, champiñones y pollo a la parrilla."
        }
    ],
    "postres": [
        {
            "nombre": "Tiramisú",
            "precio": 7.00,
            "descripcion": "Postre italiano con capas de café y mascarpone."
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
            "descripcion": "Vino tinto de la región de Bordeaux."
        },
        {
            "nombre": "Cóctel Margarita",
            "precio": 8.00,
            "descripcion": "Cóctel clásico de tequila con limón y sal."
        }
    ]
};

// Función para cargar el menú en el div
function cargarMenu(menu) {
    const headerDiv = document.getElementById('header');
    let html = '';

    // Iterar sobre cada categoría del menú
    for (const categoria in menu) {
        html += `<h2>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>`;
        
        // Iterar sobre los ítems en cada categoría
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

// Llamar a la función para cargar el menú
cargarMenu(menuJSON);
