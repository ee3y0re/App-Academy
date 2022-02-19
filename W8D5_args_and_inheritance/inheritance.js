Function.prototype.inherits = function(parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate(); //child gets functions from parent
    this.prototype.constructor = this; // surrogate gets functions from child??

    // this.prototype = Object.create(parent.prototype);
    // this.prototype.constructor = this;
}

function MovingObject () {

}

MovingObject.prototype.fly = function() {
    console.log("I'm flying!")
}


function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.explode = function() {
    console.log("BOOM!!")
}

let s = new Ship();
let a = new Asteroid();
let m = new MovingObject();