function periksaDokter(nomorAntri, callback){
    if(nomorAntri > 5){
        callback(false)
    }else{
        callback(true)
    }
}

periksaDokter(6, function(check){
    if(check){
        console.log("Sebentar lagi giliran saya")
    }else{
        console.log("Saya jalan-jalan dulu")
    }
})

function periksaAntrianDokter(nomorAntri, callback){
    console.log(`sekarang antrian ke-${nomorAntri}`)
    setTimeout(function(){
        if(nomorAntri === 10){
            console.group('Saya masuk ruangan dokter')
            callback(0)
        } else {
            console.log("Saya masih menunggu")
            callback(nomorAntri+1)
        }
    }, 1000)
}

function execute(nomorAntri){
    periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
        if (nomorAntriBaru !== 0){
            execute(nomorAntriBaru)
        }
    })
}

execute(9)

periksaAntrianDokter(5,function(nomorAntriBaru){
    return nomorAntriBaru
});

// CALLBACK HELL
// periksaAntrianDokter(5,function(nomorAntriBaru){
//     periksaAntrianDokter(nomorAntriBaru,function(nomorAntriBaru1){
//         periksaAntrianDokter(nomorAntriBaru1,function(nomorAntriBaru2){
//             periksaAntrianDokter(nomorAntriBaru2,function(nomorAntriBaru3){
//                 periksaAntrianDokter(nomorAntriBaru3,function(nomorAntriBaru4){
//                     periksaAntrianDokter(nomorAntriBaru4,function(nomorAntriBaru5){
//                         return nomorAntriBaru5
//                     });
//                 });
//             });
//         });
//     });
// });

// PROMISE
var isMomHappy = true;

var willGetNewphone = new Promise(
    function (resolve,reject){
        if (isMomHappy){
            var phone = {brand: 'Samsung', color: 'Black'};
            resolve(phone)
        } else {
            var reason = new Error('Mom is Not Happy');
            reject(reason)
        }
    }
)

function askMom(){
    willGetNewphone
    .then(function (fulfilled){
        console.log(fulfilled)
    })
    .catch(function(error) {
        console.log(error.message)
    });
}
askMom()

function periksaDataPasien(nomorIdPasien){
    var dataPasien = [
        {id: 1, nama : "John", jeniskelamin : "Laki-laki"},
        {id: 2, nama : "Michael", jeniskelamin : "Laki-laki"},
        {id: 3, nama : "Sarah", jeniskelamin : "Perempuan"},
        {id: 4, nama : "Frank", jeniskelamin : "Laki-laki"}
    ]
    return new Promise(function(resolve, reject){
        var pasien = dataPasien.find(x=>x.id===nomorIdPasien)
        if (pasien === undefined){
            reject('data pasien tidak ada')
        } else {
            resolve(pasien)
        }
    })
}

periksaDataPasien(5).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})

// ASYNC/AWAIT
function doAsync(){
    return new Promise(function(resolve, reject){
        var check = true
        if (check){
            resolve('berhasil')
        } else {
            reject('gagal')
        }
    })
}

async function hello(){
    var result = await doAsync()
    console.log(result)
}

// ERROR HANDLING
async function hello(){
    try {
        var result = await doAsync()
        console.log(result)
    } catch(err){
        console.log(err)
    }
}
hello()
