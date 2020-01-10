const fs = require('fs');
const path = require("path");
eval(fs.readFileSync(path.resolve(__dirname, "./common/base.js"))+'');
/*
 [Задани для проверки работы]
 Написать cуммы двух чисел

 Условие:
 a, b >= 0

*/
var getSum = function (a, b) {
    return undefined;
}


function test() {
    verify(getSum, [1, 2], 3);
    verify(getSum, [4, 3], 7);
    verify(getSum, [0, 0], 0);
    printResult()
}
test();