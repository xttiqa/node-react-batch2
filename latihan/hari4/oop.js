class Car {
    constructor(brand, factory){
        this.brand = brand
        this.factory = factory
        this.sound = "vroom! vroom!"
    }

    present(){
        return "I have a " + this.brand
    }
}

var innovam = new Car("Innovam", "Toyotwo")
console.log(innovam.present())
console.log(innovam)