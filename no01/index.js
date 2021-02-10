const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const target = document.getElementById("hello");
const html = document.querySelector("html");

const superEventHandler = {
  mouseover: function () {
    target.innerHTML = "Mouse is on top";
    target.style.color = colors[0];
  },
  mouseout: function () {
    target.innerHTML = "Mouse is gone";
    target.style.color = colors[1];
  },
  resize: function () {
    target.innerHTML = "Window is resize";
    target.style.color = colors[2];
  },
  mousedown: function (event) {
    console.log(event);
    if (event.buttons === 2) {
      target.innerHTML = "That was a right click!";
      target.style.color = colors[3];
    }
  },
};

target.addEventListener("mouseover", superEventHandler.mouseover);
target.addEventListener("mouseout", superEventHandler.mouseout);
window.addEventListener("resize", superEventHandler.resize);
html.addEventListener("mousedown", superEventHandler.mousedown);
