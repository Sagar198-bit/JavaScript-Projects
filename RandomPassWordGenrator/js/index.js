const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

const PasssWordField = document.getElementById("PassWordField");
const LengthofPassWord = document.getElementById("LengthofPassword");
const UpperCase = document.getElementById("UpperCase");
const LowerCase = document.getElementById("LowerCase");
const Numbers = document.getElementById("numbers");
const SpecialCharacters = document.getElementById("SpecialSymbols");
const Button = document.getElementById("btn");
const inputags = document.querySelectorAll("AllCases");

const getRandomData = (data) => {
  return data[Math.floor(Math.random() * data.length)];
};

const getRandomPassword = (Password = " ") => {
  if (UpperCase.checked) {
    Password += getRandomData(capitalLetters);
  }
  if (LowerCase.checked) {
    Password += getRandomData(smallLetters);
  }
  if (Numbers.checked) {
    Password += getRandomData(numbers);
  }
  if (SpecialCharacters.checked) {
    Password += getRandomData(specialCharacters);
  }
  if (parseInt(LengthofPassWord.value) >= parseInt(Password.length)) {
    return getRandomPassword(Password);
  }

  const TruncatePassWord = truncate(
    Password,
    parseInt(LengthofPassWord.value) + 1
  );
  return TruncatePassWord;
};

Button.addEventListener("click", function () {
  const RandomPassword = getRandomPassword();
  PasssWordField.innerText = `${RandomPassword}`;
});

const truncate = (string, length) => {
  const TruncateString = string.substr(0, length);
  return TruncateString;
};

document.getElementById("copybtn").addEventListener("click", (e) => {
  e.preventDefault();
  getcopiedtoclipboard();
});

async function getcopiedtoclipboard() {
  const text = document.getElementById("PassWordField").innerHTML;
  try {
    await navigator.clipboard.writeText(text);

    console.log("Yess it is copied to clipbaord ");
  } catch (err) {
    console.log("Opps there was na error !!");
  }
}
