// Generates a random number of deliveries made in a given hour given a range of min to max.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Creates a new object of the type storeLocation with a name and an empty array.
function storeLocation(name) {
  this.name = name;
  this.hourlyData = [];
}

// Add hourly data into the empty hourlyData array within the object.
storeLocation.prototype.pushHourlyData = function(data) {
  this.hourlyData.push(data);
};

// Creates new object HourlyData with 4 properties. Eventually becomes a property of the storeLocation.
function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade) {
  this.time = time;
  this.pizzasSold = getRandomNumber(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomNumber(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
};

// Creating new objects
var ballard = new storeLocation('ballard');
var firstHill = new storeLocation('first-hill');
var internationalDistrict = new storeLocation('international-district');
var southLakeUnion = new storeLocation('south-lake-union');
var georgetown = new storeLocation('georgetown');
var ravenna = new storeLocation('ravenna');

// Creating new HourlyData objects with associated properties. Needs to be done for every hour.
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

// Creates a heading row for the table
function generateHeadingRow(tableHeadings) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < tableHeadings.length; i++) {
    col = document.createElement('th');
    col.textContent = tableHeadings[i];
    row.appendChild(col);
  }
  return row;
}

// Creates a data row for the table
function generateRow(rowArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < rowArray.length; i++) {
    col = document.createElement('td');
    col.textContent = rowArray[i];
    row.appendChild(col);
  }
  return row;
}

// Creates the table and calls functions to generate the heading and each data row, sequentially.
var locationTable = document.createElement('table');
var firstRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);
var secondRow = generateRow(['placeholder']);

// Adds rows to the table.
locationTable.appendChild(firstRow);
locationTable.appendChild(secondRow);

// Adds table to the page using the HTML id element.
document.getElementById('ballard').appendChild(locationTable);
console.log(locationTable);

// // //Displays the required information in the format given.
// // SpecificLocation.prototype.writeToDocument = function() {
// //   // Cycle through each hour object in the array
// //   for (var i = 0; i < this.salesData.length; i++) {
// //     // Target HTML ul element by name ID, which matches the name parameter and create new li
// //     var el = document.getElementById(this.name);
// //     console.log('element referred to: ' + el);
// //     var newLi = document.createElement('li');
// //     // If there are the value at index i for drivers needed is 0, write No drivers recommended.
// //     if (this.salesData[i].driversNeeded === 0) {
// //       newLi.textContent = this.salesData[i].time + ' ' + this.salesData[i].pizzasSold + ' pizzas, ' + this.salesData[i].deliveriesMade + ' deliveries -- [ No drivers recommended ]';
// //       el.appendChild(newLi);
// //       // Otherwise, write how many drivers are recommended.
// //     } else {
// //       newLi.textContent = this.salesData[i].time + ' ' + this.salesData[i].pizzasSold + ' pizzas, ' + this.salesData[i].deliveriesMade + ' deliveries -- [ ' + 'drivers recommended: ' + this.salesData[i].driversNeeded + ']';
// //       el.appendChild(newLi);
// //     }
// //   };
// // };
//
// var tableHeadings = ['Time', 'Min Pizza/hr', 'Max Pizza/hr', 'Min Delivery/hr', 'Max Delivery/hr'];
//
// var rowOne = ['', '', '', '', ''];
//
// var ballardSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];
//
// var ballardMinPizzas = [0, 0, 0, 5, 5, 5, 2, 2, 2, 0, 0, 0, 1, 1, 1, 8, 8, 8];
// var ballardMaxPizzas = [3, 3, 3, 10, 10, 10, 13, 13, 13, 15, 15, 15, 3, 3, 3, 15, 15, 15];
//
// var firstHillSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];
//
// var internationalDistrictSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];
//
// var southLakeUnionSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];
//
// var georgetownSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];
//
// var ravennaSalesData = [getEightAM(), getNineAM(), getTenAM(), getElevenAM(), getTwelvePM(), getOnePM(), getTwoPM(), getThreePM(), getFourPM(), getFivePM(), getSixPM(), getSevenPM(), getEightPM(), getNinePM(), getTenPM(), getElevenPM(), getTwelveAM(), getOneAM()];
//
// // Defining each location as a new object
// var ballard = new SpecificLocation('ballard', ballardSalesData, ballardMinPizzas, ballardMaxPizzas);
// var firstHill = new SpecificLocation('first-hill', firstHillSalesData);
// var internationalDistrict = new SpecificLocation('international-district', internationalDistrictSalesData);
// var southLakeUnion = new SpecificLocation('south-lake-union', southLakeUnionSalesData);
// var georgetown = new SpecificLocation('georgetown', georgetownSalesData);
// var ravenna = new SpecificLocation('ravenna', ravennaSalesData);
//
// ballard.specificDrivers();
// firstHill.specificDrivers();
// internationalDistrict.specificDrivers();
// southLakeUnion.specificDrivers();
// georgetown.specificDrivers();
// ravenna.specificDrivers();
//
// ballard.writeToDocument();
// firstHill.writeToDocument();
// internationalDistrict.writeToDocument();
// southLakeUnion.writeToDocument();
// georgetown.writeToDocument();
// ravenna.writeToDocument();
//
// generateHeadingRow(tableHeadings);
