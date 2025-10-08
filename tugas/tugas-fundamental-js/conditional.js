// NOMOR 1.
console.log("NOMOR 1.")
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";
var lengthSentence = sentence.length;

if (lengthSentence < 10){
    console.log("Pendek");
} else if (lengthSentence >=10 && lengthSentence <=30){
    console.log("Sedang");
} else if (lengthSentence > 30){
    console.log("Panjang");
}

// NOMOR 2.
console.log("\n")
console.log("NOMOR 2.")
var nilai = 72;
if (nilai >= 80){
    console.log("A");
} else if (nilai >= 70 && nilai < 80){
    console.log("B");
} else if (nilai >= 60 && nilai < 70){
    console.log("C");
} else if (nilai >= 50 && nilai < 60){
    console.log("D");
} else if (nilai < 50){
    console.log("E");
}

// NOMOR 3
console.log("\n")
console.log("NOMOR 3.")
var tanggal = 15;
var bulan = 6;
var tahun = 1945;
switch(bulan){
    case 1 : {
        console.log("Januari");
        break;
    }
    case 2 : {
        console.log("Februari");
        break;
    }
    case 3 : {
        console.log("Maret");
        break;
    }
    case 4 : {
        console.log("April");
        break;
    }
    case 5 : {
        console.log("Mei");
        break;
    }
    case 6 : {
        console.log("Juni");
        break;
    }
    case 7 : {
        console.log("Juli");
        break;
    }
    case 8 : {
        console.log("Agustus");
        break;
    }
    case 9 : {
        console.log("September");
        break;
    }
    case 10 : {
        console.log("Oktober");
        break;
    }
    case 11 : {
        console.log("November");
        break;
    }
    case 12 : {
        console.log("Desember");
        break;
    }
    
}