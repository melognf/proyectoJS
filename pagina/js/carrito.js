const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-contentV";
        carritoContent.innerHTML =`
        <img src="${product.img}">
        <h3 class="tit">${product.nombre}</h3>
        <p>$ ${product.precio}</p>
        <span class="restar"> ➖ </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> ➕ </span>
        <p>Precio parcial: $ ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ❌ Eliminar del carrito </span>
        `
        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1){
                product.cantidad--;
                pintarCarrito();
                Toastify({
                    text: "quitaste un producto!",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: false,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "red",
                    },
                  }).showToast();
            }
        });

        let sumar = carritoContent.querySelector(".sumar");

        sumar.addEventListener("click", () => {
                product.cantidad++;
                pintarCarrito();
                Toastify({
                    text: "Agregaste un producto!",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: false,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#47a15b",
                    },
                  }).showToast();
        });

        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            Swal.fire({
                title: 'Estas seguro?',
                text: "Eliminar este producto",
                icon: 'warning',
                color: '#007fff',
                background: '#1f1e1e',
                showCancelButton: true,
                confirmButtonColor: '007fff',
                cancelButtonColor: '#d33',
                iconColor: 'yellow',
                confirmButtonText: 'Si, quiero eliminarlo!'
              }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Has eliminado el producto!!',
                        showConfirmButton: false,
                        timer: 2000,
                        background: '#1f1e1e',
                        iconColor: '#47a15b',
                        color: '#007fff'
                      })
                  eliminarProducto(product.id);

                }
              })
        })

    });

    const total = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: $ ${total}`;

    modalContainer.append(totalBuying);
    };

    verCarrito.addEventListener("click", pintarCarrito);

    const eliminarProducto = (id) => {
        const findId = carrito.find((element) => element.id === id);

        carrito = carrito.filter((carritoId) => {
            return carritoId !== findId;
        });
        carritoCounter();
        saveLocal();
        pintarCarrito();
        
    }

    const carritoCounter = () => {
        cantidadCarrito.style.display = "block";

        const carritoLength = carrito.length;

        localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

        cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    }

    carritoCounter();