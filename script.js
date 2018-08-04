(function () {
    'use strict';

    var form            = document.querySelector('form'),
        radios          = document.querySelectorAll('input[type=\"radio\"]'),
        i,
        calculation,
        answer;

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
    
    form.addEventListener('submit', function () {
        event.preventDefault();
        var number1     = [parseInt(document.getElementById('1r').value, 10),
                           parseInt(document.getElementById('1i').value, 10)],
            number2     = [parseInt(document.getElementById('2r').value, 10),
                           parseInt(document.getElementById('2i').value, 10)];
        for (i = 0; i < radios.length; i += 1) {
            if (radios[i].checked) {
                calculation = radios[i].value;
            }
        }
        switch (calculation) {
        case "add":
            answer = add(number1, number2);
            break;
        case "subtract":
            answer = subtract(number1, number2);
            break;
        case "multiply":
            answer = multiply(number1, number2);
            break;
        case "divide":
            answer = divide(number1, number2);
            break;
        }
        document.getElementById('ar').textContent = Math.round(answer[0] * 100) / 100;
        document.getElementById('ai').textContent = Math.round(answer[1] * 100) / 100;
    }, false);
}());