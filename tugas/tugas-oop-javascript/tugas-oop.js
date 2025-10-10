// NOMOR 1 A
console.log("NOMOR 1. A")
class Animal {
    constructor(name, legs, cold_blooded){
        this.name = name;
        this.legs = "4";
        this.cold_blooded = false;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)

// NOMOR 1 B
console.log("\n")
console.log("NOMOR 1. B")
class Ape extends Animal {
    constructor(name, legs, cold_blooded){
        super(name, legs, cold_blooded);
    }

    yell(){
        return "Auooo"
    }
}

class Frog extends Animal {
    constructor(name, legs, cold_blooded){
        super(name, legs, cold_blooded);
    }

    jump(){
        return "Hip Hip"
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

// NOMOR 2
console.log("\n")
console.log("NOMOR 2.")
function Clock({ template }) {
  var timer;
  function render() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

var clock = new Clock({template: 'h:m:s'});
clock.start();

class Clock {
    constructor(template){
        
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();

