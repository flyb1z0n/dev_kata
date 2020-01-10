const fs = require('fs');
const path = require("path");
eval(fs.readFileSync(path.resolve(__dirname, "./common/base.js"))+'');


/*
    Вывести количество дней в месяце?
    (описание какой год является высокостным)

    Условие:
    1 <= month <= 12

    Для удобства считать что в феврале 28 дней.
    В случае если входные данные неверные - вернуть -1;


    Example#1:
    input: 1
    output: 31

    Example#2:
    input: 365
    output: -1

*/


var numberOfDays = function (month) {
}


function test() {
    verify(numberOfDays, [1], 31);
    verify(numberOfDays, [2], 28);
    verify(numberOfDays, [3], 31);
    verify(numberOfDays, [4], 30);

    verify(numberOfDays, [5], 31);
    verify(numberOfDays, [6], 30);
    verify(numberOfDays, [7], 31);
    verify(numberOfDays, [8], 31);

    verify(numberOfDays, [9], 30);
    verify(numberOfDays, [10], 31);
    verify(numberOfDays, [11], 30);
    verify(numberOfDays, [12], 31);

    verify(numberOfDays, [0], -1);
    verify(numberOfDays, [12312], -1);
    verify(numberOfDays, [13], -1);
    verify(numberOfDays, [-1], -1);
    verify(numberOfDays, [-77], -1);
    printResult()
}
test();