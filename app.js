var pizzasSoldPerHour = [];
var deliveriesMadePerHour = [];
var minPizzas;
var maxPizzas;
var minDeliveries;
var maxDeliveries;
var pizzasSold;
var specificHour;
var specificPizzas;
var specificDeliveries;
var specificDriversperHour = [];
var el;

var eightAM = {
  time: '8:00am',
  pizzasSold: pizzasPerHour(0,4),
  deliveriesMade: deliveriesPerHour(0,4)
};

var nineAM = {
  time: '9:00am',
  pizzasSold: pizzasPerHour(0,4),
  deliveriesMade: deliveriesPerHour(0,4)
};

var tenAM = {
  time: '10:00am',
  pizzasSold: pizzasPerHour(0,4),
  deliveriesMade: deliveriesPerHour(0,4)
};

var elevenAM = {
  time: '11:00am',
  pizzasSold: pizzasPerHour(0,7),
  deliveriesMade: deliveriesPerHour(0,4)
};

var twelvePM = {
  time: '12:00pm',
  pizzasSold: pizzasPerHour(0,7),
  deliveriesMade: deliveriesPerHour(0,4)
};

var onePM = {
  time: '1:00pm',
  pizzasSold: pizzasPerHour(0,7),
  deliveriesMade: deliveriesPerHour(0,4)
};

var twoPM = {
  time: '2:00pm',
  pizzasSold: pizzasPerHour(2,15),
  deliveriesMade: deliveriesPerHour(1,4)
};

var threePM = {
  time: '3:00pm',
  pizzasSold: pizzasPerHour(2,15),
  deliveriesMade: deliveriesPerHour(1,4)
};

var fourPM = {
  time: '4:00pm',
  pizzasSold: pizzasPerHour(2,15),
  deliveriesMade: deliveriesPerHour(1,4)
};

var fivePM = {
  time: '5:00pm',
  pizzasSold: pizzasPerHour(15,35),
  deliveriesMade: deliveriesPerHour(3,8)
};

var sixPM = {
  time: '6:00pm',
  pizzasSold: pizzasPerHour(15,35),
  deliveriesMade: deliveriesPerHour(3,8)
};

var sevenPM = {
  time: '7:00pm',
  pizzasSold: pizzasPerHour(15,35),
  deliveriesMade: deliveriesPerHour(3,8)
};

var eightPM = {
  time: '8:00pm',
  pizzasSold: pizzasPerHour(12,31),
  deliveriesMade: deliveriesPerHour(5,12)
};

var ninePM = {
  time: '9:00pm',
  pizzasSold: pizzasPerHour(12,31),
  deliveriesMade: deliveriesPerHour(5,12)
};

var tenPM = {
  time: '10:00pm',
  pizzasSold: pizzasPerHour(12,31),
  deliveriesMade: deliveriesPerHour(5,12)
};

var elevenPM = {
  time: '11:00pm',
  pizzasSold: pizzasPerHour(5,20),
  deliveriesMade: deliveriesPerHour(6,11)
};

var twelveAM = {
  time: '12:00am',
  pizzasSold: pizzasPerHour(5,20),
  deliveriesMade: deliveriesPerHour(6,11)
};

var oneAM = {
  time: '1:00am',
  pizzasSold: pizzasPerHour(5,20),
  deliveriesMade: deliveriesPerHour(6,11)
};

var salesData = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveAM, oneAM];

//Generates a random number of pizzas delivered in a given hour given a range of min to max.
function pizzasPerHour(minPizzas, maxPizzas) {
  return Math.floor(Math.random() * (maxPizzas - minPizzas) + minPizzas);
};

//Generates a random number of deliveries made in a given hour given a range of min to max.
function deliveriesPerHour(minDeliveries, maxDeliveries) {
  return Math.floor(Math.random() * (maxDeliveries - minDeliveries) + minDeliveries);
};

//References the salesData array, takes a time object and reads the value of the pizzasSold property, then pushes that value to the array PizzasSoldPerHour.
function salesDataPerDay() {
  for (var i = 0; i < salesData.length; i++) {
    pizzasSoldPerHour.push(salesData[i].pizzasSold);
  }
  return pizzasSoldPerHour;
}
console.log(salesDataPerDay());

//References the salesData array, takes a time object and reads the value of the deliveriesMade property, then pushes that value to the array deliveriesMadePerHour.
function deliveriesDataPerDay() {
  for (i = 0; i < salesData.length; i++) {
    deliveriesMadePerHour.push(salesData[i].deliveriesMade);
  }
  return deliveriesMadePerHour;
}
console.log(deliveriesDataPerDay());

//Calculates the drivers needed for every hour of the day.
function driversPerDay() {
  for (var i = 0; i < salesData.length; i++) {
    specificDriversperHour.push(Math.round(Math.ceil(deliveriesMadePerHour[i] / 3)));
  }
  return specificDriversperHour;
};
console.log(driversPerDay());

//Creates SpecificLocation object
function SpecificLocation(name) {
  this.name = name;
  this.pizzasSoldPerHour = salesDataPerDay();
  this.deliveriesMadePerHour = deliveriesDataPerDay();
  this.specificDrivers = driversPerDay();
};

//Displays the required information in the format given.
var ballard = new SpecificLocation('ballard');
var first_hill = new SpecificLocation('first-hill');
var international_district = new SpecificLocation('international-district');
var south_lake_union = new SpecificLocation('south-lake-union');
var georgetown = new SpecificLocation('georgetown');
var ravenna = new SpecificLocation('ravenna');
