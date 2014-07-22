define([], function () {
    'use strict';
    var game = (function () {

        function generateNumber() {
            var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

            var generatedNumber = [],
                roller = 0,
                possibleDigits = digits,
                index;

            while (possibleDigits.length > 6) {
                index = Math.floor(Math.random() * (10 - roller));
                while (roller === 0 && possibleDigits[index] === '0') {
                    index = Math.floor(Math.random() * (10 - roller));
                }
                generatedNumber.push(possibleDigits[index]);
                possibleDigits.splice(index, 1);
                roller++;
            }
            console.log('Generated number is: ' + generatedNumber);
            return generatedNumber;
        }

        function validateNumber(num) {
            var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

            var isValid = true;


            if (num.length !== 4) {
                alert('You must enter a 4-digit number.');
                isValid = false;
            }
            if (num[0] === '0') {
                alert('Number can`t start with 0.');
                isValid = false;
            }

            for (var i = 0; i < 4; i++) {
                if (digits.indexOf(num[i]) === -1) {
                    alert('Invalid input. You must enter digits.');
                    isValid = false;
                    return;
                }
                for (var j = i + 1; j < 4; j++) {
                    if (num[i] === num[j]) {
                        alert('Invalid input. You must enter non-repeating digits.');
                        isValid = false;
                        return;
                    }
                }
            }

            return isValid;
        }

        function getCurrentResult(generatedNum, givenNum) {
            var sheep = 0,
                ram = 0,
                i;

            for (i = 0; i < generatedNum.length; i++) {
                if (generatedNum[i] === givenNum[i]) {
                    ram++;
                }
                else if (generatedNum.indexOf(givenNum[i]) != -1) {
                    sheep++;
                }
            }
            return {
                givenNum: givenNum,
                sheep: sheep,
                ram: ram
            }
        }

        return {
            generateNumber: generateNumber,
            validateNumber: validateNumber,
            getCurrentResult: getCurrentResult
        }

    })();
    return game;
})
