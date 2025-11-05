const form = document.getElementById("squareForm");
const sideInput = document.getElementById("side");
const perimeterOutput = document.getElementById("perimeter");
const areaOutput = document.getElementById("area");
const diagonalOutput = document.getElementById("diagonal");
const inscribedRadiusOutput = document.getElementById("inscribedRadius");
const circumscribedRadiusOutput = document.getElementById("circumscribedRadius");
const resultsSection = document.getElementById("results");


const squareCalculator = {
  perimeter(side) {
    return 4 * side;
  },
  area(side) {
    return side * side;
  },
  diagonal(side) {
    return Math.sqrt(2) * side;
  },
  inscribedRadius(side) {
    return side / 2;
  },
  circumscribedRadius(side) {
    return this.diagonal(side) / 2;
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const side = parseFloat(sideInput.value);
  if (isNaN(side) || side <= 0) {
    alert("Zadej platnou délku strany čtverce!");
    return;
  }

  perimeterOutput.textContent = squareCalculator.perimeter(side).toFixed(2);
  areaOutput.textContent = squareCalculator.area(side).toFixed(2);
  diagonalOutput.textContent = squareCalculator.diagonal(side).toFixed(2);
  inscribedRadiusOutput.textContent = squareCalculator.inscribedRadius(side).toFixed(2);
  circumscribedRadiusOutput.textContent = squareCalculator.circumscribedRadius(side).toFixed(2);
});
