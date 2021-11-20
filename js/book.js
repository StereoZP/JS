function Book(){
    this.athor="Vasya";
    this.nameOfBook="Utopia";
    this.year="2021";
}
let eBook=new function(){
    athor=Book.athor
    nameOfBook=Book.nameOfBook
    year=Book.year
    this.format="fantasy"
    this.namber="048234"
}
console.log(eBook.athor)