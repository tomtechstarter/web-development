const data = 
{
    books: [
        {
            title: "Das Parfum",
            author: "Patrick Süskind",
            year: 1985,
            genres: ["Roman", "Historischer Roman", "Thriller"]
        },
        {
            title: "Der kleine Prinz",
            author: "Antoine de Saint-Exupéry",
            year: 1943,
            genres: ["Kinderbuch", "Philosophisches Märchen"]
        },
        {
            title: "Harry Potter und der Stein der Weisen",
            author: "J.K. Rowling",
            year: 1997,
            genres: ["Fantasy", "Jugendliteratur"]
        }
    ]
};


// Alle Autoren
console.log("Alle Autoren:");
data.books.forEach((book) => {
    console.log(book.author);
});


// Jeweils das erste aufgelistete Genre
console.log("\nJeweils erstes Genre:");
data.books.forEach((book) => {
    console.log(book.genres[0]);
})


// Alle Genres von "Das Parfum"
console.log("\nAlle Genres von \"Das Parfum\":");
data.books.forEach((book) => {
    if(book.title == "Das Parfum"){
        console.log(book.genres);
    }
})
/*  
    Erklärung: Wir testen für jedes Buch, ob der Titel "Das Parfum" ist
    und printen nur dann die genres.
  ^ Noch schöner ginge dies mit der "find" Funktion von Arrays. Bei Interesse: Googlen! 
*/


// Alle Buchtitel, die mit "D" anfangen
console.log("\nAlle Buchtitel, die mit \"D\" anfangen:");
data.books.forEach((book) => {
    if(book.title[0] == "D"){
        console.log(book.title);
    }
})
/*  
    Erklärung: Wir testen für jedes Buch, ob an erster Stelle im Titel (book.title[0])
    ein "D" steht und printen nur dann den Titel 
*/