import Board from "./board.js";

const board = new Board(document.getElementById('board'));
const boxSize = 25;
const rows = 20;
const column = 20;
let context;

window.onload = function(){
    board.BoardHeight = boxSize*rows;
    board.BoardWidth = boxSize*column;

    context=board.boardElem.getContext("2d");

    update();
}

function update(){
    context.fillStyle = "black";
    context.fillRect(0, 0, board.BoardWidth,board.BoardHeight);
}

