const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  const navBar = document.querySelector(".right");
  navBar.classList.toggle("active");
};
// Disable right-click
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Disable specific key combinations
document.addEventListener("keydown", function (event) {
  // F12
  if (event.key === "F12") {
    event.preventDefault();
  }
  // Ctrl + Shift + C
  if (event.ctrlKey && event.shiftKey && event.key === "C") {
    event.preventDefault();
  }
  // Ctrl + U (View Source)
  if (event.ctrlKey && event.key === "U") {
    event.preventDefault();
  }
});
