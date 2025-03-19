const choices = ["rock","paper","scissors"];
let playerDisplay = document.getElementById("playerDisplay");
let playerImage = document.getElementById("playerImage");
let computerDisplay = document.getElementById("computerDisplay");
let computerImage = document.getElementById("computerImage");
let resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice)
    let result = "";

    if(playerChoice===computerChoice){
      // playerImage.innerHTML = `${playerChoice==="rock"? <img src="./assets/rock.jpeg"/> 
      //   : computerChoice==="paper"? <img src="./assets/paper.jpeg"/>
      //   : computerChoice==="scissors"? <img src="./assets/scissors.jpeg"/> : "hi"}`
      // computerImage.innerHTML = `${computerChoice==="rock"? <img src="./assets/rock.jpeg"/> 
      //   : computerChoice==="paper"? <img src="./assets/paper.jpeg"/>
      //   : computerChoice==="scissors"? <img src="./assets/scissors.jpeg"/> : "hi"}`
        result = "IT'S A TIE"
    }else{
        switch(playerChoice){
            case "rock":
              // playerImage.innerHTML = `<img src="./assets/rock.jpeg"/>`
              // computerImage.innerHTML = `${computerChoice==="rock"? <img src="./assets/rock.jpeg"/> 
              //                              : computerChoice==="paper"? <img src="./assets/paper.jpeg"/>
              //                              : computerChoice==="scissors"? <img src="./assets/scissors.jpeg"/> : "hi"}`
              result = (playerChoice==="scissors")? "YOU WON" : "YOU LOST"; 
                break;
            case "paper":
              // playerImage.innerHTML = `<img src="./assets/paper.jpeg"/>`
              // computerImage.innerHTML = `${computerChoice==="rock"? <img src="./assets/rock.jpeg"/> 
              //                              : computerChoice==="paper"? <img src="./assets/paper.jpeg"/>
              //                              : computerChoice==="scissors"? <img src="./assets/scissors.jpeg"/> :"hi"}`
              result =   (playerChoice==="rock")? "YOU WON" : "YOU LOST";
                break;
            case "scissors":
              // playerImage.innerHTML = `<img src="./assets/scissors.jpeg"/>`  
              // computerImage.innerHTML = `${computerChoice==="rock"? <img src="./assets/rock.jpeg"/> 
              //                              : computerChoice==="paper"? <img src="./assets/paper.jpeg"/>
              //                              : computerChoice==="scissors"? <img src="./assets/scissors.jpeg"/> : "hi"}`
              result =   (playerChoice==="paper")? "YOU WON" : "YOU LOST";
                break;
        }
    }

    playerDisplay.innerHTML= `PLAYER : ${playerChoice}`;
    computerDisplay.innerHTML= `COMPUTER : ${computerChoice}`;
    resultDisplay.innerHTML= result;

}

// document.getElementById("rock-btn").addEventListener("mouseover", function(e){
//   document.getElementById("rock-btn").innerHTML = `<img src="./assets/rock-hovered.jpeg"/>`
// })