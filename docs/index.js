const password = document.querySelector("#password");
const generate = document.querySelector("#generate");
const copy = document.querySelector("#copy");
let length = document.querySelector("#length").value;
const lengthVar = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbols");

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "~!@@#$%^&*()_+=-[]{}|<>,./?:;";

//length event
lengthVar.addEventListener("change", function (e) {
  length = e.target.value;
});
//uppercase event
uppercase.addEventListener("click", function () {
  if (uppercase.value === "checked") {
    uppercase.value = "unChecked";
  } else {
    uppercase.value = "checked";
  }
});

//lowercase event
lowercase.addEventListener("click", function () {
  if (lowercase.value === "checked") {
    lowercase.value = "unChecked";
  } else {
    lowercase.value = "checked";
  }
});
//number event
number.addEventListener("click", function () {
  if (number.value === "unChecked") {
    number.value = "checked";
    chars += numbers;
  } else {
    number.value = "unChecked";
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }
});
//sumbol event
symbol.addEventListener("click", function () {
  if (symbol.value === "unChecked") {
    symbol.value = "checked";
    chars += symbols;
  } else {
    number.value = "unChecked";
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }
});

generate.addEventListener("click", function () {
  let passChar = "";
  let charlength = chars.length;

  for (let i = 0; i < length; i++) {
    passChar += chars.charAt(Math.floor(Math.random() * charlength));
  }

  if (uppercase.value === "checked") {
    password.value = passChar.toLocaleUpperCase();
  } else if (lowercase.value === "checked") {
    password.value = passChar.toLocaleLowerCase();
  } else if (number.value === "checked") {
    password.value = passChar;
  } else if (symbol.value === "checked") {
    password.value = passChar;
  } else {
    password.value = passChar;
  }
});

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(password.value);
  alert("Password copied!");
});
