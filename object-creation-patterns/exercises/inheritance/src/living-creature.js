var Walker = require('./walker');

// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise
function LivingCreature(oxygenAmount, legs) {
	if (isNaN(oxygenAmount)) {
		throw new Error('The oxygen provided is not a number');
	}
	if (oxygenAmount < 0) {
		throw new Error('The oxygen provided is less than zero');
	}
	this._oxygen = oxygenAmount;

	if (!legs) {
		return;
	}

	Walker.call(this, legs);
}

LivingCreature.prototype = Object.create(Walker.prototype);
LivingCreature.prototype.constructor = LivingCreature;

LivingCreature.prototype.getRemainingOxygen = function() {
	return this._oxygen;
};

LivingCreature.prototype.breath = function() {
	// if (isNaN(amount)) {
	// 	throw new Error('The oxygen provided is not a number');
	// }
	if (this.hasDied()) {
		throw new Error('It has died');
	} else {
		this._oxygen += 1;
	}
};

LivingCreature.prototype.consumeOxygen = function() {
	if (this.hasDied()) {
		throw new Error('It has died');
	} else {
		this._oxygen -= 1;
	}
};

LivingCreature.prototype.hasDied = function() {
	return (this._oxygen === 0);
};

module.exports = LivingCreature;
