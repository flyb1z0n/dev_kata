var fs = require('fs');
eval(fs.readFileSync('./common/base.js')+'');



/*
 Даны координаты точки, какой координатной четверти принадлежит точка?
 (http://math-prosto.ru/images/system_of_axis/coordinate_quartes.png)

 Вывод:'I','II','III','IV'

 Условие:
 x,y != 0

 Пример #1:
 input: 1, 1
 output: I

 Пример #2:
 input: 101,-30
 output: IV
*/


var findQuadrant = function (x, y) {
    return undefined;
}


function test() {
    verify(findQuadrant, [1, 1], 'I');
    verify(findQuadrant, [-1, 1], 'II');
    verify(findQuadrant, [-1, -1], 'II');
    verify(findQuadrant, [1, -1], 'IV');

    verify(findQuadrant, [13, 127], 'I');
    verify(findQuadrant, [-7, 15], 'II');
    verify(findQuadrant, [-72, -44], 'II');
    verify(findQuadrant, [12, -2], 'IV');
    printResult()
}
test();