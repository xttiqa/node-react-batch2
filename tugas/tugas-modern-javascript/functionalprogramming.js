// NOMOR 1
console.log("NOMOR 1.")
function hitungPersegi(sisi){
    function luas(s){
        return s * s
    }
    function keliling(s){
        return s * 4
    }
    console.log("Persegi :")
    console.log("Luas Persegi : " + luas(sisi))
    console.log("Keliling Persegi : " + keliling(sisi) + "\n")
}
function hitungPersegiPanjang(panjang, lebar){
    function luas(p, l){
        return p * l
    }
    function keliling(p, l){
        return (2 * p) + (2 * l)
    }
    console.log("Persegi Panjang :")
    console.log("Luas Persegi Panjang : " + luas(panjang, lebar))
    console.log("Keliling Persegi Panjang : " + keliling(panjang, lebar)  + "\n")
}
hitungPersegi(8)
hitungPersegiPanjang(12, 7)



// NOMOR 2
console.log("NOMOR 2.")
function hitungKubus(sisi){
    function luas(s){
        return 6 * s * s
    }
    function volume(s){
        return s ^ 3
    }
    console.log("Kubus :")
    console.log("Luas Kubus : " + luas(sisi))
    console.log("Volume Kubus : " + volume(sisi) + "\n")
}
function hitungBalok(panjang, lebar, tinggi){
    function luas(p, l, t){
        return p * l * t
    }
    function volume(p, l, t){
        return 2 * ((p * l) + (p * t) + (l * t))
    }
    console.log("Balok :")
    console.log("Luas Balok : " + luas(panjang, lebar, tinggi))
    console.log("Volume Balok : " + volume(panjang, lebar, tinggi) + "\n")
}
hitungKubus(8)
hitungBalok(12, 7, 5)

// NOMOR 3
console.log("NOMOR 3.")
let people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
function urutkanUmur(x){
   for (let index = 0; index < people.length; index++) {
        people.sort((a,b) => a.age - b.age)
        console.log(`${people[index].name} ${people[index].age}`)
    }
}
urutkanUmur()

// NOMOR 4
console.log("NOMOR 4.")
var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]
function urutkanHP(x){
   for (let index = 0; index < phones.length; index++) {
        phones.sort((a,b) => a.year - b.year)
        var a = phones[index].colors
        var b = a.join("").indexOf("black")
        if(b !== -1){
            console.log(`${phones[index].name}, colors available : ${phones[index].colors}`)
        }
    }
}   
urutkanHP()