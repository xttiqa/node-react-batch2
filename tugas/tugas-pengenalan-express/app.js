const express = require('express')
const app = express()
const port = 3000

// NOMOR 1
const lingkaranTabung = (req, res) => {
    let {jarijari} = req.query
    let {tinggi} = req.query

    console.log(jarijari)
    let luasLingkaran = 3.14 * jarijari * jarijari
    let kelLingkaran = 3.14 * 2 * jarijari
    let volumeTabung = 3.14 * jarijari * jarijari * tinggi

    res.send(`Jari-Jari : ${jarijari}<br> 
        Tinggi : ${tinggi}<br>
        Volume Tabung : ${volumeTabung}<br>
        Luas Alas Tabung : ${luasLingkaran}<br>
        Keliling Alas Tabung : ${kelLingkaran}`)

}
app.get('/lingkaran-tabung', lingkaranTabung)

// NOMOR 2
let dataOrang =[
{id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
{id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
{id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
{id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
{id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
]

const dataOrangg = (req, res) => {
    let {umur} = req.query
    let {gender} = req.query
    let result = ""
    umur = Number(umur)
    // let newResult = [] 
    // let resut = dataOrang.find((item) => item.jenisKelamin === gender && item.umur >= Number(age))
    // newResult += result
    // res.json(result)

     dataOrang.forEach((a, index) => {
        if(a.umur === umur && a.jenisKelamin.toLowerCase().includes(gender)){
            result += `${index+1}. ${a.name} - Pekerjaan: ${a.pekerjaan} - Umur: ${a.umur}<br>`
        } else if (a.umur >= umur) {
            result += `${a.name} - Umur: ${a.umur}<br>`
        } else if (a.jenisKelamin.toLowerCase().includes(gender)){
            result += `${a.name} - Gender: ${a.jenisKelamin}<br>`
        } else if (!result) {
            console.log(`Maaf, input yang anda masukkan salah`)
        }
    })

    res.send(result)
}
app.get('/data-orang', dataOrangg)

// NOMOR 3
const dataOrangbyID = (req, res) => {
    let {id} = req.params

    let result = dataOrang.find(dataOrang=>dataOrang.id == id)
    
    if (!result){
        res.send(`Maaf, data tidak ditemukan`)
    }

    if(result.jenisKelamin === "L"){
        res.send(`Pak ${result.name} adalah seorang ${result.pekerjaan} yang berusia ${result.umur} tahun`)
    } else if (result.jenisKelamin === "P"){
        res.send(`Bu ${result.name} adalah seorang ${result.pekerjaan} yang berusia ${result.umur} tahun`)
    } else if (!result) {
        
    }
}
app.get('/data-orang/:id', dataOrangbyID)


app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})