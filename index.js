const actualPart = document.getElementById("part").textContent;
let num = document.getElementById("number");
let pages = document.getElementsByClassName("page");

function next() {
  let newPart = Number(actualPart) + 1;
  window.location.href = `part${newPart}.html`;
}

function previous() {
  let newPart = Number(actualPart) - 1;
  if (newPart == 0) {
    window.location.href = `index.html`;
  } else {
    window.location.href = `part${newPart}.html`;
  }
}

function switchPage(n) {
  for (let i = 0; i < 4; i++) {
    pages[i].ariaCurrent = null;
  }
  if (n == 0 && Number(num.textContent) > 1) {
    num.textContent = Number(num.textContent) - 1;
  } else if (n == 5 && Number(num.textContent) < 4) {
    num.textContent = Number(num.textContent) + 1;
  } else if ([1, 2, 3, 4].includes(n)) {
    num.textContent = n;
  }
  pages[Number(num.textContent) - 1].ariaCurrent = "page";
}
