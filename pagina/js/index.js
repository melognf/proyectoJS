document.addEventListener("DOMContentLoaded", cargaInicial);

function cargaInicial() {
    cargarCarritoLocalStorage();
    verCarrito();
}


const discos = [
    {
        id: 1,
        nombre: "Appetite for destruccion",
        cantidad: 1,
        desc: "Disco de Guns N Roses",
        precio: 15000,
        img: "img/cd1.jpg"
    },
    {
        id: 2,
        nombre: "Nevermind",
        cantidad: 1,
        desc: "Disco de Nirvana",
        precio: 16000,
        img: "img/cd2.jpg"
    },
    {
        id: 3,
        nombre: "Exile on main street",
        cantidad: 1,
        desc: "Disco de The Rolling Stones",
        precio: 18000,
        img: "img/cd3.jpg"
    },
    {
        id: 4,
        nombre: "Wandering Spirit",
        cantidad: 1,
        desc: "Disco de Mick Jagger",
        precio: 15000,
        img: "img/cd4.jpg"
    },
    {
        id: 5,
        nombre: "Let it be",
        cantidad: 1,
        desc: "Disco de The Beatles",
        precio: 20000,
        img: "img/cd5.jpg"
    },
    {
        id: 6,
        nombre: "On the night",
        cantidad: 1,
        desc: "Disco de Dire Straits",
        precio: 19000,
        img: "img/cd6.jpg"
    },
    {
        id: 7,
        nombre: "Never mind the bollocks",
        cantidad: 1,
        desc: "Disco de Sex Pistols",
        precio: 15000,
        img: "img/cd7.jpg"
    },
    {
        id: 8,
        nombre: "Greatest Hits",
        cantidad: 1,
        desc: "Disco de The Police",
        precio: 16000,
        img: "img/cd8.jpg"
    }
];

let carrito = [];

const contenedor = document.getElementById("contenedorCd");

discos.forEach((disco) => {
    const {id, nombre, precio, desc, img, cantidad} = disco;
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">Precio: $ ${precio}</p>
    <p class="card-text">Descripcion: ${desc}</p>
    <p class="card-text">Cantidad: ${cantidad}</p>
    <button onclick="agregarProducto(${id})" class="btn btn-primary">Agregar al carrito</button>
  </div>
</div>
    `
});

function agregarProducto(id) {
    const item = discos.find(disco => disco.id === id);
    let itemAgregado = carrito.find(disco => disco.id === id);

    if(itemAgregado) {
        itemAgregado.cantidad++;
    }else{
        carrito.push(item);
    }

    verCarrito();
    guardarLocalStorage();
}


function verCarrito() {
    const mostrar = document.getElementById("ventanita");
    mostrar.innerHTML = "";
    
    carrito.forEach((p, index) => {
        let producto = document.createElement('div');
        producto.classList.add("card");

        producto.innerHTML = `
        <img class="card ventanita" src="${p.img}" alt="">
        <h5>${p.nombre}</h5>
        <p>${p.desc}</p>
        <p>Precio: ${p.precio}</p>
        <p>Cantidad: ${p.cantidad}</p>
        <button id="${p.id}" class="btnEliminar">ELIMINAR</button>
        `
        const flecha = document.getElementById('flechaAbajo');
        flecha.style.marginBottom = '0';

        mostrar.appendChild(producto);
        producto.querySelector('button').addEventListener('click', ()=> {
            eliminarDelCarrito(index);
        })
    })
}

function eliminarDelCarrito(indice) {
    carrito[indice].cantidad--;

    if(carrito[indice].cantidad === 0) {
        carrito.splice(indice, 1);
        const flecha = document.getElementById('flechaAbajo');
        flecha.style.marginBottom = '350px';
    }

    verCarrito();
    guardarLocalStorage();
}

function guardarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoLocalStorage() {
    if(localStorage.getItem('carrito')!==null) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }else {
        carrito = [];
    }
}