console.log('Текст задачі: Скільки цифр в даному числі кратні N? Чи правильно, що в даному числі сума першої та останньої дорівнює K?')
const checkNumberRange = (num, min, max) => {
    if (num < min || num > max) {
      throw new Error(`Число має бути в діапазоні від ${min} до ${max}`);
    }
  };
  const getNumberOfMultiples = (num, n) => {
    let count = 0;
    for (const digit of num.toString()) {
      if (Number(digit) % n === 0) {
        count++;
      }
    }
    return count;
  };
  const checkSumOfFirstAndLast = (num, k) => {
    const [first, last] = num.toString().split("");
    return Number(first) + Number(last) === k;
  };
  const main = () => {
    try {
      let num = Number(prompt("Число A діапазон[-999999, 999999], окрім діапазону [-11, 11]:"));
      checkNumberRange(num, -999999, 999999);
      if (num >= -11 && num <= 11) {
        throw new Error("Число не маэ бути від -11 до 11");
      }
      let n = Number(prompt("Число кратності N (від 2 до 9):"));
      checkNumberRange(n, 2, 9);
      let k = Number(prompt("Число К від -9 до 18:"));
      checkNumberRange(k, -9, 18);
  
      const countMultiples = getNumberOfMultiples(num, n);
      const isSumCorrect = checkSumOfFirstAndLast(num, k);
  
      console.log(
        `В даному числі (${num}), кількість чисел кратні (${n}) - ${countMultiples} шт. ${
          countMultiples > 0 ? `(${getNumberOfMultiples(num, n)})` : "таких немає"}.`);
  
      if (isSumCorrect) {
        console.log(`Правильно, К = ${k} = сумі першого та останнього числа A (${num})`);
      } else {
        console.log(`Не правильно, сума першої та останньої цифри числа A (${num}) не дорівнює К (${k}).`);
      }
    } catch (error) {
      console.error(`Помилка, треба зробити заново: ${error.message}`);
    }
  };
  main();
  
  
  