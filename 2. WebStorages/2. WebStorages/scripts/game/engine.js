define(['game/game', 'game/storage', 'game/ui', 'lib/jQuery'], function (game, storage, ui, Valio) {
    var engine = (function () {
        function run() {
            var generatedNumber = game.generateNumber(),
                tries = 0,
                button = $('#check');

            button.click(function () {
                var input = ui.getGivenNumber(),
                    currRes,
                    nick,
                    topScores;

                //addSound
                (function btnClicked() {
                    var clicked = new Audio('./sounds/click.mp3');
                    clicked.volume = 1;
                    clicked.play();
                })();

                if ((game.validateNumber(input))) {
                    currRes = game.getCurrentResult(generatedNumber, input);
                    ui.showCurrentResult(currRes);
                    tries++;

                    //if the number is guessed
                    if (currRes.ram === 4) {
                        ui.finalMessage(tries);
                        nick = ui.getNickname();
                        storage.addScore(nick, tries);
                        topScores = storage.getScores();
                        ui.fillHighScores(topScores);
                        $('#highScores').css('display', 'block');
                        playAgain();
                    }

                }
            });

            function playAgain() {
                var again = $('<button>').attr('id', 'playAgain').text('Play again');
                $('#wrapper').append(again);
                again.click(function () {
                    location.reload();
                });
            };

        }
        return {
            run: run
        }
    })();

    return engine;
})
