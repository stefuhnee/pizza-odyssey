var salesData = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveAM, oneAM, twoAM];
var pizzasSoldPerHour = [];

function pizzasPerHour(minPizzas, maxPizzas) {
  return Math.floor(Math.random() * (maxPizzas - minPizzas) + minPizzas);
};
console.log(pizzasPerHour(3,4));

function deliveriesPerHour(minDeliveries, maxDeliveries) {
  return Math.floor(Math.random() * (maxPizzas - minPizzas) + minPizzas);
};

function salesDataPerDay() {
  for (i=0; i < salesData.length; i++) {
    pizzasSoldPerHour.push(salesData[i].pizzasSold);
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
  this.pizzasSoldPerHour =
};

var ballardLocation = new specificLocation('Ballard', salesData)
