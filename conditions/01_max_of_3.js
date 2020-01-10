const fs = require('fs');
const path = require("path");
eval(fs.readFileSync(path.resolve(__dirname, "./common/base.js"))+'');
/*

 Написать функцию вывода среднего числа из 3х

 Условие:
 a, b, c != null
 a, b, c >= 0
 a != b
 b != c
 a != c

 Пример #1:
 input: 1,2,3
 output: 2

 Пример #2:
 input: 101,30,75
 output: 75
*/
var findMax = function (a, b, c) {
    return undefined;
}


function test() {
    verify(findMax, [1, 2, 3], 2);
    verify(findMax, [4, 3, 2], 3);
    verify(findMax, [2, 3, 1], 2);
    verify(findMax, [0, 33, 11], 11);
    verify(findMax, [14, 0, 177], 14);
    verify(findMax, [2, 7, 0], 7);
    printResult()
}
test();