// NOMOR 1.
console.log("NOMOR 1.")
function introduce(nama, jeniskelamin, pekerjaan, usia){
    if (jeniskelamin == "laki-laki"){
        return "Pak " + nama + " adalah seorang " + pekerjaan + " yang berusia " + usia + " tahun"
    } else if (jeniskelamin == "perempuan"){
        return "Bu " + nama + " adalah seorang " + pekerjaan + " yang berusia " + usia + " tahun"
    }
}

var john = introduce("John", "laki-laki", "penulis", "30")
console.log(john)
var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah)

// NOMOR 2
console.log("\n")
console.log("NOMOR 2.")


// NOMOR 3
console.log("\n")
console.log("NOMOR 3.")
var angka = [2,3,1,9,12,8,9,7]
function urutanAngka(arrayAngka){
    var terbesar = arrayAngka[0]
    var terkecil = arrayAngka[0]
    
    for(var a = 1; a < arrayAngka.length; a++){
        if(arrayAngka[a] > terbesar){
            terbesar = arrayAngka[a]
        }
        if (arrayAngka[a] < terkecil) {
            terkecil = arrayAngka[a]
        }
    }
    return {terbesar, terkecil}
}
console.log(urutanAngka(angka))

// NOMOR 4
console.log("\n")
console.log("NOMOR 4.")
function arrangeBahasa(kata){
    return(kata.split("").sort().join(""))
}
console.log(arrangeBahasa("bahasa"))
console.log(arrangeBahasa("similikiti"))
console.log(arrangeBahasa("sanbercode"))
console.log(arrangeBahasa(""))

// NOMOR 5
console.log("\n")
console.log("NOMOR 5.")
function palindrome(kata){
    let kataPalindrome = kata.split("").reverse().join("")
    if (kataPalindrome == kata){
        return "true"
    } else if (kataPalindrome != kata){
        return "false"
    }
}
console.log(palindrome('katak')); 
console.log(palindrome('blanket'));
console.log(palindrome('nababan')); 
console.log(palindrome('haji ijah'));
console.log(palindrome('mister')); 

// NOMOR 6
console.log("\n")
console.log("NOMOR 6.")
function palindromeAngka(angka){
    let angkaString = String(angka)
    let angkaPalindrome = angkaString.split("").reverse().join("")
    if (angkaPalindrome === angkaString){
        return angka + 11
    } else if (angkaPalindrome !== angkaString){
        return 
    }
}
console.log(palindromeAngka(11)); 

// NOMOR 7
console.log("\n")
console.log("NOMOR 6.")
