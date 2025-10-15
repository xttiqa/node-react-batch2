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
    let {title} = req.query
    let {id} = req.query
    let result = ""

    if(title === undefined){
      title = ""
    }

    console.log(title)
    console.log(id)

    movies.forEach((item, index) => {
      if(item.title.toLowerCase().includes(title)){
        result += `<i>${index+1}. ${item.title}</i><br>`
      }
    })

    res.send(result) // Disarankan pake res.json(movies)
}

const getMoviesbyID = (req, res) => {
  let {id} = req.params

  console.log(id)

  let result = movies.find(movies=>movies.id == id)
  res.send(`${result.title}`)
}

// ROOT
app.get('/', (req, res) => {
    res.send('Ohayou! Konichiwa! Oyasumi!')
})

// MIDDLEWARE
const logMiddleware = (req, res, next) => {
  console.log("P belum")
  next()
}

const getText = (req, res) => {
  res.status(400).json({'text' : 'Halaman ni udh dilewati middleware'})
}


// MIDDLEWARE TOKEN
const cekToken = (req, res, next) => {
  let {token} = req.query
  
  if(token != 12345){
    res.status(400).json({'text' : 'error wak'})
  } else {
    next()
  }
}

const getStatus = (req, res) => {
  res.status(200).json({'text' : 'Halaman ni udh dilewati middleware'})
}

// ROUTE MOVIE
app.get('/middlewareToken', cekToken, getStatus)
app.get('/middleware', logMiddleware, getText)
app.get('/movie', getMovies)
app.get('/movie/:id', getMoviesbyID)
// app.get('/movie/key?=key', getMoviesbyID)

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
