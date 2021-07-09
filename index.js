import DonutMaker from "./DonutMarker.js";

const filsanDonutMaker = new DonutMaker(10, 0, 100, 1, 10, 1);

const donutCounterElement = document.querySelector(".donut-count");
const donutMultiplierElement = document.querySelector(".donuts-per-click");
const autoClickerCounterElement = document.querySelector(".autoclicker");

const addDonutButton = document.querySelector(".add-donut");
const addAutoClickerButton = document.querySelector(".add-autoclicker");
const addDonutMultiplierButton = document.querySelector(
  ".add-donut-multiplier"
);

const updateDonutCounter = function () {
  donutCounterElement.innerHTML = filsanDonutMaker.getNumDonut();
  console.log("donuts");
};

const updateDonutMultiplier = function () {
  donutMultiplierElement.innerText = filsanDonutMaker.getDonutsPerClick();
};

const updateAutoClickerCounter = function () {
  autoClickerCounterElement.innerText = filsanDonutMaker.getNumAutoClicker();
};

addDonutButton.addEventListener("click", function () {
  filsanDonutMaker.addDonut();
  updateDonutCounter();
});

addAutoClickerButton.addEventListener("click", function () {
  filsanDonutMaker.addAutoClicker();
  updateDonutCounter();
  updateAutoClickerCounter();
});

addDonutMultiplierButton.addEventListener("click", function () {
  filsanDonutMaker.addDonutMultiplier();
  updateDonutCounter();
  updateDonutMultiplier();
});

updateDonutCounter();
updateDonutMultiplier();
updateAutoClickerCounter();
