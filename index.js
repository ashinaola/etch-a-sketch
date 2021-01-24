const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

document.querySelectorAll('div .grid-item').forEach(grid => grid.addEventListener("mouseover", function(e) {
  this.style.backgroundColor="Black"
}));

document.querySelector('#clear').addEventListener("click", function() {
  document.querySelectorAll('div .grid-item').forEach(grid2 => grid2.style.backgroundColor = "White");
});



