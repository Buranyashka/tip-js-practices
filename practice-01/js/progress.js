"use strict";

const totalTasks = 12;
const completedTasks = 5;

if (totalTasks == 0 && completedTasks == 0){
    console.log("Задач пока нет");
    process.exit()
}

else if (totalTasks < 0 || completedTasks < 0){
    console.log("Ошибка: отрицательное количество");
    process.exit()
}

else if (completedTasks > totalTasks){
    console.log("Ошибка: выполнено больше, чем существует");
    process.exit()
}

else if (Number.isNaN(totalTasks) === true || Number.isNaN(completedTasks) === true){
    console.log("Ошибка: недопустимое числовое значение");
    process.exit()
}

else if ( (typeof (totalTasks) === "number" && Number.isInteger(totalTasks) === false) || (typeof (completedTasks) === "number" && Number.isInteger(completedTasks) === false)){
    console.log("Ошибка: дробное количество");
    process.exit()
}

else if ( (typeof (totalTasks) !== "number") || (typeof (completedTasks) !== "number")){
    console.log("Ошибка: вместо числа передана строка");
    process.exit()
}

else if (totalTasks > 1000){
    console.log("Ошибка: превышена верхняя граница");
    process.exit()
}

const tasksLeft = totalTasks - completedTasks;
const progress = Math.round(completedTasks / totalTasks * 1000) / 10;
console.log("Всего задач: ", totalTasks, "\nВыполнено: ", completedTasks, "\n Осталось: ", tasksLeft, "\nПрогресс: ", progress);

if (totalTasks == tasksLeft){
    console.log("Статус: Не начато");
}
else if (totalTasks == completedTasks){
    console.log("Статус: Завершено");
}
else{
    console.log("Статус: В работе");
}