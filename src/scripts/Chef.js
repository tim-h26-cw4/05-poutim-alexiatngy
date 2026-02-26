import Icons from "./utils/Icons.js";

// La ligne suivante devrait être au TOUT début du init() du Main
export default class Chef{
    constructor(){
        this.init();
    }

    init(){
        Icons.load();
    }
}

