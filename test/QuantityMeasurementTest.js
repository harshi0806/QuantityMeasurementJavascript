const assert = require("chai").assert;
const QuantityMeasurement = require("../main/QuantityMeasurement");
const Unit = require("../main/Unit");
var quantityMeasurement = new QuantityMeasurement();
var unit = new Unit();

describe("Quantity Measurement", () => {
    it("given0FeetAnd0Inch_WhenObjectSame_ShouldReturnTrue"), () => {
        let quantity1 = new QuantityMeasurement(unit.Length.Feet, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 0);
        let result1 = quantity1 instanceof QuantityMeasurement;
        let result2 = quantity2 instanceof QuantityMeasurement;
        assert.equal(result1, result2);
    } 
});