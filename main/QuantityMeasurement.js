/*************************************************************
 *
 * Execution       : default node cmd> node QuantityMeasurement.js
 * Purpose         : Unit Measurement Conversion
 *
 * @description    : Convert and compare quantities 
 *                   of type length, weight, volume and temperature also
 *                   perform addition of quantities 
 *
 * @file           : QuantityMeasurement.js
 * @overview       : Compare, convert and add quantities
 * @module         : Node.js, Mocha and Chai, local packages
 * @version        : 1.0
 * @since          : 16/11/2020
 *
 * **********************************************************/
class QuantityMeasurement {
    constructor(unit, value) {
        this.unit = unit;
        this.value = value;
        this.checkNullValue();
    }

    checkNullValue = () => {
        if (this.value == null || this.value == undefined ) 
            throw new Error("Value is null or undefined");
    };

    baseUnitConversion = () => this.unit * this.value;

    compare = (quantity1, quantity2) => {
        return quantity1.baseUnitConversion() == quantity2.baseUnitConversion()
    };

    addQuantities = (quantity1, quantity2) => {
        return quantity1.baseUnitConversion() + quantity2.baseUnitConversion();
    };
}

module.exports = QuantityMeasurement;