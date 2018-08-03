(function () {
    'use strict';

    var number1 = [1, 3], number2 = [-2, 2];

    function add(one, two) {
        return [one[0] + two[0], one[1] + two[1]];
    }
    
    function subtract(one, two) {
        return [one[0] - two[0], one[1] - two[1]];
    }
    
    function multiply(one, two) {
        return [(one[0] * two[0]) - (one[1] * two[1]), (one[0] * two[1]) + (one[1] * two[0])];
    }
    
    function divide(one, two) {
        var three = two[0] * two[0] + two[1] * two[1];
        return [((one[0] * two[0]) + (one[1] * two[1])) / three,
                ((one[0] * -two[1]) + (one[1] * two[0])) / three];
    }
}());