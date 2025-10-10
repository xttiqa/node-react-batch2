class Car {
    constructor(brand, factory){
        this.brand = brand
        this.factory = factory
        this.sound = "vroom! vroom!"
        this.color = ""
    }

    present(){
        return "I have a " + this.brand
    }
}

var innovam = new Car("Innovam", "Toyotwooogit")
innovam.color = "blue"
console.log(innovam.color)
console.log(innovam.present())
console.log(innovam)



class Orang{
    constructor(nama){
        this.nama = nama;
        this.age = ""
    }

    berjalan(){
        return "TAP TAP TAP"
    }
}

class Guru extends Orang {
    constructor(nama){
        super(nama);
        this.school = ""
    }
}

var guru = new Guru('Abidin')
guru.school = "SD 24"
guru.age = 24
console.log(guru)
console.log(guru.berjalan())