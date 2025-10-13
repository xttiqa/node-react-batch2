const express = require('express')
const app = express()
const port = 3000

let movies = [
    {id: 1, title: "Spider-Man", year: 2002},
    {id: 2, title: "John Wick", year: 2014},
    {id: 3, title: "The Avengers", year: 2012},
    {id: 4, title: "Logan", year: 2017},
]

const getMovies = (req, res) => {
    // res.send('Disini akan tampil data movie')
    let result = " "

    movies.forEach((item, index) => {
        result += `<i>${index+1}. ${item.title}</i><br>`
    })

    res.json(movies) // Disarankan pake res.json(movies)
}

// ROOT
app.get('/', (req, res) => {
    res.send('Ohayou! Konichiwa! Oyasumi!')
})

// ROUTE MOVIE
app.get('/movie', getMovies)

// ROUTE
app.get('/peserta', (req, res) => {
  res.send('This is peserta page!')
})

// ROUTE
app.get('/peserta/tika', (req, res) => {
  res.send('This is my page!')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
