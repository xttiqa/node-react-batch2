function tampilkan(){
    console.log("P Hallo")
}
tampilkan();

function munculkanAngkaDua(){
    return 2
}

// Muncul :
// var tampung = munculkanAngkaDua();
// console.log(tampung)

// console.log(munculkanAngkaDua())

// Tidak akan muncul :
// munculkanAngkaDua() 

function kalikanDua(angka){
    return angka * 2
}
var tampung2 = kalikanDua(2);
console.log(tampung2)
console.log(kalikanDua(2))

function tampilkanAngka(angka1, angka2=7){
    return angka1 + angka2
}
console.log(tampilkanAngka(1,2))
console.log(tampilkanAngka(4))
