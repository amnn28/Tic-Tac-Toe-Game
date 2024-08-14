console.log("Tic Tac Toe Game")

let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-button")
let newBtn = document.querySelector("#new-btn")
let btnClick = 0;
let turnO = true;
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 5, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
]
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    btnClick = 0;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "brown";
            turnO = true;
        }
        box.disabled = true;
        btnClick++;
        checkWinner();
    })
})

let winnerAnnouncement = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msgcontainer")

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const checkWinner = () => {
    for(let pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                msgcontainer.classList.remove("hide");
                winnerAnnouncement.innerText = `Winner is ${pos1Val} Congratulations!!`;
                disableBoxes();
            } else if (btnClick === 9) {
                msgcontainer.classList.remove("hide");
                winnerAnnouncement.innerText = `The match is draw between O and X.`;
            }
        }
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);