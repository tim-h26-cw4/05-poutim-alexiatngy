import Poutine from './Poutine.js'; 
import Icons from "./utils/Icons.js";

export default class Chef{
    constructor(element){ 
        this.element = element;
        this.menu = [];
        this.container = document.querySelector('.chef__order');
        this.init();
       
    }

    init(){
        Icons.load();
        const poutines = document.querySelectorAll('.poutine');
        for (let i = 0; i < poutines.length; i++) {
            const poutine = poutines[i];
            const instance = new Poutine(poutine);
            this.menu.push(instance);
            console.log(this.menu);
        }
    }
}

