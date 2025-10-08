// NOMOR 1.
// LOOPING PERTAMA
console.log("NOMOR 1.")
var angka = 2
while(angka <= 20){
    console.log(angka + "- I love coding")
    angka = angka+2
}
console.log("\n")
// LOOPING KEDUA
var angka2 = 20
while(angka2 >= 2){
    console.log(angka2 + "- I will become a MERN Stack developer")
    angka2 = angka2-2
}

// NOMOR 2
console.log("\n")
console.log("NOMOR 2.")
for (var a = 1; a <= 20; a++){
    if (a % 2 == 0){
        console.log(a + "- Angka Genap")
    } else if (a % 2 == 1){
        console.log(a + "- Angka Ganjil")
    }
}

// NOMOR 3
console.log("\n")
console.log("NOMOR 3.")
for (var b = 1; b <= 20; b++){
    if (b % 2 == 1 && b % 3 != 0){
        console.log(b + "- Santai")
    } else if (b % 2 == 0 && b % 3 != 0){
        console.log(b + "- Berkualitas")
    } else if (b % 2 == 1 && b % 3 == 0){
        console.log(b + "- I Love Coding")
    } else if ( b % 2 == 0 && b % 3 == 0){
        console.log(b + "- ToT")
    }
}

// NOMOR 4
console.log("\n")
console.log("NOMOR 4.")
var hasil = "";
for(var a = 0; a < 7; a++){
    for(var b = 0; b <= a; b++){
        hasil += "#"
    }
    hasil += "\n"
}
console.log(hasil)

// NOMOR 5
console.log("\n")
console.log("NOMOR 5.")
var sentence = "Fullstack Developer"
var c = 0;
while(c < sentence.length){
    console.log(sentence[c])
    c++
}