import Poutine from './Poutine.js'; 
import Icons from "./utils/Icons.js";

export default class Chef{
    constructor(element){ 
        this.element = element;
        this.menu = [];
        this.container = this.element.querySelector('.chef__order');
        this.init();
       
    }

    init(){
        Icons.load();
        const poutines = this.element.querySelectorAll('.poutine');
        for (let i = 0; i < poutines.length; i++) {
            const poutine = poutines[i];
            const instance = new Poutine(poutine);
            this.menu.push(instance);
            console.log(this.menu);
        }
        const btnPassezLaCommande = this.element.querySelector('.button-secondary');
        btnPassezLaCommande.addEventListener('click', this.sendOrder.bind(this));
    }

    sendOrder(){
         const nbPoutines = document.createElement("p");
         nbPoutines.innerText = `Nombre total de poutine(s) : ${nbPoutinesTotal}`;
         this.container.appendChild(nbPoutines);
    }
}

