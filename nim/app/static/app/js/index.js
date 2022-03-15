
    document.addEventListener('DOMContentLoaded', () => {
        console.log("GI Loaded...");
        const htmlObjects = (pile,count) => {
            
            const pileObjects =(pile, count) => {
                document.querySelector("#text").innerHTML += `<h1>Head - pile : ${pile}, counts : ${count} </h1>`;
            }

            const countsObjects = (pile, count) => {

                let listOfCounts = []
                for (let i = 0; i < count; i++) {
                    const count = i
                    listOfCounts.push(count)
                }
                listOfCounts.reverse()
                for (let i = 0; i < listOfCounts.length; i++) {
                    const count = listOfCounts[i];
                    // console.log(`pile ${pile} : count :${count}`);
                    document.querySelector("#text").innerHTML += `<button style="margin: 2px;" onclick="play('pile-${pile}-count-${count}')">${count}</button>`;
                    
                }
                
            }

            pileObjects(pile, count);
            countsObjects(pile, count);
        }  

        let piles = [1, 3, 5, 7];
        for (let i = 0; i < piles.length; i++) {
            const pile = i;
            const count = piles[i]
            htmlObjects(pile, count)
        }

    });



    // Wait for page to load
    document.addEventListener('DOMContentLoaded', () => {
        console.log("GE Loaded...");

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

                const actions = [];
                for (let i = 0; i < piles.length; i++) {
                    const element = piles[i];
                    for (let j of range(1, element + 1)) {
                        let tuple = Object.freeze([i, j]);
                        actions.push(tuple);
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

        const ai_play = async (game_piles) => {
            
            let url = '/app/demo';
            const reqOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: game_piles
            };
            const res = await fetch(url, reqOptions);
            const data = await res.json();
            const status = await res.status

            if (status === 200) {
                return data
            } else {
                console.log("Error");
                alert("An error occurd please try again")
                return "Error"
            }

        };

        game = new Nim();

        let human_player = null

        const randomPlayer = () => {
            return Math.floor(Math.random() * 2);
        };

        if (human_player === null) {
            human_player = randomPlayer();
        }

        // const available_actions = game.available_actions(game.piles);
        const available_actions = (game_piles) => {
            return game.available_actions(game_piles)
        }
        const available = (action, available_actions) => {
            let answer = false;
            for (let i = 0; i < available_actions.length; i++) {
                const element = available_actions[i];
                if(JSON.stringify(element) === JSON.stringify(action))
                answer = true
            }
            return answer;
        };

        
        if (game.player !== human_player){
            // AI
            document.querySelector("#player_bar").innerHTML = "AI's Turn";
            document.querySelector("#status_bar").innerHTML = game.piles
            console.log("sleep");
            game.move(parseInt('3'),parseInt('1'))
            document.querySelector("#actions_bar").innerHTML = `AI chose to take ${1} from pile ${3}.`;
            document.querySelector("#player_bar").innerHTML = "Your Turn";
        } else {
            // HUMAN
            document.querySelector("#player_bar").innerHTML = "Your Turn";
        }

        // set the game board
        document.querySelector("#status_bar").innerHTML = game.piles;
        document.getElementById("send").onclick = () => {
            // const start = play();
            if(available([parseInt(document.querySelector("#pile").value), parseInt(document.querySelector("#count").value)], available_actions(game.piles))){

                // Human
                game.move(parseInt(document.querySelector("#pile").value),parseInt(document.querySelector("#count").value));
                document.querySelector("#pile").value = '';
                document.querySelector("#count").value = '';
                document.querySelector("#actions_bar").innerHTML = `You chose to take ${parseInt(document.querySelector("#pile").value)} from pile ${parseInt(document.querySelector("#count").value)}.`;
                document.querySelector("#status_bar").innerHTML = game.piles;
                document.querySelector("#player_bar").innerHTML = "AI's Turn";
                
                // AI
                console.log("sleep");
                game.move(parseInt('3'), parseInt('1'));
                document.querySelector("#actions_bar").innerHTML = `AI chose to take ${1} from pile ${3}.`;
                document.querySelector("#player_bar").innerHTML = "Your Turn";
                document.querySelector("#status_bar").innerHTML = game.piles;
                if (game.winner !== null) {

                    document.querySelector("#status_bar").innerHTML = "GAME OVER";
                    const winner = game.winner == human_player ? "Human" : "AI";
                    document.querySelector("#player_bar").innerHTML = `Winner is ${winner}`;
                    return;

                }
            } else {
                // Invalid move
                document.querySelector("#actions_bar").innerHTML = "Invalid move try again";
            }

        }
 
    })



// <script>
//     // Wait for page to load
//     document.addEventListener('DOMContentLoaded', () => {
//         console.log("GE Loaded...");

//         class Nim {
//             constructor(initial = [1, 3, 5, 7]) {
//                 this.piles = initial;
//                 this.player = 0;
//                 this.winner = null;
//             }
//             available_actions(piles) {
//                 // impliment range like for python
//                 function* range(start, stop, step = 1) {
//                     if (stop == null) {
//                         // one param defined
//                         stop = start;
//                         start = 0;
//                     }

//                     for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
//                         yield i;
//                     }
//                 }

//                 const actions = [];
//                 for (let i = 0; i < piles.length; i++) {
//                     const element = piles[i];
//                     for (let j of range(1, element + 1)) {
//                         let tuple = Object.freeze([i, j]);
//                         actions.push(tuple);
//                     }
//                 }
//                 return actions;
//             }
//             other_player(playes) {
//                 return playes === 1 ? 0 : 1;
//             }
//             switch_player() {
//                 this.player = this.other_player(this.player);
//             }
//             move(pile, count) {
//                 if (this.winner !== null) {
//                     throw new Error("Game already won");
//                 } else if (pile < 0 || pile >= this.piles.length) {
//                     throw new Error("Invalid pile");
//                 } else if (count < 1 || count > this.piles[pile]) {
//                     throw new Error("Invalid number of objects");
//                 }
//                 // update pile
//                 this.piles[pile] -= count;
//                 this.switch_player();

//                 // check for a winner
//                 if (this.piles.every((e) => e === 0)) this.winner = this.player;
//             }
//         }

        const ai_play = async (game_piles) => {

            let url = '/app/demo';
            const reqOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: game_piles
            };
            const res = await fetch(url, reqOptions);
            const data = await res.json();
            const status = await res.status

            if (status === 200) {
                return data
            } else {
                console.log("Error");
                alert("An error occurd please try again")
                return "Error"
            }

        };

//         game = new Nim();

//         let human_player = null

//         const randomPlayer = () => {
//             return Math.floor(Math.random() * 2);
//         };

//         if (human_player === null) {
//             human_player = randomPlayer();
//         }

//         // const available_actions = game.available_actions(game.piles);
//         const available_actions = (game_piles) => {
//             return game.available_actions(game_piles)
//         }
//         const available = (action, available_actions) => {
//             let answer = false;
//             for (let i = 0; i < available_actions.length; i++) {
//                 const element = available_actions[i];
//                 if (JSON.stringify(element) === JSON.stringify(action))
//                     answer = true
//             }
//             return answer;
//         };


//         if (game.player !== human_player) {
//             // AI
//             document.querySelector("#player_bar").innerHTML = "AI's Turn";
//             document.querySelector("#status_bar").innerHTML = game.piles
//             console.log("sleep");
//             game.move(parseInt('3'), parseInt('1'))
//             document.querySelector("#actions_bar").innerHTML = `AI chose to take ${1} from pile ${3}.`;
//             document.querySelector("#player_bar").innerHTML = "Your Turn";
//         } else {
//             // HUMAN
//             document.querySelector("#player_bar").innerHTML = "Your Turn";
//         }

//         // set the game board
//         document.querySelector("#status_bar").innerHTML = game.piles;
//         document.getElementById("send").onclick = () => {
//             // const start = play();
//             if (available([parseInt(document.querySelector("#pile").value), parseInt(document.querySelector("#count").value)], available_actions(game.piles))) {

//                 // Human
//                 game.move(parseInt(document.querySelector("#pile").value), parseInt(document.querySelector("#count").value));
//                 document.querySelector("#pile").value = '';
//                 document.querySelector("#count").value = '';
//                 document.querySelector("#actions_bar").innerHTML = `You chose to take ${parseInt(document.querySelector("#pile").value)} from pile ${parseInt(document.querySelector("#count").value)}.`;
//                 document.querySelector("#status_bar").innerHTML = game.piles;
//                 document.querySelector("#player_bar").innerHTML = "AI's Turn";

//                 // AI
//                 console.log("sleep");
//                 game.move(parseInt('3'), parseInt('1'));
//                 document.querySelector("#actions_bar").innerHTML = `AI chose to take ${1} from pile ${3}.`;
//                 document.querySelector("#player_bar").innerHTML = "Your Turn";
//                 document.querySelector("#status_bar").innerHTML = game.piles;
//                 if (game.winner !== null) {

//                     document.querySelector("#status_bar").innerHTML = "GAME OVER";
//                     const winner = game.winner == human_player ? "Human" : "AI";
//                     document.querySelector("#player_bar").innerHTML = `Winner is ${winner}`;
//                     return;

//                 }
//             } else {
//                 // Invalid move
//                 document.querySelector("#actions_bar").innerHTML = "Invalid move try again";
//             }

//         }

//     })

//     document.addEventListener('DOMContentLoaded', () => {
//         console.log("GI Loaded...");
//         const htmlObjects = (pile, count) => {

//             const pileObjects = (pile, count) => {
//                 document.querySelector("#text").innerHTML += `<h1>Head - pile : ${pile}, counts : ${count} </h1>`;
//             }

//             const countsObjects = (pile, count) => {

//                 let listOfCounts = []
//                 for (let i = 0; i < count; i++) {
//                     const count = i
//                     listOfCounts.push(count)
//                 }
//                 listOfCounts.reverse()
//                 for (let i = 0; i < listOfCounts.length; i++) {
//                     const count = listOfCounts[i];
//                     // console.log(`pile ${pile} : count :${count}`);
//                     document.querySelector("#text").innerHTML += `<button style="margin: 2px;" onclick="play('pile-${pile}-count-${count}')">${count}</button>`;

//                 }

//             }

//             pileObjects(pile, count);
//             countsObjects(pile, count);
//         }

//         let piles = [1, 3, 5, 7];
//         for (let i = 0; i < piles.length; i++) {
//             const pile = i;
//             const count = piles[i]
//             htmlObjects(pile, count)
//         }

//     });


//     function play(object) {
//         alert(object);
//     }
// </script>

// ---------------------------------------------------------------------------------------------
        console.log("p1 : Start New Game ENGINE");
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
                const actions = [];
                for (let i = 0; i < piles.length; i++) {
                    const element = piles[i];
                    for (let j of range(1, element + 1)) {
                        let tuple = Object.freeze([i, j]);
                        actions.push(tuple);
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
        // Start New Game ENGINE
        const game = new Nim();
        console.log("p1 : Start New Game ENGINE - (Done)");

        console.log("p2 : Start New Game UI");
        const create_UI =(piles) => {
            const htmlObjects = (pile, count) => {
                const pileObjects = (pile, count) => {
                    document.querySelector("#root").innerHTML += `<h3>pile : ${pile}, counts : ${count} </h3>`;
                }
                const countsObjects = (pile, count) => {
                    let listOfCounts = []
                    for (let i = 0; i < count; i++) {
                        const count = i
                        listOfCounts.push(count)
                    }
                    listOfCounts.reverse()
                    for (let i = 0; i < listOfCounts.length; i++) {
                        const count = listOfCounts[i];
                        document.querySelector("#root").innerHTML += `<button style="margin: 2px;" onclick="play('pile-${pile}-count-${count}')">${count}</button>`;
                    }
                }
                pileObjects(pile, count);
                countsObjects(pile, count);
            }
            for (let i = 0; i < piles.length; i++) {
                const pile = i;
                const count = piles[i]
                htmlObjects(pile, count)
            }
        }
        // Start New Game UI
        const game_ui = create_UI(game.piles);
        console.log("p2 : Start New Game UI - (Done)");
