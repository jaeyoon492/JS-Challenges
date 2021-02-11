const title = document.getElementById("hello");
const body = document.querySelector("body");

title.style.color = "white";
body.style.backgroundColor = "blue";

function handleResize() {
  if (window.innerWidth < 600) {
    body.style.backgroundColor = "red";
  } else if (window.innerWidth <= 900) {
    body.style.backgroundColor = "blue";
  } else if (window.innerWidth <= 1200) {
    body.style.backgroundColor = "green";
  }
  console.log(window.innerWidth);
}

window.addEventListener("resize", handleResize);
