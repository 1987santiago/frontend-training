// * exports
// - default: class
// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise

class LivingCreature {

	constructor (oxygen) {
		if(typeof oxygen !== 'number') {
			throw Error('oxygen must be a number');
		}
		if(oxygen < 0) {
			throw Error('oxygen must be mayor or equal to zero');
		}
		this._oxygen = oxygen;
	}

	getRemainingOxygen() {
		return this._oxygen;
	}

	breath() {
		// if (isNaN(amount)) {
		// 	throw new Error('The oxygen provided is not a number');
		// }
		if (this.hasDied()) {
			throw new Error('It has died');
		} else {
			this._oxygen += 1;
		}
	}

	consumeOxygen() {
		if (this.hasDied()) {
			throw new Error('It has died');
		} else {
			this._oxygen -= 1;
		}
	}

	hasDied() {
		return (this._oxygen === 0);
	}
}

export default LivingCreature;