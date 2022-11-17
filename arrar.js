Array.prototype.lowerCase= function(){
    for(let i=0; i<this.length; i++){
        this[i] =this[i].toLowerCase();
    }
}

var vehicle=["CAR", "BIKE", "CYCLE"]
vehicle.lowerCase()
console.log(vehicle);
