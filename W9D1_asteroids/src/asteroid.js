const MovingObject = require("./moving_object");
// const { inherits } = require("./utils");
const Util = require("./utils");

function Asteroid(hash) {
    this.color = MovingObject.call(this, color);
    this.radius = MovingObject.call(this, radius);
    this.pos = hash.pos;
    this.vel = [10,10];
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;