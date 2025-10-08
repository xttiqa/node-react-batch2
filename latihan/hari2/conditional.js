console.log("CONDISIONAL IF \n")

// BERNILAI TRUE
// if (true){
//     console.log("Eksekusi hasil true")
// }

// BERNILAI FALSE
// if (false){
//     console.log("Eksekusi hasil false")
// }

// DENGAN MENGGUNAKAN VARIABEL DAN NILAINYA
// var mood = "happy"
// if (mood == "happy"){
//     console.log("Hari ini aku senang!")
// } else if (mood == "sedih"){
//     console.log("Hari ini aku sedih!")
// } else {
//     console.log("Aku biasa saja")
// }

// NESTED IF
var minimarketStatus = "open"
var telur = "soldout"
var buah = "ready"
if (minimarketStatus == "open"){
    console.log("saya akan membeli telur dan buah")
    if (telur == "soldout" && buah == "soldout"){
    console.log("belanjaan saya tidak lengkap")
    } else if (telur == "soldout"){
    console.log("telur habis")
    } else if (buah == "soldout"){
    console.log("buah habis")
    } else {
    console.log("belanjaan saya sudah lengkap")
}
} else {
    console.log("miniarket tutup, saya pulang aja")
}

// SWITCH CASE
var buttonPushed = 3;
switch(buttonPushed){
    case 1 : {
        console.log("Matikan TV!");
        break;
    }
    case 2 : {
        console.log("Turunkan volume TV!");
        break;
    }
    case 3 : {
        console.log("Tingkatkan volume TV!");
        break;
    }
    case 4 : {
        console.log("Matikan suara TV!");
        break;
    }
    default : {
        console.log("Not happen!");
        break;
    }
}

// SWITCH CASE
var buttonPushed = "merah";
switch(buttonPushed){
    case "merah" : {
        console.log("red");
        break;
    }
    case "biru" : {
        console.log("blue");
        break;
    }
    case "ungu" : {
        console.log("purple");
        break;
    }
    case "kuning" : {
        console.log("yellow");
        break;
    }
    default : {
        console.log("warna belum tersedia");
        break;
    }
}

console.log("")

// TANPA TERNARY OPERATOR
// var umur = 17
// if(umur >= 17){
//     console.log("Boleh buat KTP")
// } else {
//     console.log("tidak bisa buat KTP")
// }

// TERNARY OPERATOR
var cekKTP = umur >= 17 ? "Boleh buat KTP" : "tidak bisa buat KTP"
console.log(cekKTP)

