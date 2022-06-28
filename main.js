const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

const zero1 = document.querySelector(".zero1");
const zero2 = document.querySelector(".zero2");
const zero3 = document.querySelector(".zero3");

zero1.innerHTML = 0;
zero2.innerHTML = 0;
zero3.innerHTML = 0;

function click1() {
  card1.classList.toggle("card-change");

  //zero1.innerHTML = 0;

  count = zero1.innerHTML;
  ++count;
  zero1.innerHTML = count;
}

function click2() {
  card2.classList.toggle("card-change2");

  counter = zero2.innerHTML;
  ++counter;
  zero2.innerHTML = counter;
}

function click3() {
  card3.classList.toggle("change");
  //   if (card3 === "card3") {
  //     card3.classname = "styling";
  //   } else {
  //     card3.className = "card3";
  //   }

  counting = zero3.innerHTML;
  ++counting;
  zero3.innerHTML = counting;
}
