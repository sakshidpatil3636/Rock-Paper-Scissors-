let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const UScore=document.querySelector("#user-score")
const CScore=document.querySelector("#comp-score")

const getCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was draw !")
    msg.innerText = "Game was draw ! Play again !";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        console.log("You win !")
        msg.innerText=`You win: Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        UScore.innerText=userScore;
    }
    else{
        console.log("You lose !")
        msg.innerText=`You lose: ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        CScore.innerText=compScore;
    }
}

const playGame= (userChoice)=>{
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = getCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
       drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissors"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userChoice==="scissors"){
            if(compChoice==="rock"){
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});