import LivingCreature from "./living-creature";

// * exports
// - default: class
// * constructor parameters
// - legs: the amount of legs the walker has
// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done

class Walker extends LivingCreature {

	constructor(legs) {
		super(0);
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

	getLegs() {
		return this._legs;
	}

	getSteps() {
		return this._steps;
	}

	walk() {
		this._steps += 1;
	}

}

export default Walker;