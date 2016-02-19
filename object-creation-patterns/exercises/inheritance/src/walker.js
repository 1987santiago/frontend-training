// * constructor parameters
// - legs: the amount of legs the walker has
// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done
function Walker(legs) {
	if (isNaN(legs)) {
		throw new Error('The legs provided is not a number');
	}
	if (legs === 0) {
		throw new Error('The legs provided is less than zero');
	}
	if ((legs % 2) !== 0) {
		throw new Error('The legs provided is an odd number');
	}
	this._legs = legs;
	this._steps = 0;
}

Walker.prototype.getLegs = function() {
	return this._legs;
};

Walker.prototype.getSteps = function() {
	return this._steps;
};

Walker.prototype.walk = function() {
	this._steps += 1;
};

module.exports = Walker;