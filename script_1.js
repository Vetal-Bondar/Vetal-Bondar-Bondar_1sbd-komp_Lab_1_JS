console.log('Текст задачі:   Ввести координати точок A1(x1,y1), A2(x2,y2), A3(x3,y3) і визначити, чи лежать ці точки на одній прямій. Відповідь вивести у вигляді повідомлення у консолі.')
function tochki() {

  const checkNum = (value) => {
    return !isNaN(parseFloat(value));
  };

  const x1 = prompt("X для точки A1:");
  const y1 = prompt("Y для точки A1:");
  const x2 = prompt("X для точки A2:");
  const y2 = prompt("Y для точки A2:");
  const x3 = prompt("X для точки A3:");
  const y3 = prompt("Y для точки A3:");

  if (!checkNum(x1) || !checkNum(y1) || !checkNum(x2) || !checkNum(y2) || !checkNum(x3) || !checkNum(y3)) {
    alert("Помилка! Введіть дійсні числа!");
    return;
  }

  console.log(`Введені дані: A1(${x1},${y1}); A2(${x2},${y2}); A3(${x3},${y3})`);

  // Обчислення модуля різниці координат
  const k1 = Math.abs((y2 - y1) / (x2 - x1));
  const k2 = Math.abs((y3 - y2) / (x3 - x2));

  if (k1 === k2) {
    console.log("Точки лежать на одній прямій");
  } else {
    console.log("Точки не лежать на одній прямій");
  }
}

tochki();



