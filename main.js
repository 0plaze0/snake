import Board from "./board.js";

const board = new Board(document.getElementById('board'));
const boxSize = 25;
const rows = 20;
const column = 20;
let context;

//snake
let snakeX = boxSize*5;
let snakeY = boxSize*5;

///food
let foodX;
let foodY;

window.onload = function(){
    board.BoardHeight = boxSize*rows;
    board.BoardWidth = boxSize*column;
//context doesnot take object it takes elem
    context=board.boardElem.getContext("2d");
    placeFood();
    update();
}

function update(){
    context.fillStyle = "black";
    console.log(board.BoardHeight);
    context.fillRect(0, 0, board.BoardWidth,board.BoardHeight);

    context.fillStyle="lime";
    context.fillRect(snakeX,snakeY,boxSize,boxSize);

    context.fillStyle="red";
    context.fillRect(foodX,foodY,boxSize,boxSize);

}

function placeFood(){
    foodX = Math.floor(Math.random()*column)*boxSize;
    foodY = Math.floor(Math.random()*rows)*boxSize;
}

