class Book {
    constructor(title,author,year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `The book ${this.title} was written by ${this.author} in the year ${this.year}.`;
    }

    getAge(){
        const age = new Date().getFullYear() - this.year;
        return `This book is ${age} years old.`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    //can only run on class not on object
    //used when we want to call method but don't want to create an object
    static topBookStore(){
        return 'ABC';
    }
}


//create object

const book1 = new Book('abc','xyz',1234);
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise(1997);
console.log(book1.getAge());

console.log(Book.topBookStore());



//Inheritance or subclasses

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}

const mag1 = new Magazine('mag one','maggie',2018,'March');
console.log(mag1);
console.log(mag1.getSummary());



