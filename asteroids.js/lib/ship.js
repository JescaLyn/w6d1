const Utils = require('./utils');
const MovingObject = require('./moving_object');

function Ship(pos) {
  MovingObject.call(this, {
    pos: pos,
    radius: 10
  });
}

Ship.prototype.relocate = function () {

};

Utils.inherits(Ship, MovingObject);
module.exports = Ship;
