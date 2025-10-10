var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

function bacaBuku(waktu, index) {
    if (index < books.length) {
        readBooks(waktu, books[index], function(sisaWaktu) {
            if (sisaWaktu > 0) {
                bacaBuku(sisaWaktu, index + 1)
            } else {
                console.log("Waktu habis sebelum semua buku selesai dibaca.")
            }
        })
    } else {
        console.log("Semua buku sudah selesai dibaca.")
    }
}

// Mulai membaca dari buku pertama (index 0) dengan waktu 10000
bacaBuku(10000, 0)
