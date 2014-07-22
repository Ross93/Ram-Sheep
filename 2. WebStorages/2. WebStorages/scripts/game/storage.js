define([], function () {
    'use strict';

    var storage = (function () {
        function addScore(nick, score) {
            var scoresInStorage = localStorage.getItem('ScoresInStorage');

            if (!scoresInStorage) {
                scoresInStorage = [];
            }
            else {
                scoresInStorage = JSON.parse(scoresInStorage);
            }

            scoresInStorage.push({
                nick: nick,
                score: score
            });

            //sort all scores
            if (scoresInStorage.length > 1) {
                scoresInStorage = scoresInStorage.sort(function (first, second) {
                    return first.score - second.score;
                });
            }

            localStorage.setItem('ScoresInStorage', JSON.stringify(scoresInStorage));
        }

        function getScores() {
            var scoresInStorage = JSON.parse(localStorage.getItem('ScoresInStorage')),
                scoresToPrint = [],
                i;

            for (i = 0; i < 10; i++) {
                scoresToPrint[i] = scoresInStorage[i]
            }

            return scoresToPrint;
        }

        return {
            addScore: addScore,
            getScores: getScores
        }

    })();

    //localStorage.clear();

    return storage;
})