
define(['lib/jQuery'], function (rosi) {
    'use strict';

    var ui = (function () {
        function getGivenNumber() {
            var $num = $('#inputField').val();
            $('#inputField').val('');

            return $num;
        }

        function fillHighScores(scores) {
            var scoreUl = $('#highScoresUl');

            //remove undefined values
            for (var i = 0; i < scores.length; i++) {
                if (typeof (scores[i]) == 'undefined') {
                    scores = scores.slice(0, [i]);
                    break;
                }
            }

            var len = scores.length;

            for (var i = 0; i < (len < 10 ? len : 10) ; i++) {
                var currLi = $('<li>').attr('id', 'score' + [i]);
                currLi.html((i + 1) + '. ' + scores[i].nick + ' ,score: ' + scores[i].score);
                scoreUl.append(currLi);
            }
        }

        function getNickname() {
            return prompt('Enter nickname: ', 'Anonymous');
        }

        function finalMessage(moves) {
            alert('Good job, You won with ' + moves + ' guesses!');
        }

        function showCurrentResult(result) {
            var triesUl = $('#numbersUl'),
                currLi = $('<li>');

            currLi.html(result.givenNum + ' : ');

            for (var i = 0; i < result.ram; i++) {
                var ramImg = $('<img>').attr('src', '../images/ram.gif');
                currLi.append(ramImg);
            }

            for (var i = 0; i < result.sheep; i++) {
                var sheepImg = $('<img>').attr('src', '../images/sheep4.gif');
                currLi.append(sheepImg);
            }

            triesUl.append(currLi);
        }

        return {
            getGivenNumber: getGivenNumber,
            fillHighScores: fillHighScores,
            getNickname: getNickname,
            finalMessage: finalMessage,
            showCurrentResult: showCurrentResult
        }

    })();

    return ui;
})