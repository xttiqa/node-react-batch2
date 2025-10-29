var readBooksPromise = require('./promise.js');

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
];

let waktu = 10000;

readBooksPromise(waktu, books[0])
.then(sisa => readBooksPromise(sisa, books[1]))
.then(sisa => readBooksPromise(sisa, books[2]))
.catch(sisa => console.log('Waktu habis'));
