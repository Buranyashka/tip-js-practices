"use strict";

const totalTasks = 5;
const completedTasks = 2;
const dailyLimit = 1001;

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



if (dailyLimit > 1000 || dailyLimit < 1){
    console.log("Ошибка: дневной лимит должен быть от 1 до 1000");
    process.exit()
}
else if (typeof (dailyLimit) !== "number"){
    console.log("Ошибка: дневной лимит должен быть числом, а не другим типом данных");
    process.exit()
}
else if (!Number.isInteger(dailyLimit)){
    console.log("Ошибка: дневной лимит должен быть целым числом");
    process.exit()
}

let tasksLeft = totalTasks - completedTasks;
console.log("Задач осталось: ", tasksLeft);
let dayCounter = 0;

while (tasksLeft > 0){
    dayCounter += 1;
    if (tasksLeft - dailyLimit <= 0){
        console.log("День ",dayCounter,": выполнено ", tasksLeft,", осталось 0");
        console.log("Потребуется дней: ", dayCounter);
        process.exit()
    }
    else{
        tasksLeft = tasksLeft - dailyLimit;
        console.log("День ",dayCounter,": выполнено ", dailyLimit,", осталось ",tasksLeft); 
    }

}