console.log('Текст задачі: Ввести послідовність натуральних чисел менших за N та обчислити кількість і суму тих членів послідовності, які діляться на 5 і не діляться на 7.')
function checkNum57(number) {
  return (number % 5 === 0 && number % 7 !== 0);
}

function main() {
  let n = Number(prompt("Число N більше 5: "));
  if (isNaN(n) || n <= 5) {
    alert("Невірне N. Повторіть спробу.");
    return;
  }

  let sequenceLength = Number(prompt("Кількість членів послідовності: "));
  if (isNaN(sequenceLength) || sequenceLength <= 2) {
    alert("Неправильне кількість членів. Має бути більше 2.");
    return;
  }

  let suitableNumbersCount = 0;
  let suitableNumbersSum = 0;
  let sequence = [];

  for (let i = 0; i < sequenceLength; i++) {
    let number = Number(prompt(`Число ${i + 1}: `));
    if (isNaN(number)) {
      alert("Неправильне число. Повторіть спробу.");
      return;
    }
    if (number > n) {
      alert(`Число ${number} більше N (${n}). Повторіть введення.`);
      i--;
      continue;
    }
    sequence.push(number);

    if (checkNum57(number)) {
      suitableNumbersCount++;
      suitableNumbersSum += number;
    }
  }

  console.log("Введена послідовність:", sequence);
  console.log(`Уведено такі дані: N = ${n}, кількість членів послідовності = ${sequenceLength}`);
  console.log(`Кількість підходящих чисел: ${suitableNumbersCount}`);
  if (suitableNumbersCount > 0) {
    console.log(`Сума підходящих чисел: ${suitableNumbersSum}`);
  } else {
    console.log("Підходящих чисел немає.");
  }
}

main();
