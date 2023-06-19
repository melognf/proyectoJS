const productos = [
    {
        id: 1,
        nombre: "Appetite for destruccion",
        cantidad: 1,
        desc: "Guns N Roses",
        precio: 15000,
        img: "img/cd1.jpg"
    },
    {
        id: 2,
        nombre: "Nevermind",
        cantidad: 1,
        desc: "Nirvana",
        precio: 16000,
        img: "img/cd2.jpg"
    },
    {
        id: 3,
        nombre: "Exile on main street",
        cantidad: 1,
        desc: "The Rolling Stones",
        precio: 18000,
        img: "img/cd3.jpg"
    },
    {
        id: 4,
        nombre: "Wandering Spirit",
        cantidad: 1,
        desc: "Mick Jagger",
        precio: 15000,
        img: "img/cd4.jpg"
    },
    {
        id: 5,
        nombre: "Let it be",
        cantidad: 1,
        desc: "The Beatles",
        precio: 20000,
        img: "img/cd5.jpg"
    },
    {
        id: 6,
        nombre: "On the night",
        cantidad: 1,
        desc: "Dire Straits",
        precio: 19000,
        img: "img/cd6.jpg"
    },
    {
        id: 7,
        nombre: "Never mind the bollocks",
        cantidad: 1,
        desc: "Sex Pistols",
        precio: 15000,
        img: "img/cd7.jpg"
    },
    {
        id: 8,
        nombre: "Greatest Hits",
        cantidad: 1,
        desc: "The Police",
        precio: 16000,
        img: "img/cd8.jpg"
    },
    {
        id: 9,
        nombre: "Greatest Hits",
        cantidad: 1,
        desc: "Sumo",
        precio: 17000,
        img: "img/cd9.jpg"
    },
    {
        id: 10,
        nombre: "Palabras mas, palabras menos",
        cantidad: 1,
        desc: "Los Rodriguez",
        precio: 18000,
        img: "img/cd10.jpg"
    },
    {
        id: 11,
        nombre: "Dookie",
        cantidad: 1,
        desc: "Green day",
        precio: 19000,
        img: "img/cd11.jpg"
    },
    {
        id: 12,
        nombre: "La grasa de las capitales",
        cantidad: 1,
        desc: "Seru Giran",
        precio: 20000,
        img: "img/cd12.jpg"
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "cardV";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">$ ${product.precio}</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat) {
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        carritoCounter();
        saveLocal();
        }
    });
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}















