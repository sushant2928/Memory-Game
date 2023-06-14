"use strict";

const words = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];
words.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");

let previouslyClickedValue;

words.map((word, index) => {
  const column = document.createElement("button");
  column.classList.add(...["rounded-none", "bg-blue-200"]);
  column.id = index;
  column.textContent = "?";
  column.addEventListener("click", function () {
    if (column.textContent === "?") {
      column.textContent = word;
      if (!previouslyClickedValue) previouslyClickedValue = { word, id: index };
      else {
        if (previouslyClickedValue.word === word) {
          column.removeEventListener("click", this);
          document
            .getElementById(previouslyClickedValue.id)
            .removeEventListener("click", this);
          alert("Matched");
        } else {
          column.textContent = "?";
          console.log(document.getElementById(previouslyClickedValue.id));
          document.getElementById(previouslyClickedValue.id).textContent = "?";
          alert("Try Again");
        }
        previouslyClickedValue = null;
      }
    }
  });
  grid.appendChild(column);
});
