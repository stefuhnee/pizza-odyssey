function getEightAM() {
  var eightAM = {
    time: '8:00am',
    pizzasSold: pizzasPerHour(0,4),
    deliveriesMade: deliveriesPerHour(0,4)
  };
  return eightAM;
};

function getNineAM() {
  var nineAM = {
    time: '9:00am',
    pizzasSold: pizzasPerHour(0,4),
    deliveriesMade: deliveriesPerHour(0,4)
  };
  return nineAM;
};

function getTenAM() {
  var tenAM = {
    time: '10:00am',
    pizzasSold: pizzasPerHour(0,4),
    deliveriesMade: deliveriesPerHour(0,4)
  };
  return tenAM;
};

function getElevenAM() {
  var elevenAM = {
    time: '11:00am',
    pizzasSold: pizzasPerHour(0,7),
    deliveriesMade: deliveriesPerHour(0,4)
  };
  return elevenAM;
};

function getTwelvePM() {
  var twelvePM = {
    time: '12:00pm',
    pizzasSold: pizzasPerHour(0,7),
    deliveriesMade: deliveriesPerHour(0,4)
  };
  return twelvePM;
};

function getOnePM() {
  var onePM = {
    time: '1:00pm',
    pizzasSold: pizzasPerHour(0,7),
    deliveriesMade: deliveriesPerHour(0,4)
  };
  return onePM;
};

function getTwoPM() {
  var twoPM = {
    time: '2:00pm',
    pizzasSold: pizzasPerHour(2,15),
    deliveriesMade: deliveriesPerHour(1,4)
  };
  return twoPM;
};

function getThreePM() {
  var threePM = {
    time: '3:00pm',
    pizzasSold: pizzasPerHour(2,15),
    deliveriesMade: deliveriesPerHour(1,4)
  };
  return threePM;
};

function getFourPM() {
  var fourPM = {
    time: '4:00pm',
    pizzasSold: pizzasPerHour(2,15),
    deliveriesMade: deliveriesPerHour(1,4)
  };
  return fourPM;
};

function getFivePM() {
  var fivePM = {
    time: '5:00pm',
    pizzasSold: pizzasPerHour(15,35),
    deliveriesMade: deliveriesPerHour(3,8)
  };
  return fivePM;
};

function getSixPM() {
  var sixPM = {
    time: '6:00pm',
    pizzasSold: pizzasPerHour(15,35),
    deliveriesMade: deliveriesPerHour(3,8)
  };
  return sixPM;
};

function getSevenPM() {
  var sevenPM = {
    time: '7:00pm',
    pizzasSold: pizzasPerHour(15,35),
    deliveriesMade: deliveriesPerHour(3,8)
  };
  return sevenPM;
};

function getEightPM() {
  var eightPM = {
    time: '8:00pm',
    pizzasSold: pizzasPerHour(12,31),
    deliveriesMade: deliveriesPerHour(5,12)
  };
  return eightPM;
};

function getNinePM() {
  var ninePM = {
    time: '9:00pm',
    pizzasSold: pizzasPerHour(12,31),
    deliveriesMade: deliveriesPerHour(5,12)
  };
  return ninePM;
};

function getTenPM() {
  var tenPM = {
    time: '10:00pm',
    pizzasSold: pizzasPerHour(12,31),
    deliveriesMade: deliveriesPerHour(5,12)
  };
  return tenPM;
};

function getElevenPM() {
  var elevenPM = {
    time: '11:00pm',
    pizzasSold: pizzasPerHour(5,20),
    deliveriesMade: deliveriesPerHour(6,11)
  };
  return elevenPM;
};

function getTwelveAM() {
  var twelveAM = {
    time: '12:00am',
    pizzasSold: pizzasPerHour(5,20),
    deliveriesMade: deliveriesPerHour(6,11)
  };
  return twelveAM;
};

function getOneAM() {
  var oneAM = {
    time: '1:00am',
    pizzasSold: pizzasPerHour(5,20),
    deliveriesMade: deliveriesPerHour(6,11)
  };
  return oneAM;
};

//Generates a random number of pizzas delivered in a given hour given a range of min to max.
function pizzasPerHour(minPizzas, maxPizzas) {
  return Math.floor(Math.random() * (maxPizzas - minPizzas) + minPizzas);
};

//Generates a random number of deliveries made in a given hour given a range of min to max.
function deliveriesPerHour(minDeliveries, maxDeliveries) {
  return Math.floor(Math.random() * (maxDeliveries - minDeliveries) + minDeliveries);
};

//Creates SpecificLocation object
function SpecificLocation(name, salesData) {
  this.name = name;
  this.salesData = salesData;
};

// Adding methods to object constructor to obtain arrays

//Calculates the drivers needed for every hour of the day.
SpecificLocation.prototype.specificDrivers = function() {
  for (var i = 0; i < this.salesData.length; i++) {
    this.salesData[i].driversNeeded = [];
    //
    this.salesData[i].driversNeeded = Math.ceil(this.salesData[i].deliveriesMade / 3);
    console.log('sales Data of ' + i + ' ', this.salesData[i]);
  }
};

//Displays the required information in the format given.
SpecificLocation.prototype.writeToDocument = function() {
  // Cycle through each hour object in the array
  for (var i = 0; i < this.salesData.length; i++) {
    // Target HTML ul element by name ID, which matches the name parameter and create new li
    var el = document.getElementById(this.name);
    console.log('element referred to: ' + el);
    var newLi = document.createElement('li');
    // If there are the value at index i for drivers needed is 0, write No drivers recommended.
    if (this.salesData[i].driversNeeded === 0) {
      newLi.textContent = this.salesData[i].time + ' ' + this.salesData[i].pizzasSold + ' pizzas, ' + this.salesData[i].deliveriesMade + ' deliveries -- [ No drivers recommended ]';
      el.appendChild(newLi);
      // Otherwise, write how many drivers are recommended.
    } else {
      newLi.textContent = this.salesData[i].time + ' ' + this.salesData[i].pizzasSold + ' pizzas, ' + this.salesData[i].deliveriesMade + ' deliveries -- [ ' + 'drivers recommended: ' + this.salesData[i].driversNeeded + ']';
      el.appendChild(newLi);
    }
  };
};

var ballardSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];

var firstHillSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];

var internationalDistrictSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];

var southLakeUnionSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];

var georgetownSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];

var ravennaSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];

// Defining each location as a new object
var ballard = new SpecificLocation('ballard', ballardSalesData);
var firstHill = new SpecificLocation('first-hill', firstHillSalesData);
var internationalDistrict = new SpecificLocation('international-district', internationalDistrictSalesData);
var southLakeUnion = new SpecificLocation('south-lake-union', southLakeUnionSalesData);
var georgetown = new SpecificLocation('georgetown', georgetownSalesData);
var ravenna = new SpecificLocation('ravenna', ravennaSalesData);

ballard.specificDrivers();
firstHill.specificDrivers();
internationalDistrict.specificDrivers();
southLakeUnion.specificDrivers();
georgetown.specificDrivers();
ravenna.specificDrivers();

ballard.writeToDocument();
firstHill.writeToDocument();
internationalDistrict.writeToDocument();
southLakeUnion.writeToDocument();
georgetown.writeToDocument();
ravenna.writeToDocument();
