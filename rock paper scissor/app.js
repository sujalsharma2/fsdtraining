let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () =>
    {
        const options = ["rock","paper","scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options [randIdx];
    };

    const drawGame = ()=>
        {
            msg.innerText =" Match Was draw. Play Again!";
            msg.style.backgroundColor="#698474";
        } ;


        const showWinner = (userWin , userChoice,computerChoice)=>
            {
                if(userWin)
                    {
                        userScore++;
                        userScorePara.innerText=userScore;
                        msg.innerText =` you win!your ${userChoice} beats ${computerChoice}`;
                        msg.style.backgroundColor="green";
                    }
                    else
                    {
                        computerScore++;
                        computerScorePara.innerText=computerScore;
                        msg.innerText =` you loose! ${computerChoice} beats your ${userChoice}`;
                        msg.style.backgroundColor="red";
    
                    }
    
            };
    


const playGame = (userChoice) =>
    {
        // generate computer choice
        const computerChoice = genComputerChoice();
    
        if (userChoice === computerChoice)
            {
                drawGame();
            }
            // draw game condition
            else
            {
                let userWin = true ;
                if (userChoice === "rock")
                    {
                        // scissors , paper
                        userWin = computerChoice === "paper" ? false : true;
    
                    }
                    else if (userChoice === "paper")
                        {
                            // rock , scissors
                            userWin = computerChoice === "scissors" ? false : true;
                        }
                        else
                        {
                            // rock , paper
                            userWin = computerChoice === "rock" ? false : true;
                        }
                        showWinner(userWin ,userChoice,computerChoice);
    
            }
        
    };

    choices.forEach((choice) => 
    {
        console.log(choice)
        choice.addEventListener("click", () =>
            {
                const userChoice = choice.getAttribute("id");
                playGame(userChoice);
            });
    });