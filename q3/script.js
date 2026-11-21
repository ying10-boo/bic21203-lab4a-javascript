const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  numberList.textContent = "";

  for (let number = 1; number <= 5; number++) {
    const item = document.createElement("li");
    item.textContent = "The number is " + number;
    numberList.appendChild(item);
  }
}

generateBtn.addEventListener("click", generateNumbers);