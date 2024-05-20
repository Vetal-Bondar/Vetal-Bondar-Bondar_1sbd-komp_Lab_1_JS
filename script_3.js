console.log('Текст задачі: Вивести всі двозначні числа, сума квадратів цифр яких ділиться на 13.')
const numbers = [...Array(90)].map((_, i) => i + 10);
function isSquare(num) {
  return Math.sqrt(num) === Math.floor(Math.sqrt(num));
}

function isDivisibleBy13(num) {
  return num % 13 === 0;
}

for (const number of numbers) {
  const square = number * number;
  if (isSquare(square) && isDivisibleBy13(square)) {
    console.log(`Число ${number}. Квадрат числа ${square}. Число ${square} ділиться націло на 13 (буде ${square / 13})`);
  }
}
