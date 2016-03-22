var salesData = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveAM, oneAM, twoAM];
var pizzasSoldPerHour = [];
var deliveriesMadePerHour = [];

//Generates a random number of pizzas delivered in a given hour given a range of min to max.
function pizzasPerHour(minPizzas, maxPizzas) {
  return Math.floor(Math.random() * (maxPizzas - minPizzas) + minPizzas);
};
console.log(pizzasPerHour(3,4));

//Generates a random number of deliveries made in a given hour given a range of min to max.
function deliveriesPerHour(minDeliveries, maxDeliveries) {
  return Math.floor(Math.random() * (maxPizzas - minPizzas) + minPizzas);
};

//References the salesData array, takes a time object and reads the value of the pizzasSold property, then pushes that value to the array PizzasSoldPerHour.
function salesDataPerDay() {
  for (i=0; i < salesData.length; i++) {
    pizzasSoldPerHour.push(salesData[i].pizzasSold);
  }
  return pizzasSoldPerHour;
}

//eferences the salesData array, takes a time object and reads the value of the deliveriesMade property, then pushes that value to the array deliveriesMadePerHour.
function deliveriesDataPerDay() {
  for (i=0; i < salesData.length; i++) {
    deliveriesMadePerHour.push(salesData[i].deliveriesMade);
  }
  return pizzasSoldPerHour;
}

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
  pizzasSold: pizzasPerHour(0,4),
  deliveriesMade: deliveriesPerHour(0,4)
};

var specificLocation = {
  this.locationName = locationName;
  this.pizzasSoldPerHour = salesDataPerDay();
  this.deliveries
};

var ballardLocation = new specificLocation('Ballard', salesData)
