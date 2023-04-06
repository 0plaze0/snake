export default class Board{
    constructor(boardElem){
        this.boardElem=boardElem;
    }
    get BoardHeight(){
        return this.height;
    }
    get BoardWidth(){
        return this.width;
    }
    set BoardHeight(value){
        this.height=value;
    }
    set BoardWidth(value){
        this.width=value;
    }
}