var angka = [2, 5, 1, 3, 4]

// console.log(angka)
// console.log(angka[0])
// console.log(angka[2])
// console.log(angka.length)

// PUSH
console.log("PUSH")
angka.push(19)
console.log(angka)

// POP
console.log("")
console.log("POP")
angka.pop()
console.log(angka)

// UNSHIFT
console.log("")
console.log("UNSHIFT")
angka.unshift(11)
console.log(angka)

// SHIFT
console.log("")
console.log("SHIFT")
angka.shift()
console.log(angka)

// JOIN
console.log("")
console.log("JOIN")
console.log(angka.join("-"))

// SPLIT
console.log("")
console.log("SPLIT")
var hewan = "Ayam Ikan Buaya Ular"
var arrHewan = hewan.split(" ")
console.log(arrHewan)

// SORT
console.log("")
console.log("SORT")
console.log(arrHewan.sort())

// SLICE
console.log("")
console.log("SLICE")
console.log(arrHewan.slice(0, 2))

// SPLICE
console.log("")
console.log("SPLICE")
arrHewan.splice(2,0, "Laba-Laba", "Cicak")
console.log(arrHewan)

// LOOPING FOR ARRAY
console.log("")
console.log("LOOPING FOR ARRAY")
var arr = ["Jeruk", "Mangga", "Apel"]
for(var i = 0; i < arr.length; i++){
    console.log("Buah ke-" + (i+1) + " : " + arr[i])
}

// LOOPING WHILE ARRAY
console.log("")
console.log("LOOPING WHILE ARRAY")
var names = ["Adi", "Budi", "Didi"]
var j = 0;
while(j < names.length){
    console.log("Buah ke-" + (j+1) + " : " + arr[j])
    j++
}