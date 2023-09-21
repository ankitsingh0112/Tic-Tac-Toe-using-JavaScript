console.log("Welcome to the Tic-Tac-Toe game...");

let audioTurn = new Audio("turn.mp3");
let audioWinner = new Audio("winner.mp3");
let audioDraw = new Audio("draw.mp3")
let p1 = prompt("Enter the name of Player - 01 : ");
let p2 = prompt("Enter the name of Player - 02 : ");
let turn = "X";
let player = p1;
document.querySelector('.ingame-msg').innerText = " Turn for " + player;
let gameover = false;
let cnt = 0;

const changeTurn = () => {
    return turn == "X" ? "O" : "X"
}

const changePalyer = () => {
    return player == p1 ? p2 : p1;
}

function winner(name) {
    audioWinner.play();
    document.querySelector('.ingame-msg').innerText = name + " has WON!!!!!";
    gameover = true;
}

const checkWin = () => {
    let innertxt = document.getElementsByClassName("inner-text");
    // b0 = b1 = b2
    if ((innertxt[0].innerText === innertxt[1].innerText) && (innertxt[1].innerText === innertxt[2].innerText) && (innertxt[0].innerText != '') && (innertxt[1].innerText != '') && (innertxt[2].innerText != '')) {
        if (innertxt[0].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }
    // b0 = b3 = b6
    else if ((innertxt[0].innerText === innertxt[3].innerText) && (innertxt[3].innerText === innertxt[6].innerText) && (innertxt[0].innerText != '') && (innertxt[3].innerText != '') && (innertxt[6].innerText != '')) {
        if (innertxt[0].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }
    // b3 = b4 = b5
    else if ((innertxt[3].innerText === innertxt[4].innerText) && (innertxt[4].innerText === innertxt[5].innerText) && (innertxt[3].innerText != '') && (innertxt[4].innerText != '') && (innertxt[5].innerText != '')) {
        if (innertxt[3].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }
    // b1 = b4 = b7
    else if ((innertxt[1].innerText === innertxt[4].innerText) && (innertxt[4].innerText === innertxt[7].innerText) && (innertxt[1].innerText != '') && (innertxt[4].innerText != '') && (innertxt[7].innerText != '')) {
        if (innertxt[1].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }
    // b6 = b7 = b8
    else if ((innertxt[6].innerText === innertxt[7].innerText) && (innertxt[7].innerText === innertxt[8].innerText) && (innertxt[6].innerText != '') && (innertxt[7].innerText != '') && (innertxt[8].innerText != '')) {
        if (innertxt[6].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }
    // b2 = b5 = b8
    else if ((innertxt[2].innerText === innertxt[5].innerText) && (innertxt[5].innerText === innertxt[8].innerText) && (innertxt[2].innerText != '') && (innertxt[5].innerText != '') && (innertxt[8].innerText != '')) {
        if (innertxt[2].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }
    // b0 = b4 = b8
    else if ((innertxt[0].innerText === innertxt[4].innerText) && (innertxt[4].innerText === innertxt[8].innerText) && (innertxt[0].innerText != '') && (innertxt[4].innerText != '') && (innertxt[8].innerText != '')) {
        if (innertxt[0].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }
    // b2 = b4 = b6
    else if ((innertxt[2].innerText === innertxt[4].innerText) && (innertxt[4].innerText === innertxt[6].innerText) && (innertxt[2].innerText != '') && (innertxt[4].innerText != '') && (innertxt[6].innerText != '')) {
        if (innertxt[2].innerText == "X") {
            winner(p1);
        }else {
            winner(p2);
        }
    }

    // draw condition
    else if (!gameover && cnt >= 9) {
        audioDraw.play();
        document.querySelector('.ingame-msg').innerText = "DRAW!!!!";
        gameover = true;
    }
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let innertxt = element.querySelector('.inner-text');
    element.addEventListener('click', () => {
        cnt++;
        if (innertxt.innerText === '') {
            innertxt.innerText = turn;
            turn = changeTurn();
            player = changePalyer()
            checkWin();
            if (!gameover) {
                audioTurn.play();
                document.querySelector('.ingame-msg').innerText = " Turn for " + player;
            }
        }
    })
});