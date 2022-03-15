// Wait for page to load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Loaded..");
    class Nim {
        constructor(initial = [1, 3, 5, 7]) {
            this.piles = initial;
            this.player = 0;
            this.winner = null;
        }
        available_actions(piles) {
            // impliment range like for python
            function* range(start, stop, step = 1) {
                if (stop == null) {
                    // one param defined
                    stop = start;
                    start = 0;
                }

                for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
                    yield i;
                }
            }

            const actions = new Set();
            for (let i = 0; i < piles.length; i++) {
                const element = piles[i];
                for (let j of range(1, element + 1)) {
                    let tuple = Object.freeze([i, j]);
                    actions.add(tuple);
                }
            }
            return actions;
        }
        other_player(playes) {
            return playes === 1 ? 0 : 1;
        }
        switch_player() {
            this.player = this.other_player(this.player);
        }
        move(pile, count) {
            if (this.winner !== null) {
                throw new Error("Game already won");
            } else if (pile < 0 || pile >= this.piles.length) {
                throw new Error("Invalid pile");
            } else if (count < 1 || count > this.piles[pile]) {
                throw new Error("Invalid number of objects");
            }
            // update pile
            this.piles[pile] -= count;
            this.switch_player();

            // check for a winner
            if (this.piles.every((e) => e === 0)) this.winner = this.player;
        }
    }

    function play(human_player = null) {
        const randomPlayer = () => {
            return Math.floor(Math.random() * 2);
        };
        if (human_player === null) {
            human_player = randomPlayer();
        }
        const game = new Nim();

        console.log(human_player);
        while (true) {
            console.log("piles:");
            for (let i = 0; i < game.piles.length; i++) {
                const pile = game.piles[i];
                console.log(`pile ${i}: ${pile}`);
            }
            const available_actions = game.available_actions(game.piles);
            // sleep

            const available = (action, available_actions) => {
                let answer = false;
                for (let each_action of available_actions) {
                    const valid_action = each_action.toString() === action.toString();
                    if (valid_action) answer = true;
                }
                return answer;
            };
            let pileHand = null;
            let countHand = null;
            if (game.player == human_player) {
                console.log("Your Turn");
                while (true) {
                    const pile = parseInt(prompt(`(HUMAN) - Choose Pile\n${game.piles}`));
                    const count = parseInt(prompt(`(HUMAN) - Choose Count\n${game.piles}`));
                    pileHand = pile;
                    countHand = count;
                    if (available([pile, count], available_actions)) break;
                    console.log("Invalid move try again");
                }
            // have Ai make a move
            } else {
                console.log("AI's Turn");
                // let action = ai.choose_action(game.piles);
                // pileHand = action[0];
                // countHand = action[1];
                // alert(`AI chose to take ${countHand} from ${pileHand}.`);
                while (true) {
                    const pile = parseInt(prompt(`(AI) - Choose Pile\n${game.piles}`));
                    const count = parseInt(prompt(`(AI - Choose Count\n${game.piles}`));
                    pileHand = pile;
                    countHand = count;
                    if (available([pile, count], available_actions)) break;
                    console.log("Invalid move try again");
                }
            }
            // make move
            game.move(pileHand, countHand);
            if (game.winner !== null) {
                console.log("GAME OVER");
                const winner = game.winner == human_player ? "Human" : "AI";
                console.log(`Winner is ${winner}`);
                alert(`Winner is ${winner}`);
                return;
            }
        }
    }

    const start = play();

    // play =(object)=> {
    //     // split the object > objectList
    //     const objectList = object.split('');
    //     // get the pile from the objectList > objectPileNo
    //     const objectPileNo = objectList[5]
    //     // get the btn no from the objectList > objectBtnNo
    //     const objectBtnNo = objectList[11]
    //     // console.log("objectBtnNo : " + objectBtnNo);
    //     // loop over the objectBtnNo 
    //     for (let i = 0; i < objectBtnNo; i++) {
    //         const element = `#pile-${objectPileNo}-btn-${i+1}`
    //         // check if btn with objectPileNo and objectBtnNo is not disabled and disable 
    //         if (document.querySelector(element).disabled !== true) {
    //             document.querySelector(element).disabled = true;
    //         } 
    //     }
    // }


})
