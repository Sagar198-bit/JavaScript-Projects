const Button = document.querySelectorAll(".btn");
const Images = document.querySelectorAll("img");
const innerContainer = document.getElementById("innerContainer");
let Count = 1;
Button.forEach((Buttons) => {
  Buttons.addEventListener("click", function (event) {
    if (event.target.id === "PreviousButton") {
      PreviousImage();
    }
    if (event.target.id === "NextButton") {
      NextImage();
    }
  });
});

function NextImage() {
  if (Count < Images.length) {
    innerContainer.style.transform = `translateX(-${Count * 1000}px)`;
    Count++;
  } else {
    Count = 1;
    innerContainer.style.transform = `translateX(0px)`;
  }
}

function PreviousImage() {
    
    if (Count < Images.length) {
        innerContainer.style.transform = `translateX(-${ `${Count - 2}` * 1000}px)`;
        Count--;
      } 
}
