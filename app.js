var pizzasSoldPerHour = [];
var deliveriesMadePerHour = [];
var minPizzas;
var maxPizzas;
var minDeliveries;
var maxDeliveries;
var pizzasSold;
var DriversPerHour = [];
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
function PizzaDataPerDay() {
  for (var i = 0; i < salesData.length; i++) {
    pizzasSoldPerHour.push(salesData[i].pizzasSold);
  }
  return pizzasSoldPerHour;
}
console.log(PizzaDataPerDay());

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
    DriversPerHour.push(Math.round(Math.ceil(deliveriesMadePerHour[i] / 3)));
  }
  return DriversPerHour;
};
console.log(driversPerDay());

//Creates SpecificLocation object
function SpecificLocation(name) {
  this.name = name;
};

//Adding methods to object constructor to obtain arrays
SpecificLocation.prototype.pizzasSoldPerHour = PizzaDataPerDay();
SpecificLocation.prototype.deliveriesMadePerHour = deliveriesDataPerDay();
SpecificLocation.prototype.specificDrivers = driversPerDay();

var ballard = new SpecificLocation('ballard');
var first_hill = new SpecificLocation('first-hill');
var international_district = new SpecificLocation('international-district');
var south_lake_union = new SpecificLocation('south-lake-union');
var georgetown = new SpecificLocation('georgetown');
var ravenna = new SpecificLocation('ravenna');

//Displays the required information in the format given.
function writeToDocument(name) {
  // Cycle through each hour object in the array
  for (var i = 0; i < salesData.length; i++) {
    // Target HTML ul element by name ID, which matches the name parameter and create new li
    el = document.getElementById(name);
    newLi = document.createElement('li');
    // If there are the value at index i for drivers needed is 0, write No drivers recommended.
    if (DriversPerHour[i] === 0) {
      newLi.textContent = salesData[i].time + ' ' + pizzasSoldPerHour[i] + ' pizzas, ' + deliveriesMadePerHour[i] + ' deliveries -- [ No drivers recommended ]';
      el.appendChild(newLi);
      // Otherwise, write how many drivers are recommended.
    } else {
      newLi.textContent = salesData[i].time + ' ' + pizzasSoldPerHour[i] + ' pizzas, ' + deliveriesMadePerHour[i] + ' deliveries -- [ ' + 'drivers recommended: ' + DriversPerHour[i] + ']';
      el.appendChild(newLi);
    }

  }
}

writeToDocument('ballard');
writeToDocument('first-hill');
writeToDocument('international-district');
writeToDocument('south-lake-union');
writeToDocument('georgetown');
writeToDocument('ravenna');
