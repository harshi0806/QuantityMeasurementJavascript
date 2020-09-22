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

    //Base unit for Volume conversion is Litre
    Volume = {
      GALLON: 3.78,
      LITRE: 1.0,
      MILLILITRE: 0.001,
    };

    //Base unit for Weight conversion is Kilogram
    Weight = {
      KILOGRAM: 1.0,
      GRAM: 0.001,
      TONNE: 1000.0,
    };

    //Base unit for Temperature conversion is Fahrenhit
    Temperature = {
      FAHRENHEIT: "FAHRENHEIT",
      CELSIUS: "CELSIUS",
    };
}
Object.freeze = Unit;

module.exports = Unit;