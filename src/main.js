/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  function generateRandomSuit() {
    let suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    return suits[Math.floor(Math.random() * suits.length)];
  }

  function generateRandomNumber() {
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    {
      return numbers[Math.floor(Math.random() * numbers.length)];
    }
  }
  var design = generateRandomSuit();

  if (design == "&hearts;" || design == "&diams;") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
    document.querySelector(".numbers").style.color = "red";
  } else if (design == "&spades;" || design == "&clubs;") {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
    document.querySelector(".numbers").style.color = "black";
  }

  document.querySelector(".top-suit").innerHTML = design;
  document.querySelector(".bottom-suit").innerHTML = design;
  document.querySelector(".numbers").innerHTML = generateRandomNumber();
};
