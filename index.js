const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    document.querySelector("div.grid-item").addEventListener('mouseover', () => {
        document.querySelector("div.grid-item").classList.add(".hoverd");
    });
  };
};

makeRows(16, 16);




