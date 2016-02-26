import LivingCreature from "./living-creature";
import Walker from "./walker";

// * exports
// - default: class
// * inherits from
// - LivingCreature
// - Walker
// * constructor parameters:
// - the ones required to be passed to their ancestor
// * methods
// - walk
//   - must throw an exception if it has died
//   - must consume oxygen and walk

class WalkingCreature extends mixins(LivingCreature, Walker) {

	constructor() {
		super();
	}

	walk() {
		if (this.hasDied()) {
			throw new Error('It has died');
		}
		try {
			this.consumeOxygen();
			this.walk();
		} catch(e) {
			throw new Error('it has died');
		}
	}

}

function mixins(class1, class2) {

	function Base () {};

	Object.assign(Base.prototype, class1.prototype, class2.prototype);

	return Base;

}
export default WalkingCreature;
