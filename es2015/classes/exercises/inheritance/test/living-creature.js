import assert from "assert";

import LivingCreature from "../src/living-creature";

describe("LivingCreature", () => {

    it("must be a function", () => {

        assert(typeof LivingCreature === "function");
    });

    it("must throw an error if invoked directly without new", () => {

        assert.throws(() => {

            const initialOxygen = 0;

            const lc = LivingCreature(initialOxygen);
        });
    });

    it("must construct objects with prototypes: LivingCreature.prototype", () => {

        const initialOxygen = 0;

        const lc = new LivingCreature(initialOxygen);

        const actual   = Object.getPrototypeOf(lc);
        const expected = LivingCreature.prototype;

        assert(actual === expected);
    });

    it("must not throw any error if the oxygen provided is 0", () => {

        assert.doesNotThrow(() => {

            const initialOxygen = 0;

            const lc = new LivingCreature(initialOxygen);
        });
    });

    it("must not throw any error if the oxygen provided is greater than 0", () => {

        assert.doesNotThrow(() => {

            const initialOxygen = Number.MAX_VALUE;

            const lc = new LivingCreature(initialOxygen);
        });
    });

    it("must throw an error if the oxygen provided is not a number", () => {

        assert.throws(() => {

            const initialOxygen = undefined;

            const lc = new LivingCreature(initialOxygen);
        });
    });

    it("must throw an error if the oxygen provided is less than zero", () => {

        assert.throws(() => {

            const initialOxygen = -1;

            const lc = new LivingCreature(initialOxygen);
        });
    });

    describe("prototype", () => {

        describe(".getRemainingOxygen(): number", () => {

            it("must return the initial amount of oxygen if no other method has been called", () => {

                const initialOxygen = 10;

                const lc = new LivingCreature(initialOxygen);

                const actual   = lc.getRemainingOxygen();
                const expected = initialOxygen;

                assert(actual === expected);
            });
        });

        describe(".breath()", () => {

            it("must throw an error if it has died", () => {

                const initialOxygen = 0;

                const lc = new LivingCreature(initialOxygen);

                assert.throws(() => {

                    lc.breath();
                });
            });

            it("must increment the amount of oxygen by 1 if it has not died", () => {

                const initialOxygen = 10;

                const lc = new LivingCreature(initialOxygen);

                lc.breath();

                const actual   = lc.getRemainingOxygen();
                const expected = initialOxygen + 1;

                assert(actual === expected);
            });
        });

        describe(".consumeOxygen()", () => {

            it("must throw an error if it has died", () => {

                const initialOxygen = 0;

                const lc = new LivingCreature(initialOxygen);

                assert.throws(() => {

                    lc.consumeOxygen();
                });
            });

            it("must decrement the amount of oxygen by 1 if it has not died", () => {

                const initialOxygen = 10;

                const lc = new LivingCreature(initialOxygen);

                lc.consumeOxygen();

                const actual   = lc.getRemainingOxygen();
                const expected = initialOxygen -1;

                assert(actual === expected);
            });
        });

        describe(".hasDied(): boolean", () => {

            it("must return true if has been initialized with no oxygen (0)", () => {

                const initialOxygen = 0;

                const lc = new LivingCreature(initialOxygen);

                const actual   = lc.hasDied();
                const expected = true;

                assert(actual === expected);
            });

            it("must return false if has been initialized with oxygen (> 0)", () => {

                const initialOxygen = 10;

                const lc = new LivingCreature(initialOxygen);

                const actual   = lc.hasDied();
                const expected = false;

                assert(actual === expected);
            });

            it("must return true if all the oxygen was consumed", () => {

                const initialOxygen = 1;

                const lc = new LivingCreature(initialOxygen);

                lc.consumeOxygen();

                const actual   = lc.hasDied();
                const expected = true;

                assert(actual === expected);
            });

            it("must return false if not all the oxygen was consumed", () => {

                const initialOxygen = 2;

                const lc = new LivingCreature(initialOxygen);

                lc.consumeOxygen();

                const actual   = lc.hasDied();
                const expected = false;

                assert(actual === expected);
            });
        });
    });
});