import Icons from "./utils/Icons.js";

export default class Poutine{
    constructor(){
        this.element = this.element;
        this.types = this.element.querySelectorAll('.button');
        this.selectedType = '';
        this.init();
    }

    init(){
        Icons.load();
    }
}

