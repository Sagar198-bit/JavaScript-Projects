const RandomColourGenrator = () => {
  let HexValues = "0123456789ABCDEF";
  let Hexcode = "#";

  for (let idx = 0; idx <= 5; idx++) {
    Hexcode +=
      HexValues[Math.floor(Math.random() * HexValues.length)].toString();
  }

  document.body.style.backgroundColor = `${Hexcode}`;
  document.getElementById("clrcode").innerText = `${Hexcode}`;
};

let isGenrating = false;
let colorinterval;
document.getElementById("btn").addEventListener("click", () => {
  if (!isGenrating) {
    colorinterval = setInterval(RandomColourGenrator, 1000);
    document.getElementById("btn").innerText = "Stop";
    isGenrating = true;
  } else {
    clearInterval(colorinterval);
    document.getElementById("btn").innerText = "Start";
    document.body.style.backgroundColor = "white";
    document.getElementById("clrcode").innerHTML = "#ffffff";
    isGenrating = true;
  }
});
