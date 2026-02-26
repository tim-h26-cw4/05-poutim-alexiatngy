import Icons from "./utils/Icons.js";

export default class Poutine{
    constructor(element){
        this.element = element;
        this.types = this.element.querySelectorAll('.button');
        this.selectedType = '';
        this.init();
    }

    init(){
        Icons.load();
        for (let i = 0; i < this.types.length; i++) {
            const btnPoutine = this.types[i];
            btnPoutine.addEventListener('click', this.selectType.bind(this));
        }
    }

    selectType(event){
          for (let i = 0; i < this.types.length; i++) {
            const btnPoutine = this.types[i];
            btnPoutine.classList.remove('is-active');
            event.currentTarget.classList.add('is-active')
            this.selectedType = event.currentTarget.innerText;
            updatePhoto();
        }
    }

    updatePhoto(){
        const photo = this.element.getElementById('img');
        photo.classList.add('is-active');
        photo.src = `assets/images/${this.selectedType}.png`;
    }
}

