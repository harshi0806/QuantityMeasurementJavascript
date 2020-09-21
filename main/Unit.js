/**
  * @description constant variables are declared to store base unit conversion value
  *              of type: length, weight, volume and temperature
  * @class Unit
  */
class Unit {
    //Base unit for Length conversion is Inch
    Length = {
        FEET: 12,
        INCH: 1,
        YARD: 36,
        CENTIMETER = 0.4, 
    };
}

module.exports = Unit;