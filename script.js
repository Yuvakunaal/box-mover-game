window.addEventListener("load", function () {
  if (!sessionStorage.getItem("hasReloaded")) {
    sessionStorage.setItem("hasReloaded", "true");
    location.reload();
  }
});

let info = document.querySelector(".info");
let box = document.querySelector(".box");
let arrows = document.querySelectorAll(".arrows div");

info.addEventListener("click", function () {
  if (window.innerWidth >= 765) {
    const instructions = `
    🎮 Keyboard Game Controls 🎮
    =========================
    🔼 or w or W - Move Up
    ▶️ or d or D - Move Right
    🔽 or s or S - Move Down
    ◀️ or a or A - Move Left
    r or R - Reset position`;
    alert(instructions);
  } else {
    const instructions = `
    🎮 Game Controls 🎮
    =========================
    🔼 - Move Up
    ▶️ - Move Right
    🔽 - Move Down
    ◀️ - Move Left
    ⌖ - Reset position`;
    alert(instructions);
  }
});

function moveUp() {
  let currentTop = parseInt(window.getComputedStyle(box).top) || 0;
  let travel = currentTop - 15;

  if (travel >= 15) {
    box.style.top = travel + "px";
  } else {
    box.style.top = "20px";
  }
}

function moveRight() {
  let currentLeft = parseInt(window.getComputedStyle(box).left) || 0;
  let boxWidth = box.offsetWidth;
  let maxRight = window.innerWidth - boxWidth;
  let travel = currentLeft + 15;
  if (travel <= maxRight) {
    box.style.left = travel + "px";
  } else {
    box.style.left = maxRight + 20 + "px";
  }
}

function moveDown() {
  let currentTop = parseInt(window.getComputedStyle(box).top) || 0;
  let boxHeight = box.offsetHeight;
  let maxBottom = window.innerHeight - boxHeight;
  let travel = currentTop + 15;
  if (travel <= maxBottom) {
    box.style.top = travel + "px";
  } else {
    box.style.top = maxBottom + 20 + "px";
  }
}

function moveLeft() {
  let currentLeft = parseInt(window.getComputedStyle(box).left) || 0;
  let travel = currentLeft - 15;
  if (travel >= 15) {
    box.style.left = travel + "px";
  } else {
    box.style.left = "20px";
  }
}

function reset() {
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%, -50%)";
}

// Desktops
document.addEventListener("keydown", function (event) {
  let key = event.key;

  switch (key) {
    case "w":
    case "W":
    case "ArrowUp":
      moveUp();
      break;

    case "d":
    case "D":
    case "ArrowRight":
      moveRight();
      break;

    case "s":
    case "S":
    case "ArrowDown":
      moveDown();
      break;

    case "a":
    case "A":
    case "ArrowLeft":
      moveLeft();
      break;

    case "r":
    case "R":
      reset();
      break;

    default:
      break;
  }
});

// Mobiles
arrows[0].addEventListener("click", function () {
  moveUp();
});

arrows[1].addEventListener("click", function () {
  moveRight();
});

arrows[2].addEventListener("click", function () {
  moveDown();
});

arrows[3].addEventListener("click", function () {
  moveLeft();
});

arrows[4].addEventListener("click", function () {
  reset();
});
