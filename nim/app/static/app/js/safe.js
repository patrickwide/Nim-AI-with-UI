
            // alert("The game will start");
            // const game = new Nim();
            // (async () => {
            //     console.log("Start : ", game.piles);
            //     console.log(await ai_play(game.piles));
            //     console.log("End", game.piles);
            // })();





        // game
        // [1,3,5,7]

        // view
        // [
        //     0,
        //     000,
        //     00000,
        //     00000[0]#,
        // ]
       
        // target = 2
        
        
        // disabled = 0
        // loop(view[3])
            // if (view === #):
                // disabled++
            // else:
                // (pass) 

        // ans = target - disabled
        // log(ans)
        // 

        // results
            // 1
// -------------------------------------------------------------------------
<button style="margin: 5px; border-radius: 50%; width: 50px; height: 50px; background: rgb(233, 30, 126); color: white; border: 5px solid rgb(136, 14, 79); font-size: 32px; padding: 0px;" ></button>
















// --------------------------------------------------------------------------
{/* <h1 id="status_bar"></h1>
<h1 id="player_bar"></h1>
<p id="actions_bar"></p>
<br>
<label for="pile">Enter Pile</label>
<br>
<input type="text" id="pile">
<br>
<label for="count">Enter Count</label>
<br>
<input type="text" id="count">
<br><br>
<button id="send">play</button>
<button onclick="play('pile-3-count-1')" id="pile-3-count-1">1</button>
<br> */}

// --------------------------------------------------------------------------
    // <h1>Game page</h1>
    // <button id="send">send</button>

    // <p>pile 0</p>
    // <button onclick="play('pile-0-count-1')" id="pile-0-count-1" >1</button>

    // <p>pile 1</p>
    // <button onclick="play('pile-1-count-3')" id="pile-1-count-3" >3</button>
    // <button onclick="play('pile-1-count-2')" id="pile-1-count-2" >2</button>
    // <button onclick="play('pile-1-count-1')" id="pile-1-count-1" >1</button>

    // <p>pile 2</p>
    // <button onclick="play('pile-2-count-5')" id="pile-2-count-5" >5</button>
    // <button onclick="play('pile-2-count-4')" id="pile-2-count-4" >4</button>
    // <button onclick="play('pile-2-count-3')" id="pile-2-count-3" >3</button>
    // <button onclick="play('pile-2-count-2')" id="pile-2-count-2" >2</button>
    // <button onclick="play('pile-2-count-1')" id="pile-2-count-1" >1</button>

    // <p>pile 3</p>
    // <button style="margin: 5px;color: aqua;" onclick="play('pile-3-count-7')" id="pile-3-count-7" >7</button>
    // <button onclick="play('pile-3-count-6')" id="pile-3-count-6" >6</button>
    // <button onclick="play('pile-3-count-5')" id="pile-3-count-5" >5</button>
    // <button onclick="play('pile-3-count-4')" id="pile-3-count-4" >4</button>
    // <button onclick="play('pile-3-count-3')" id="pile-3-count-3" >3</button>
    // <button onclick="play('pile-3-count-2')" id="pile-3-count-2" >2</button>
    // <button onclick="play('pile-3-count-1')" id="pile-3-count-1" >1</button>

// --------------------------------------------------------------------------
{/* <script>
    console.log("GU Loaded...");
    function play(object) {
        // split the object > objectList
        const objectList = object.split('');
        // console.log("objectList : " + objectCountNo);
        
        // get the pile from the objectList > objectPileNo
        const objectPileNo = objectList[5]
        // console.log("objectPileNo : " + objectCountNo);
        
        // get the btn no from the objectList > objectBtnNo
        const objectCountNo = objectList[13]
        // console.log("objectCountNo : " + objectCountNo);
        document.getElementById("status").innerHTML = "ok";
        for (let i = 0; i < objectCountNo; i++) {
            const element = objectCountNo;
            
        }
        // // loop over the objectCountNo 
        for (let i = 0; i < objectCountNo; i++) {
            const element = `#pile-${objectPileNo}-count-${i + 1}`;
            // check if btn with objectPileNo and objectCountNo is not disabled and disable 
            if (document.querySelector(element).disabled !== true) {
                document.querySelector(element).disabled = true;
            }
        }
    }
    // play = (object) => {
    //     // split the object > objectList
    //     const objectList = object.split('');
    //     // console.log("objectList : " + objectCountNo);

    //     // get the pile from the objectList > objectPileNo
    //     const objectPileNo = objectList[5]
    //     // console.log("objectPileNo : " + objectCountNo);

    //     // get the btn no from the objectList > objectBtnNo
    //     const objectCountNo = objectList[13]
    //     // console.log("objectCountNo : " + objectCountNo);

    //     // loop over the objectCountNo 
    //     for (let i = 0; i < objectCountNo; i++) {
    //         const element = `#pile-${objectPileNo}-count-${i + 1}`;
    //         // check if btn with objectPileNo and objectCountNo is not disabled and disable 
    //         if (document.querySelector(element).disabled !== true) {
    //             document.querySelector(element).disabled = true;
    //         }
    //     }
    // }

</script> */}

// --------------------------------------------------------------------------
        // const play = (object) => {
        //     // split the object > objectList
        //     const objectList = object.split('');
        //     // console.log("objectList : " + objectCountNo);
            
        //     // get the pile from the objectList > objectPileNo
        //     const objectPileNo = objectList[5]
        //     // console.log("objectPileNo : " + objectCountNo);
            
        //     // get the btn no from the objectList > objectBtnNo
        //     const objectCountNo = objectList[13]
        //     // console.log("objectCountNo : " + objectCountNo);


        //     console.log(objectCountNo);
        //     console.log(objectCountNo);
            
            // const doDisable = (objectPile, objectCount) => {
                
                //     // loop over the objectCount 
            //     for (let i = 0; i < objectCount; i++) {
            //         const element = `#pile-${objectPile}-count-${i + 1}`;
            //         // check if btn with objectPile and objectCountNo is not disabled and disable 
            //         if (document.querySelector(element).disabled !== true) {
                //             document.querySelector(element).disabled = true;
            //         }
            //     }
            
            // }
            
            // console.log("Me");
            // game.move(objectPileNo, objectCountNo)
            // doDisable(objectPileNo, objectCountNo);
            // console.log(`game piles : ${game.piles}`);
            // console.log("sleep");
            // console.log("AI");
            // game.move(3, 1)
            // doDisable(3, 1)
            // console.log(`game piles : ${game.piles}`);

        // }

// --------------------------------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Game</title>
// </head>

// <body>

// </body>
// <script>
//     document.addEventListener('DOMContentLoaded', () => {
//         console.log("😀😍😶🤗🤗");

//         function play(object) {
//             // split the object > objectList
//             const objectList = object.split('');
//             // console.log("objectList : " + objectCountNo);

//             // get the pile from the objectList > objectPileNo
//             const objectPileNo = objectList[5]
//             // console.log("objectPileNo : " + objectCountNo);

//             // get the btn no from the objectList > objectBtnNo
//             const objectCountNo = objectList[13]
//             // console.log("objectCountNo : " + objectCountNo);
//             document.getElementById("status").innerHTML = "ok";
//             for (let i = 0; i < objectCountNo; i++) {
//                 const element = objectCountNo;

//             }
//             // // loop over the objectCountNo 
//             // for (let i = 0; i < objectCountNo; i++) {
//             //     const element = `#pile-${objectPileNo}-count-${i + 1}`;
//             //     // check if btn with objectPileNo and objectCountNo is not disabled and disable 
//             //     if (document.querySelector(element).disabled !== true) {
//             //         document.querySelector(element).disabled = true;
//             //     }
//             // }
//         }
//     });
// </script>
// </html>
// --------------------------------------------------------------------------
// Wait for page to load
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("Game loaded...");    
//     play =(object)=> {
//         // split the object > objectList
//         const objectList = object.split('');
//         // get the pile from the objectList > objectPileNo
//         const objectPileNo = objectList[5]
//         // get the btn no from the objectList > objectBtnNo
//         const objectBtnNo = objectList[11]
//         // console.log("objectBtnNo : " + objectBtnNo);
//         // loop over the objectBtnNo 
//         for (let i = 0; i < objectBtnNo; i++) {
//             const element = `#pile-${objectPileNo}-btn-${i+1}`
//             // check if btn with objectPileNo and objectBtnNo is not disabled and disable 
//             if (document.querySelector(element).disabled !== true) {
//                 document.querySelector(element).disabled = true;
//             } 
//         }
//     }

// })

// --------------------------------------------------------------------------










            // const ai_play = async () => {
                
            //     let url = '/app/demo';
            //     const reqOptions = {
            //         method: 'POST',
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify({
            //             gameBoard: game.piles,
            //         })
            //     };
            //     const res = await fetch(url, reqOptions);
            //     alert("Ok")
            //     game.move(3, 1) 
            //     const data = await res.json();
            //     const status = await res.status

            //     if (status === 200) {
            //         return data
            //     } else {
            //         console.log("Error");
            //         alert("An error occurd please try again")
            //         return "Error"
            //     }

            // };


                    //             (async()=>{
                    //     console.log("Start : ", game.piles);
                    //     const go = await ai_play();
                    //     console.log("End", game.piles);
                    // })();


                    
        // const ai_play = async () => {

        //     let url = '/app/demo';
        //     const reqOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             gameBoard: game.piles,
        //         })
        //     };
        //     const res = await fetch(url, reqOptions);
        //     const data = await res.json();
        //     const status = await res.status

        //     if (status === 200) {
        //         game.move(data.pile,data.count)
        //        return false
        //     } else {
        //         console.log("Error");
        //         alert("An error occurd please try again")
        //         return false
        //     }
            
        // };




        //     // // ai
        //     // const ai_play = async () => {

        //     //     let url = '/app/demo';
        //     //     const reqOptions = {
        //     //         method: 'POST',
        //     //         headers: { 'Content-Type': 'application/json' },
        //     //         body: JSON.stringify({
        //     //             gameBoard: game.piles,
        //     //         })
        //     //     };
        //     //     const res = await fetch(url, reqOptions);
        //     //     const data = await res.json();
        //     //     const status = await res.status

        //     //     if (status === 200) {
        //     //         console.log("Fooooooooooooooooooooooooooooooooooooooooooood");
        //     //         game.move(data.pile, data.count)
        //     //         return false
        //     //     } else {
        //     //         console.log("Error");
        //     //         alert("An error occurd please try again")
        //     //         return false
        //     //     }

        //     // };
                                
            
        //     // while (true) {


        //     //     const pile = prompt(`(AI) - Choose Pile\nGame piles : [${game.piles}]`);
        //     //     const count = prompt(`(AI) - Choose Count\nGame piles : [${game.piles}]`);
        //     //     pileHand = parseInt(pile);
        //     //     countHand = parseInt(count);
        //     //     // make move
        //     //     if (available([pile, count], available_actions)) {
        //     //         // make move
        //     //         game.move(pileHand, countHand);
        //     //         alert(`AI chose to take ${countHand} from ${pileHand}.\nNew game piles : [${game.piles}]`);
        //     //         break
        //     //     } else {
        //     //         console.log("Invalid move try again");
        //     //     }

        //     // }



        //         // const game = new Nim();
            
        //     // (async()=>{
        //     //     console.log("Start : ", game.piles);
        //     //     for (let i = 0; i < 5; i++) {
        //     //         const element = i;
        //     //         const go = await ai_play();
        //     //         console.log(go);
        //     //     }
        //     //     console.log("End", game.piles);
        //     // })();

// ----------------------------------------------------------------------------------------------------------------





        // // const play = async (human_player = null) => {
        //     const randomPlayer = () => {
        //         return Math.floor(Math.random() * 2);
        //     };

        //     if (human_player === null) {
        //         human_player = randomPlayer();
        //     }

        // //     const game = new Nim();

        // //     while (true) {

        // //         consle.log("piles:");
        // //         for (let i = 0; i < game.piles.length; i++) {
        // //             const pile = game.piles[i];
        // //             console.log(`pile ${i}: ${pile}`);
        // //         }
        // //         const available_actions = game.available_actions(game.piles);
                
        //         const available = (action, available_actions) => {
        //             let answer = false;
        //             for (let each_action of available_actions) {
        //                 const valid_action = each_action.toString() === action.toString();
        //                 if (valid_action) answer = true;
        //             }
        //             return answer;
        //         };
        //         // Your Turn
        //         if (game.player == human_player) {

        //             console.log("Your Turn");
        //             while (true) {
        //                 const pile = prompt(`(HUMAN) - Choose Pile\nGame piles : [${game.piles}]`);
        //                 const count = prompt(`(HUMAN) - Choose Count\nGame piles : [${game.piles}]`);
        //                 pileHand = parseInt(pile);
        //                 countHand = parseInt(count);

        //                 // make move
        //                 if (available([pile, count], available_actions))
        //                     break
        //                 console.log("Invalid move try again");

        //             }
                    
        //         // AI's Turn
        //         } else {
        //             let ai_choose = await ai_play(game.piles)

        //             alert("AI's Turn")
        //             alert(`AI chose to take ${ai_choose.count} from pile ${ai_choose.pile}.`);
        //             pileHand = ai_choose.pile
        //             countHand = ai_choose.count

        //         }

        //         // make move
        //         game.move(pileHand, countHand);

        //         if (game.winner !== null) {
        //             console.log("GAME OVER");
        //             const winner = game.winner == human_player ? "Human" : "AI";
        //             console.log(`Winner is ${winner}`);
        //             alert(`Winner is ${winner}`);
        //             return;
        //         }
                
        //     }
        // }





{/* <button style="margin: 2px;border-radius: 50%;width: 40px;height: 40px;background: #ff69ff;color: white;border: 5px solid #00ffe9;font-size: 20px;" onclick="play('pile-0-count-1')" id="pile-0-count-1">1</button> */}


// <div id="root" style="
//     background: #673aa6;
//     border: 10px solid #3aa9b742;
//     padding: 19px;
//     border-radius: 41px;
// "><h3>pile : 0</h3><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-0-count-1')" id="pile-0-count-1">1</button><h3>pile : 1</h3><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-1-count-3')" id="pile-1-count-3">3</button><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-1-count-2')" id="pile-1-count-2">2</button><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-1-count-1')" id="pile-1-count-1">1</button><h3>pile : 2</h3><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-5')" id="pile-2-count-5">5</button><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-4')" id="pile-2-count-4">4</button><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-3')" id="pile-2-count-3">3</button><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-2')" id="pile-2-count-2">2</button><button style="margin: 2px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-1')" id="pile-2-count-1">1</button><h3>pile : 3</h3><button style="margin: 2px; border-radius: 50%; width: 50px; height: 50px; background: red; color: white; border: 5px solid rgb(0, 188, 212); font-size: 32px; padding: 0px;" onclick="play('pile-3-count-7')" id="pile-3-count-7" disabled="">7</button><button style="margin: 2px; border-radius: 50%; width: 50px; height: 50px; background: red; color: white; border: 5px solid rgb(0, 188, 212); font-size: 32px; padding: 0px;" onclick="play('pile-3-count-6')" id="pile-3-count-6" disabled="">6</button><button style="margin: 2px; border-radius: 50%; width: 50px; height: 50px; background: red; color: white; border: 5px solid rgb(0, 188, 212); font-size: 32px; padding: 0px;" onclick="play('pile-3-count-5')" id="pile-3-count-5" disabled="">5</button><button style="margin: 2px; border-radius: 50%; width: 50px; height: 50px; background: red; color: white; border: 5px solid rgb(0, 188, 212); font-size: 32px; padding: 0px;" onclick="play('pile-3-count-4')" id="pile-3-count-4" disabled="">4</button><button style="margin: 2px; border-radius: 50%; width: 50px; height: 50px; background: red; color: white; border: 5px solid rgb(0, 188, 212); font-size: 32px; padding: 0px;" onclick="play('pile-3-count-3')" id="pile-3-count-3" disabled="">3</button><button style="margin: 2px; border-radius: 50%; width: 50px; height: 50px; background: red; color: white; border: 5px solid rgb(0, 188, 212); font-size: 32px; padding: 0px;" onclick="play('pile-3-count-2')" id="pile-3-count-2" disabled="">2</button><button style="margin: 2px; border-radius: 50%; width: 50px; height: 50px; background: red; color: white; border: 5px solid rgb(0, 188, 212); font-size: 32px; padding: 0px;" onclick="play('pile-3-count-1')" id="pile-3-count-1" disabled="">1</button></div>





`<div style="display: flex;align - items: center;justify - content: center;"><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-${pile}-count-${count + 1}')" id='pile-${pile}-count-${count + 1}' >${count + 1}</button></div>`







style="border: 10px solid #3aa9b742;border-radius: 20px;padding: 10px;"

{/* <div id="root" style="
    border: 10px solid #3aa9b742;
    border-radius: 20px;
    padding: 10px;
"><br><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-0-count-1')" id="pile-0-count-1">1</button><br><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-1-count-3')" id="pile-1-count-3">3</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-1-count-2')" id="pile-1-count-2">2</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-1-count-1')" id="pile-1-count-1">1</button><br><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-5')" id="pile-2-count-5">5</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-4')" id="pile-2-count-4">4</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-3')" id="pile-2-count-3">3</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-2')" id="pile-2-count-2">2</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-2-count-1')" id="pile-2-count-1">1</button><br><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-3-count-7')" id="pile-3-count-7">7</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-3-count-6')" id="pile-3-count-6">6</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-3-count-5')" id="pile-3-count-5">5</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-3-count-4')" id="pile-3-count-4">4</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-3-count-3')" id="pile-3-count-3">3</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-3-count-2')" id="pile-3-count-2">2</button><button style="margin: 5px;border-radius: 50%;width: 50px;height: 50px;background: #ffc107;color: #03a9f4;border: 5px solid #00bcd4;font-size: 32px;padding: 0px;" onclick="play('pile-3-count-1')" id="pile-3-count-1">1</button></div> */}





