const productos = [
  { id: 1, nombre: "PC Gamer" },
  { id: 2, nombre: "Teclado Mecanico" },
  { id: 3, nombre: "Audifonos Gamer" }
]

const contenedorCarrito = document.getElementById('carrito');

function render() {
  contenedorCarrito.innerHTML = ""

  productos.forEach((producto, index) => {
    const itemDiv = document.createElement('div')
    itemDiv.className = "item"

    itemDiv.innerHTML = `
      <span>${producto.nombre}</span>
      <button class="eliminar" onclick="eliminarItem(${index})">Eliminar</button>`

    contenedorCarrito.appendChild(itemDiv)
  });

  if (productos.length === 0) {
    contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>"
  }
}

function eliminarItem(indice) {
  productos.splice(indice, 1)
  render()
}

render()