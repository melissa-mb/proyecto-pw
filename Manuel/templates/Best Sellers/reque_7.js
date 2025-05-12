document.addEventListener("DOMContentLoaded", () => {
  const juegos = [
    "Game 1", "Game 2", "Game 3", "Game 4", "Game 5",
    "Game 6", "Game 7", "Game 8", "Game 9", "Game 10"
  ];

  const gamesList = document.getElementById("games-list");

  juegos.forEach(nombre => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card card-game h-100 text-center">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="${nombre}">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <button class="btn btn-outline-light btn-sm">Detalles</button>
        </div>
      </div>
    `;
    gamesList.appendChild(col);
  });
});