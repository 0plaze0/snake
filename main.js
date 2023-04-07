import Board from "./board.js";

const board = new Board(document.getElementById('board'));
const boxSize = 25;
const rows = 20;
const column = 20;
let context;

//snake
let snakeX = boxSize*5;
let snakeY = boxSize*5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

///food
let foodX;
let foodY;

//gameover
let gameover=false;

window.onload = function(){
    board.BoardHeight = boxSize*rows;
    board.BoardWidth = boxSize*column;
//context doesnot take object it takes elem
    context=board.boardElem.getContext("2d");
    placeFood();
    document.addEventListener("keyup",changeDirection);
    setInterval(update, 1000/10);
}

function update(){
    if(gameover){
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.BoardWidth,board.BoardHeight);
    
    context.fillStyle="red";
    context.fillRect(foodX,foodY,boxSize,boxSize);

    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX,foodY]);
        placeFood();
    }
    for(let i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0]=[snakeX,snakeY]; 
    }

    context.fillStyle="lime";
    snakeX += velocityX*boxSize;
    snakeY += velocityY*boxSize;
    context.fillRect(snakeX,snakeY,boxSize,boxSize);

    for(let i=0; i<snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], boxSize, boxSize);
    }
    //gameover
    if(snakeX < 0 || snakeX == column*boxSize || snakeY < 0 || snakeY == rows*boxSize){
        gameover=true;
        alert("gameover");
    }
    for(let i=0; i < snakeBody.length; i++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameover=true;
            alert("gameover");
        }
    }


}
function changeDirection(event){
    if(event.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }else if(event.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }else if(event.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    } else if(event.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}
function placeFood(){
    foodX = Math.floor(Math.random()*column)*boxSize;
    foodY = Math.floor(Math.random()*rows)*boxSize;
}

