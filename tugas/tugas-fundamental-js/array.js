// NOMOR 1.
console.log("NOMOR 1.")
var dataPeserta = ["john", "laki-laki", "programmer", "30"]
var output = "Halo, nama saya " + dataPeserta [0] + ". saya " + dataPeserta[1] + " berumur " + dataPeserta[3] + " bekerja sebagai seorang " + dataPeserta[2]
console.log(output)

// NOMOR 2
console.log("\n")
console.log("NOMOR 2.")
var sayuran = []
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
console.log(sayuran)

// NOMOR 3
console.log("\n")
console.log("NOMOR 3.")
var sortSayuran = sayuran.sort()
for(var a = 0; a < 7; a++){
    console.log((a+1) + ". " + sortSayuran[a])
}

// NOMOR 4
console.log("\n")
console.log("NOMOR 4.")
var word = "car"
var array = [];
for(var a = 0; a < word.length; a++){
    for(var b = a + 1; b <= word.length; b++){
        array.push(word.slice(a,b))
    }
}
console.log(array)


// NOMOR 5
console.log("\n")
console.log("NOMOR 5.")
var numbers = [4,5,1,4,6,8,9,21]
var jumlah = 0
for (var a = 0; a <= 7; a++){
    jumlah += numbers[a]
}
console.log("Jumlah : " + jumlah)

// NOMOR 6
console.log("\n")
console.log("NOMOR 6.")
var kumpulanAngka = [ [1,3,5,7,8,9], [4,5,6,2,3,1], [6,7,8,1,3,5] ]
var array = []
for (var a = 0; a < kumpulanAngka.length; a++){
    var jumlah2 = 0
    for (var b = 0; b < kumpulanAngka[a].length; b++){
        jumlah2 += kumpulanAngka[a][b]
    }
    array.push(jumlah2)
}
console.log(array)