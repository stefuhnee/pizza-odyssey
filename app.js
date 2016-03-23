var locationTable;

// Generates a random number of deliveries made in a given hour given a range of min to max.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Creates a new object of the type StoreLocation with a name and an empty array.
function StoreLocation(name) {
  this.name = name;
  this.hourlyData = [];
}

// Creates a heading row for the table
function generateHeadingRow(tableHeadings) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < tableHeadings.length; i++) {
    col = document.createElement('th');
    col.textContent = tableHeadings[i];
    row.appendChild(col);
  }
  locationTable.appendChild(row);
};

// Creates a data row for the table
function generateRow(currentRowArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < currentRowArray.length; i++) {
    col = document.createElement('td');
    col.textContent = currentRowArray[i];
    row.appendChild(col);
  }
  return row;
};

// Adds hourly data into the empty hourlyData array within the object.
StoreLocation.prototype.pushHourlyData = function(data) {
  this.hourlyData.push(data);
};

// Access each hourlyData array from the location object, and then access the properties of each hourlyData object within the array. Push to an array to represent the row of the table.
StoreLocation.prototype.getRow = function() {
  // Creates the table and calls functions to generate the heading and each data row, sequentially.
  var locationTable = document.createElement('table');
  var firstRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);
  // Adds table to the page using the HTML id element.
  document.getElementById('ballard').appendChild(locationTable);
  document.getElementById('first-hill').appendChild(locationTable);
  for (var i = 0; i < this.hourlyData.length; i++) {
    currentRowArray = [];
    while (currentRowArray.length < 4) {
      var time = this.hourlyData[i].time;
      var pizzasSold = this.hourlyData[i].pizzasSold;
      var deliveriesMade = this.hourlyData[i].deliveriesMade;
      var driversNeeded = this.hourlyData[i].driversNeeded;
      currentRowArray.push(time, pizzasSold, deliveriesMade, driversNeeded);
    }
    locationTable.appendChild(generateRow(currentRowArray));
    console.log(currentRowArray);
  }
};

// Creates new object HourlyData with 4 properties. Eventually becomes a property of the StoreLocation object.
function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade) {
  this.time = time;
  this.pizzasSold = getRandomNumber(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomNumber(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
};

// Creating instances of StoreLocation object
var ballard = new StoreLocation('ballard');
var firstHill = new StoreLocation('first-hill');
var internationalDistrict = new StoreLocation('international-district');
var southLakeUnion = new StoreLocation('south-lake-union');
var georgetown = new StoreLocation('georgetown');
var ravenna = new StoreLocation('ravenna');

// Creating new HourlyData objects with associated properties. Pushes the HourlyData objects into an array. Needs to be done for every hour.
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('12:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('12:00 am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 am', 8, 15, 6, 16));

firstHill.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('12:00 pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('12:00 am', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('1:00 am', 8, 20, 6, 16));

// Fill in tables with row data
ballard.getRow();
firstHill.getRow();
