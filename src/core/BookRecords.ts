export default class BookRecords{
    #id: string;
    #title: string;
    #autor: string;
    #categories: string;

    constructor(
        id: string = '',
        title: string,
        autor: string,
        categories: string,

        ){
        this.#id = id;
        this.#title = title;
        this.#autor = autor;
        this.#categories = categories;
    };

    static empty(){
        return new BookRecords('','','','')
    }

    get id() : string {
        return this.#id
    }

    get title() : string {
        return this.#title
    }
    
    get autor() : string {
        return this.#autor
    }
    
    get categories() : string {
        return this.#categories
    }

    
    

    
    
}