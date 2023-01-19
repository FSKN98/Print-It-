var index = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//Fonction création des bulets points
function createBuletsPoint() {
  slides.forEach((el, index) => {
    var element = document.createElement("div");
    if (index === 0) {
      element.className = "dot dot_selected";
    } else {
      element.className = "dot";
    }
    document.getElementsByClassName("dots")[0].appendChild(element);
  });
}
//Lancement de la fonction
createBuletsPoint();

//Fonction slides suivantes

function increment() {
  index = index + 1;

  if (index === slides.length) {
    index = 0;
  }
  slides.forEach((el, pointIndex) => {
    if (index === pointIndex) {
      document.getElementsByClassName("dot")[pointIndex].className =
        "dot dot_selected";
    } else {
      document.getElementsByClassName("dot")[pointIndex].className = "dot";
    }
  });
  const source = "./assets/images/slideshow/" + slides[index].image;
  document.querySelector("#banner img").src = source;
  document.querySelector("#banner p").innerHTML = slides[index].tagLine;
}
const arrowRights = document.getElementsByClassName("arrow_right");
for (const arrowRight of arrowRights) {
  arrowRight.addEventListener("click", increment, false);
}
//Fonction slides précédentes

function decrement() {
  index = index - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  slides.forEach((el, pointIndex) => {
    if (index === pointIndex) {
      document.getElementsByClassName("dot")[pointIndex].className =
        "dot dot_selected";
    } else {
      document.getElementsByClassName("dot")[pointIndex].className = "dot";
    }
  });
  const source = "./assets/images/slideshow/" + slides[index].image;

  document.querySelector("#banner img").src = source;
  document.querySelector("#banner p").innerHTML = slides[index].tagLine;
}
const arrowLefts = document.getElementsByClassName("arrow_left");
for (const arrowLeft of arrowLefts) {
  arrowLeft.addEventListener("click", decrement, false);
}
