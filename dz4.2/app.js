
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} × ${i} = ${number * i}`);
    }
  }
  
  const number = parseInt(prompt("Введите число для таблицы умножения:"), 10);
  printMultiplicationTable(number);
  