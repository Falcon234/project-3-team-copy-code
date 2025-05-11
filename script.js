// 1. Перевірка на високосний рік
function checkLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);
    const output = document.querySelectorAll(".outputtext")[0];
  
    if (isNaN(year)) {
      output.textContent = "Будь ласка, введіть коректний рік.";
      return;
    }
  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      output.textContent = "Ви народилися у високосний рік!";
    } else {
      output.textContent = "Ваш рік народження не є високосним.";
    }
  }
  // 2. Вгадай число 
  function checkGuessNumber() {
    const userInput = document.getElementById("guessNinput").value;
    const output = document.querySelector(".outputNtext");
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const computerNumber = numbers[randomIndex];
    if (parseInt(userInput) === computerNumber) {
      output.textContent = `Вітаю, ви вгадали число!(${computerNumber})`;
    } else {
      output.textContent = `Ви програли. Комп’ютер загадав ${computerNumber}`;
    }
  }
  // 3. Конвертація хвилин 
  function checktimekalck() {
    const minutes = parseInt(document.getElementById("timekalckinput").value);
    const output = document.querySelector(".outputtime");
  
    if (isNaN(minutes) || minutes < 0) {
      output.textContent = "Введіть додатне число хвилин.";
      return;
    }
  
    const hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
  
    if (mins < 10) {
      mins = "0" + mins;
    }
  
    output.textContent = hours + ":" + mins;
  }
  
  // 4. Найбільше з 3 чисел
  function checkMaxNumber() {
    const a = +document.querySelectorAll("#maxnuminput")[0].value;
    const b = +document.querySelectorAll("#maxnuminput")[1].value;
    const c = +document.querySelectorAll("#maxnuminput")[2].value;
    const output = document.getElementById("result");
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
  
    output.textContent = "Найбільше число, яке ви ввели — " + max;
  }
  document.querySelectorAll("#maxnuminput").forEach(input => {
    input.addEventListener("input", checkMaxNumber);
  });
