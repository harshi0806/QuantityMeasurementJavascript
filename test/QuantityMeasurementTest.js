const assert = require("chai").assert;
const QuantityMeasurement = require("../main/QuantityMeasurement");
const Unit = require("../main/Unit");
var quantityMeasurement = new QuantityMeasurement();
var unit = new Unit();

describe("Quantity Measurement", () => {
    it("given0FeetAnd0Inch_WhenCheckedForValue_ShouldReturnEqual"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 0);
        let result1 = quantity1 instanceof QuantityMeasurement;
        let result2 = quantity2 instanceof QuantityMeasurement;
        assert.equal(result1, result2);
        callback();
    } 
    it("given0FeetAnd1Feet_WhenCompared_ShouldReturnFalse"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.FEET, 1);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isNotTrue(compareCheck);
        callback();
    }
    it("given0FeetAnd0Feet_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.FEET, 0);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given0FeetAnd0Feet_WhenCheckedForSameReference_ShouldReturnFalse"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 0);
        let referenceCheck = quantity1 === quantity2;
        assert.isNotTrue(referenceCheck);
        callback();
    } 
    it("givenFeet_WhenCheckedForNull_ShouldReturnEqual"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, null);
        let nullCheck = quantity1.checkNullValue();
        assert.equal(nullCheck, "Value is null or undefined");
        callback();
    } 
    it("givenTwoFeet_WhenCheckedForType_ShouldReturnEqual"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.FEET, 0);
        assert.equal(typeof(quantity1), typeof(quantity2));
        callback();
    }
    it("givenTwoInch_WhenCheckedForValue_ShouldReturnEqual"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 0);
        let result1 = quantity1 instanceof QuantityMeasurement;
        let result2 = quantity2 instanceof QuantityMeasurement;
        assert.equal(result1, result2);
        callback();
    }  
    it("given0InchAnd1Inch_WhenCompared_ShouldReturnFalse"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 1);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isNotTrue(compareCheck);
        callback();
    }
    it("given0InchAnd0Inch_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 0);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given0InchAnd0Inch_WhenCheckedForSameReference_ShouldReturnFalse"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 0);
        let referenceCheck = quantity1 === quantity2;
        assert.isNotTrue(referenceCheck);
        callback();
    } 
    it("givenInch_WhenCheckedForNull_ShouldReturnEqual"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, null);
        let nullCheck = quantity1.checkNullValue();
        assert.equal(nullCheck, "Value is null or undefined");
        callback();
    } 
    it("givenTwoInch_WhenCheckedForType_ShouldReturnEqual"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 0);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 0);
        assert.equal(typeof(quantity1), typeof(quantity2));
        callback();
    }
});
