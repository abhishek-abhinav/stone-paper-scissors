const start = document.querySelector(".start");
const play = document.querySelector("#play");
const game = document.querySelector(".game");
const user = document.querySelector("#user");
const userScore = document.querySelector("#user-score");
const comp = document.querySelector("#comp");
const compScore = document.querySelector("#comp-score");
const msg = document.querySelector(".msg");
let options = document.querySelectorAll(".opt");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector("#reset");

play.addEventListener("click", () => {
    start.classList.add("hide");
    game.classList.remove("hide");
})

let choices = ['✊🏼', '🫱🏼', '✌🏼']
let updateChoice = () => {
    let i= Math.floor(Math.random()*3);
    let j= Math.floor(Math.random()*3);
    user.innerHTML = choices[i];
    comp.innerHTML = choices[j];
    // console.log(choices[i]);
}

let randChoice= setInterval(updateChoice,100);


let finalChoice =(clsName)=>{
    if (clsName.contains("rock")){
        user.innerHTML=choices[0];
    }
    else if (clsName.contains("paper")){
        user.innerHTML=choices[1];
    }
    else{
        user.innerHTML=choices[2];
    }
    showWinner();
}

let win= false;
let showWinner = ()=>{
    if (user.innerHTML === comp.innerHTML) {
        msg.innerHTML = "Match draw. Try Again!";
        msg.style.backgroundColor="yellow";
    }
    else{
        if (userChoice==="rock"){
            if (comp.innerHTML===choices[2]){
                msg.innerHTML="Yeyye! You Win.";
                msg.style.backgroundColor="green";
                msg.style.color="white";
                win=true;
                updateScore();

            }else{
                win=false;
                msg.innerHTML="Oops! You lose.";
                msg.style.backgroundColor="red";
                msg.style.color="white";
                updateScore();
            }
        }
        else if (userChoice==="paper"){
            if (comp.innerHTML===choices[0]){
                msg.innerHTML="Yeyye! You Win.";
                msg.style.backgroundColor="green";
                msg.style.color="white";
                win=true;
                updateScore();

            }else{
                win=false;
                msg.innerHTML="Oops! You lose.";
                msg.style.backgroundColor="red";
                msg.style.color="white";
                updateScore();
            }
        }
        else{
            if (comp.innerHTML===choices[1]){
                msg.innerHTML="Yeyye! You Win.";
                msg.style.backgroundColor="green";
                msg.style.color="white";
                win=true;
                updateScore();

            }else{
                win=false;
                msg.innerHTML="Oops! You lose.";
                msg.style.backgroundColor="red";
                msg.style.color="white";
                updateScore();
            }
        }
    }
}

//Updating Score
let updateScore = ()=>{
    if (win) {
        userScore.innerHTML= parseInt(userScore.innerHTML) + 1
    }
    else{
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1
    }
}

let userChoice;
options.forEach(option => {
    option.addEventListener("click", () => {
        clearInterval(randChoice);
        rock.disabled=true;
        paper.disabled=true;
        scissors.disabled=true;
        reset.disabled=false;
        userChoice=option.id;
        option.style.backgroundColor= "#00ffe7";
        // option.style.borderRadius= "50%";
        let clsName=option.classList;
        finalChoice(clsName);
    })
    
});

// let disableButtons = ()=>{
//     options.forEach(option => {
//         option.addEventListener("click", () => {
//             option.disabled=true;
//         })
//     })
// }

reset.addEventListener("click",()=>{
    rock.disabled= false;
    paper.disabled= false;
    scissors.disabled= false;
    randChoice= setInterval(updateChoice,100);
    msg.innerHTML="";
    msg.style.color="black";
    msg.style.backgroundColor="unset";
    options.forEach(option=>{
        option.style.backgroundColor="transparent";
    })
})