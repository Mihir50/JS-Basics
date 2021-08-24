//Book constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;

    this.getSummary = function(){
        return `The book ${this.title} was written by ${this.author} in the year ${this.year}.`;
    }
}
//protoype functions of Book
Book.prototype.age = function(){
    const age = new Date().getFullYear() - this.year;
    return `This book is ${age} years old.`;
}

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}


// const book1 = new Book('Naruto','Mashashi Kishimoto',1998);
// const book2 = new Book('DBZ','Akira Toriyama',1997);

// console.log(book2);
// book2.revise(2000);
// console.log(book2)



//Inheritance
//Magazine constructor which inherits Book constructor
//doesnot inherit prototype functions

function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
}

//for inheriting prototype functions
Magazine.prototype = Object.create(Book.prototype);

//use Magazine constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('Inception','Christopher Nolan',2011,'March');
console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.age());

