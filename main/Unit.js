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

    Volume = {
      GALLON: 3.78,
      LITRE: 1.0,
      MILLILITRE: 0.001,
    };

    Weight = {
      KILOGRAM: 1.0,
      GRAM: 0.001,
      TONNE: 1000.0,
    };
}

module.exports = Unit;