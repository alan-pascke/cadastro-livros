export default class Register{
    #id: any;
    #title: string;
    #autor: string;
    #categories: string

    constructor (title : string, autor: string, categories: string, id = null){
        this.#id = id
        this.#title = title;
        this.#autor = autor;
        this.#categories = categories
    }

    get id(){
        return this.#id
    }

    get title(){
        return this.#title
    }

    get autor(){
        return this.#autor
    }

    get categories(){
        return this.#categories
    }
    
}