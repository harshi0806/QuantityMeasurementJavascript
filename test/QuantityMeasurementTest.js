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
    it("given3FeetAnd1Yard_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 3);
        let quantity2 = new QuantityMeasurement(unit.Length.YARD, 1);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given1FeetAnd1Yard_WhenCompared_ShouldReturnNotTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 1);
        let quantity2 = new QuantityMeasurement(unit.Length.YARD, 1);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isNotTrue(compareCheck);
        callback();
    }
    it("given1InchAnd1Yard_WhenCompared_ShouldReturnNotTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 1);
        let quantity2 = new QuantityMeasurement(unit.Length.YARD, 1);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isNotTrue(compareCheck);
        callback();
    }
    it("given1YardAnd36Inch_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.YARD, 1);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 36);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given36InchAnd1Yard_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 36);
        let quantity2 = new QuantityMeasurement(unit.Length.YARD, 1);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given1YardAnd3Feet_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.YARD, 1);
        let quantity2 = new QuantityMeasurement(unit.Length.FEET, 3);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given2InchAnd5Centimeter_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 2);
        let quantity2 = new QuantityMeasurement(unit.Length.CENTIMETER, 5);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given2InchAnd2Inch_WhenAdded_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 2);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 2);
        let result = quantityMeasurement.addQuantities(quantity1, quantity2);
        assert.equal(result, 4.0);
        callback();
    }
    it("given1FeetAnd2Inch_WhenAdded_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 1);
        let quantity2 = new QuantityMeasurement(unit.Length.INCH, 2);
        let result = quantityMeasurement.addQuantities(quantity1, quantity2);
        assert.equal(result, 14.0);
        callback();
    }
    it("given1FeetAnd1Feet_WhenAdded_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.FEET, 1);
        let quantity2 = new QuantityMeasurement(unit.Length.FEET, 1);
        let result = quantityMeasurement.addQuantities(quantity1, quantity2);
        assert.equal(result, 24.0);
        callback();
    }
    it("given2InchAnd2Point5Centimeter_WhenAdded_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Length.INCH, 2);
        let quantity2 = new QuantityMeasurement(unit.Length.CENTIMETER, 2.5);
        let result = quantityMeasurement.addQuantities(quantity1, quantity2);
        assert.equal(result, 3.0);
        callback();
    }
    it("given1GallonAnd3Point78Litres_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Volume.GALLON, 1);
        let quantity2 = new QuantityMeasurement(unit.Volume.LITRE, 3.78);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given1LitreAnd1000Millilitre_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Volume.LITRE, 1);
        let quantity2 = new QuantityMeasurement(unit.Volume.MILLILITRE, 1000);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given1GallonAnd3Point78Litres_WhenAdded_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Volume.GALLON, 1);
        let quantity2 = new QuantityMeasurement(unit.Volume.LITRE, 3.78);
        let result = quantityMeasurement.addQuantities(quantity1, quantity2);
        assert.equal(result, 7.57);
        callback();
    }
    it("given1LitreAnd1000Millilitre_WhenAdded_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Volume.LITRE, 1);
        let quantity2 = new QuantityMeasurement(unit.Volume.MILLILITRE, 1000);
        let result = quantityMeasurement.addQuantities(quantity1, quantity2);
        assert.equal(result, 2.0);
        callback();
    }
    it("given1KilogramAnd1000Grams_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Weight.KILOGRAM, 1);
        let quantity2 = new QuantityMeasurement(unit.Weight.GRAM, 1000);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given1TonneAnd1000KiloGrams_WhenCompared_ShouldReturnTrue"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Weight.TONNE, 1);
        let quantity2 = new QuantityMeasurement(unit.Weight.KILOGRAM, 1000);
        let compareCheck = quantityMeasurement.compare(quantity1, quantity2);
        assert.isTrue(compareCheck);
        callback();
    }
    it("given1TonneAnd1000Grams_WhenAdded_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Weight.TONNE, 1);
        let quantity2 = new QuantityMeasurement(unit.Weight.GRAM, 1000);
        let result = quantityMeasurement.addQuantities(quantity1, quantity2);
        assert.equal(result, 1001.0);
        callback();
    }
    it("given212Fahrenhite_WhenConverted_ShouldReturnCorrectResult"), (callback) => {
        let quantity1 = new QuantityMeasurement(unit.Temperature.FAHRENHEIT, 212);
        let result = quantityMeasurement.temperatureConversion(quantity1);
        assert.equal(result, 100.0);
        callback();
    }
});