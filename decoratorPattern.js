class Book{
    constructor(title, author, price){
        
        this._title = title;
        this._author = author;
        this._price = price

    }
    
    getDetails(){
        return `${this._title} by ${this._price}`;
    }
}


function giftwrapBook(book){
    book.isgiftWrapped = true;
    book.unwrap = function(){
        return `Unwrapped ${book.getDetails()}`
    } 

    return book
}

function hardbindBook(book){
    book.isHardbound = true;
    book._price += 5;
    return book;
}

const newBook = giftwrapBook(new Book('much ado about nothing', 'Adah', 15))
console.log(newBook.isgiftWrapped);
console.log(newBook.unwrap());

const inferno = hardbindBook(new Book('On the other side', 'Peter', 15 ))
console.log(inferno.isHardbound);
console.log(inferno)