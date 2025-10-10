// NOMOR 1
console.log("NOMOR 1.")
var buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: "tidak", harga: 9000},
    {nama: "Jeruk", warna: "Orange", adaBijinya: "ada", harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "ada", harga: 10000},
    {nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: 5000}
]
for(var a = 0; a < buah.length; a++){
    if(buah[a].adaBijinya == "tidak"){
        console.log(buah[a])
    }
}

// NOMOR 2
console.log("\n")
console.log("NOMOR 2.")
function tambahDataFilm(nama,durasi,genre,tahun){
    let filmBaru = {
        nama : nama,
        durasi : durasi,
        genre : genre,
        tahun : tahun
    }
    dataFilm.push(filmBaru)
}

var dataFilm = []
tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

// NOMOR 3
console.log("\n")
console.log("NOMOR 3.")
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
var peopleFilter = people.filter(
    function(x){
        if(x.age >= 29){
            return x.gender == "male";
        }
    }
)
console.log(peopleFilter)

// NOMOR 4
console.log("\n")
console.log("NOMOR 4.")
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
function rataUmur(people){
    var jumlah = 0
    for(var a = 0; a < people.length; a++){
        jumlah += people[a].age
    }
    console.log("Rata-rata usia : " + (jumlah/people.length))
}
rataUmur(people)

// NOMOR 5
console.log("\n")
console.log("NOMOR 5.")
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
function urutkanUmur(x){
   for (let index = 0; index < people.length; index++) {
        people.sort((a,b) => a.age - b.age)
        console.log(`${index+1}. ${people[index].name}`)
    }
} 
urutkanUmur(people)

// NOMOR 6
console.log("\n")
console.log("NOMOR 6.")