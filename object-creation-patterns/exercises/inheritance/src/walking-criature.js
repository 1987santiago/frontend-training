var LivingCriature = require('./living-criature');
var Walker = require('./walker');
// * inherits from
// - LivingCriature
// - Walker
// * constructor parameters:
// - the ones required to be passed to their ancestor
// * methods
// - walk
//   - must throw an exception if it has died
//   - must consume oxygen and walk

function WalkingCriature(oxygen, legs) {
	LivingCriature.call(this, oxygen, legs);
}

WalkingCriature.prototype = Object.create(LivingCriature.prototype);
WalkingCriature.prototype.constructor = WalkingCriature;

WalkingCriature.prototype.walk = function() {
	if (LivingCriature.prototype.hasDied.call(this)) {
		throw new Error('It has died');
	}
	try {
		LivingCriature.prototype.consumeOxygen.call(this);
		Walker.prototype.walk.call(this);
	} catch(e) {
		throw new Error('it has died');
	}
};

module.exports = WalkingCriature;