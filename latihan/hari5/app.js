const express = require('express')
const app = express()
const port = 3000

// ROOT
app.get('/', (req, res) => {
  res.send('Ohayou! Konichiwa! Oyasumi!')
})

// ROUTE
app.get('/home', (req, res) => {
  res.send('This is home!')
})

// ROUTE
app.get('/peserta', (req, res) => {
  res.send('This is peserta page!')
})

// ROUTE
app.get('/peserta/tika', (req, res) => {
  res.send('This is my page!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
