// NOMOR 1
console.log("NOMOR 1.")
var perkenalan = 'Nama saya adalah';
var nama = "Attiqa";
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "engineer"
console.log(perkenalan + " " + nama + ". " + kata1 + " "  + kata2 + " "  + kata3 + " "  + kata4 + " " + kata5 + " " + kata6 + " " + kata7) 




// NOMOR 2
console.log("\nNOMOR 2")
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3)




// NOMOR 3
console.log("\nNOMOR 3")
var sentence2 = "Wow JavaScript is so cool"

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log('First Word: ' + exampleFirstWord2);
console.log('First Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);




// NOMOR 4
console.log("\nNOMOR 4")
var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length;
var secondWord3Length = secondWord3.length;
var thirdWord3Length = thirdWord3.length;
var fourthWord3Length = fourthWord3.length;
var fifthWord3Length = fifthWord3.length;

console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWord3Length);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWord3Length);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWord3Length);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWord3Length);




// NOMOR 5
console.log("\nNOMOR 5")

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2 : " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")
console.log("kode 3 : " + kode3)




// NOMOR 6
console.log("\nNOMOR 6")
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var kataPertama = pertama.replace("s", "S")
var kataKedua = kedua.replace("g", "G")
var kataKetiga = ketiga.replace("b", "B").replace("r", "R")
var kataKeempat = keempat.toUpperCase()

console.log(kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat)




// NOMOR 7
console.log("\nNOMOR 7")
var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

var intPanjang = parseInt(panjang)
var intLebar = parseInt(lebar)
var intAlas = parseInt(alas)
var intTinggi = parseInt(tinggi)

// Luas Persegi Panjang
var luasPersegiPanjang = intPanjang * intLebar
console.log("Luas Persegi Panjang = " + luasPersegiPanjang)

// Luas Segitiga
var luasSegitiga = (intAlas * intTinggi) / 2
console.log("Luas Segitiga = " + luasSegitiga)




// NOMOR 8
console.log("\nNOMOR 8")
var sisi = " 1 2 ";
var jariJari = "7.5";

var intSisi = Number((sisi.trim()).replace(" ", ""))
var floatjariJari = parseFloat(jariJari)

// Luas Persegi
var luasPersegi = intSisi * intSisi
console.log("Luas Persegi = " + luasPersegi)

// Luas Lingkaran
var luasLingkaran = 3.14 * floatjariJari * floatjariJari
console.log("Luas Lingkaran = " + luasLingkaran)
