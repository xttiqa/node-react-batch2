// NOMOR 1
console.log("\n")
console.log("NOMOR 1.")
let hitungLuasLingkaran = (r) => {return 3.14 * r * r};
let hitungKelilingLingkaran = (r) => {return 2 * 3.14 * r};

console.log(hitungLuasLingkaran(2))
console.log(hitungKelilingLingkaran(2))

// NOMOR 2
console.log("\n")
console.log("NOMOR 2.")
let introduce = (nama, umur, jeniskelamin, pekerjaan) => {
    if (jeniskelamin == "Laki-Laki"){
        return `Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
    } else if (jeniskelamin == "Perempuan"){
        return `Bu ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
    }
}

const perkenalanJohn = introduce("John", "30", "Laki-Laki", 'Penulis')
console.log(perkenalanJohn)
const perkenalanSarah = introduce("Sarah", "28", "Perempuan", 'Guru')
console.log(perkenalanSarah)

// NOMOR 3
console.log("\n")
console.log("NOMOR 3.")
const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName: () => console.log(`${firstName} ${lastName}`)
});
console.log(newFunction("John", "Doe").firstName)     
console.log(newFunction("Richard", "Roe").lastName)  
newFunction("William", "Imoh").fullName()      

// NOMOR 4
console.log("\n")
console.log("NOMOR 4.")
let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
let {name: phoneName, brand: phoneBrand, year: year} = phone
let {colors: [colorBronze, colorWhite, colorBlack]} = phone
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

// NOMOR 5
console.log("\n")
console.log("NOMOR 5.")
let warna = ["biru", "merah", "kuning" , "hijau"]
let dataBukuTambahan = {
  penulis: "john doe ",
  tahunTerbit: 2020 
}
let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// let [biru, merah, kuning, hijau] = warna
// let {penulis:penulis, tahunTerbit:tahun} = dataBukuTambahan
// let {nama:nama, jumlahHalaman:jmlhHalaman, warnaSampul: [warnaHitam]} = buku
buku = {...buku, warna:[...buku.warnaSampul, ...warna], ...dataBukuTambahan}
console.log(buku)

// NOMOR 6
console.log("\n")
console.log("NOMOR 6.")
function addProducts(a, b){
    a.products = [...a.products, ...b]
    return a
}

let samsung = { 
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ]
}

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

samsung = addProducts(samsung, newProducts)
console.log(samsung)


// NOMOR 7
console.log("\n")
console.log("NOMOR 7.")
const convertToObject = (nama, domisili, umur) => ({ nama, domisili, umur });

let data = ["Bondra", "Medan", 25];
const [nama, domisili, umur] = data;
console.log(convertToObject(nama, domisili, umur));

// NOMOR 8
console.log("\n")
console.log("NOMOR 8.")
const graduate = (...studentsGroups) => {
  const allStudents = studentsGroups.flat(); 
  return allStudents.reduce((acc, { name, class: kelas }) => {
    if (!acc[kelas]) acc[kelas] = [];
    acc[kelas].push(name);
    return acc;
  }, {});
};

const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
];

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" }
];

console.log(graduate(data1));

console.log(graduate(data2));