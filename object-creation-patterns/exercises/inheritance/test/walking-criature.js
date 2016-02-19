var assert = require("assert");

var WalkingCriature = require("../src/walking-criature");
var LivingCriature = require("../src/living-criature");
var Walker = require("../src/walker");

describe("WalkingCriature", function () {

    it("must be a function", function () {

        assert(typeof WalkingCriature === "function");
    });

    it("must construct objects with prototypes: WalkingCriature.prototype", function () {

        var legs = 2;

        var wc = new WalkingCriature(5, legs);

        var actual   = Object.getPrototypeOf(wc);

        var expected = WalkingCriature.prototype;

        assert(actual === expected);
    });

    it("must construct inherit from: LivingCriature", function () {

        var legs = 2;

        var wc = new WalkingCriature(5,legs);

        var actual   = wc instanceof LivingCriature;
        var expected = true;

        assert(actual === expected);
    });

    it("must construct inherit from: Walker", function () {

        var legs = 2;

        var wc = new WalkingCriature(5,legs);

        var actual   = wc instanceof Walker;
        var expected = true;

        assert(actual === expected);
    });

    describe("prototype", function () {

        describe(".walk()", function () {

            it("must increment throw an error if it has died", function () {

                var legs = 2;

                var wc = new WalkingCriature(0, legs);

                assert.throws(function () {

                    wc.walk();
                });
            });

            it("must increment the amount of steps by 1 if it has not died", function () {

                var initialOxygen = 2;
                var legs = 2;

                var wc = new WalkingCriature(initialOxygen, legs);

                wc.walk();

                var actual   = wc.getSteps();
                var expected = 1;

                assert(actual === expected);
            });

            it("must decrement the decrement the amount of oxygen by 1 if it has not died", function () {

                var initialOxygen = 2;
                var legs = 2;

                var wc = new WalkingCriature(initialOxygen, legs);

                wc.walk();

                var actual   = wc.getRemainingOxygen();
                var expected = initialOxygen - 1;

                assert(actual === expected);
            });
        });
    });
});