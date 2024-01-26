const data = {
    "books": [
        {
            "title": "Das Parfum",
            "author": "Patrick Süskind",
            "year": 1985,
            "genres": ["Roman", "Historischer Roman", "Thriller"]
        },
        {
            "title": "Der kleine Prinz",
            "author": "Antoine de Saint-Exupéry",
            "year": 1943,
            "genres": ["Kinderbuch", "Philosophisches Märchen"]
        },
        {
            "title": "Harry Potter und der Stein der Weisen",
            "author": "J.K. Rowling",
            "year": 1997,
            "genres": ["Fantasy", "Jugendliteratur"]
        }
    ]
}

console.log(data.books[0].title);
console.log(data.books[1].author);
console.log(data.books[2].year);
console.log(`${data.books[0].genres}`); //Wenn wir dies in einen String packen, verschwinden die Eckigen Klammern vom Array in der Ausgabe
