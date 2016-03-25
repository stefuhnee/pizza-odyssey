var pizzasServed = document.getElementById('pizzas-served');
var addTimeToLocationForm = document.getElementById('location-form');

// Creates a new object of the type StoreLocation with a name and an empty array.
function StoreLocation(name) {
  this.name = name;
  this.hourlyData = [];
};

// Adds hourly data into the empty hourlyData array within the object.
StoreLocation.prototype.pushHourlyData = function(data) {
  this.hourlyData.push(data);
};

// Create a table for the StoreLocation object.
StoreLocation.prototype.getRow = function() {
  var figureEl = document.getElementById('all-location-data');
  var tableEl = document.createElement('table');
  // Checks if the HTML page is the correct page to run the function on (contains figure with id property all-location-data) so error is not thrown. Creates and appends header with location name, and creates and appends table heading.
  if (figureEl){
    var headingEl = document.createElement('h2');
    headingEl.textContent = this.name.split('-').join(' ');
    figureEl.appendChild(headingEl);
    var firstRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);
    tableEl.appendChild(firstRow);
  };
  if (figureEl) {
    // Create array representing table row. Access each hourlyData array from the location object, and then access the properties of each hourlyData object within the array. Push to an array to represent the row of the table, then append the elements of the array to the table as a row.
    for (var i = 0; i < this.hourlyData.length; i++) {
      currentRowArray = [];
      var time = this.hourlyData[i].time;
      var pizzasSold = this.hourlyData[i].pizzasSold;
      var deliveriesMade = this.hourlyData[i].deliveriesMade;
      var driversNeeded = this.hourlyData[i].driversNeeded;
      currentRowArray.push(time, pizzasSold, deliveriesMade, driversNeeded);
      tableEl.appendChild(generateRow(currentRowArray));
      figureEl.appendChild(tableEl);
    }
  }
};

// Calculates total pizzas sold in one store
StoreLocation.prototype.calculatePizzasServed = function() {
  var totalPizzasSold = 0;
  for (var i = 0; i < this.hourlyData.length; i++) {
    totalPizzasSold += this.hourlyData[i].pizzasSold;
  }
  return totalPizzasSold;
};

// Captures user inputs and creates table row with the inputs.
function userInputCreateStore() {
  // Targets section containing tables and captures location name from first form to create header with store name and user generated table and append to the section.
  var userTableSection = document.getElementById('all-location-data');
  var userLocationName = (event.target.locationName.value);
  var headingEl = document.createElement('h2');
  headingEl.textContent = userLocationName;
  userTableSection.appendChild(headingEl);
  // Gives table the id property of the name entered.
  var tableEl = document.createElement('table');
  tableEl.setAttribute('id', userLocationName.split(' ').join('-'));
  // Adds heading row to table and appends it to the table, then appends table to the HTML section with the id all-location-data.
  var firstRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);
  tableEl.appendChild(firstRow);
  userTableSection.appendChild(tableEl);
};

// Captures data from second form, including name of location (needs to match value used to create table).
function userInputAddHourData(){
  var userLocationName = (event.target.locationName.value);
  var tableEl = document.getElementById(userLocationName.split(' ').join('-'));
  var userTime = event.target.time.value;
  var userMinPizzas = parseInt(event.target.minPizzas.value);
  var userMaxPizzas = parseInt(event.target.maxPizzas.value);
  var userMinDeliveries = parseInt(event.target.minDeliveries.value);
  var userMaxDeliveries = parseInt(event.target.maxDeliveries.value);

  if ((!isNaN(userMinPizzas) && !isNaN(userMaxPizzas) && !isNaN(userMinDeliveries) && !isNaN(userMaxDeliveries))) {
    // Instantiates new HourlyData object using captured data.
    var userHour = new HourlyData(userTime, userMinPizzas, userMaxPizzas, userMinDeliveries, userMaxDeliveries);
    //Invokes generateRow function to add the data stored within the object as an array to the table to generate a new row.
    tableEl.appendChild(generateRow([userHour.time, userHour.pizzasSold, userHour.deliveriesMade, userHour.driversNeeded]));
  }
};

// Adds total pizzas sold across all stores
function totalPizzasSoldAcrossAllLocations() {
  var totalPizzasSoldPerDay = 0;
  if (pizzasServed) {
    totalPizzasSoldPerDay = ballard.calculatePizzasServed() + firstHill.calculatePizzasServed() + internationalDistrict.calculatePizzasServed() + southLakeUnion.calculatePizzasServed() + georgetown.calculatePizzasServed() + ravenna.calculatePizzasServed();
    pizzasServed.textContent = totalPizzasSoldPerDay;
  }
}

// Generates a random number of deliveries made in a given hour given a range of min to max.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Creates a heading row for non-user-generated tables.
function generateHeadingRow(tableHeadings) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < tableHeadings.length; i++) {
    col = document.createElement('th');
    col.textContent = tableHeadings[i];
    row.appendChild(col);
  }
  return row;
};

// Creates a data row for a table
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

// Checks if the user has created a table with the id identified with the name inputted. If they have, add data. If they haven't, make a new table!
function addUserInput(event) {
  event.preventDefault();
  var userLocationName = (event.target.locationName.value);
  if (document.getElementById(userLocationName)) {
    userInputAddHourData();
  } else {
    userInputCreateStore();
  }
}

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

internationalDistrict.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('12:00 pm', 0, 7, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
internationalDistrict.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
internationalDistrict.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
internationalDistrict.pushHourlyData(new HourlyData('5:00 pm', 10, 26, 4, 6));
internationalDistrict.pushHourlyData(new HourlyData('6:00 pm', 10, 26, 4, 6));
internationalDistrict.pushHourlyData(new HourlyData('7:00 pm', 10, 26, 4, 6));
internationalDistrict.pushHourlyData(new HourlyData('8:00 pm', 8, 22, 7, 15));
internationalDistrict.pushHourlyData(new HourlyData('9:00 pm', 8, 22, 7, 15));
internationalDistrict.pushHourlyData(new HourlyData('10:00 pm', 8, 22, 7, 15));
internationalDistrict.pushHourlyData(new HourlyData('11:00 pm', 0, 2, 2, 8));
internationalDistrict.pushHourlyData(new HourlyData('12:00 am', 0, 2, 2, 8));
internationalDistrict.pushHourlyData(new HourlyData('1:00 am', 0, 2, 2, 8));

southLakeUnion.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('12:00 pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('2:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('3:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('4:00 pm', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('5:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('6:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('7:00 pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('8:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('9:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('10:00 pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('11:00 pm', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('12:00 am', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('1:00 am', 5, 21, 16, 31));

georgetown.pushHourlyData(new HourlyData('8:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('9:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('10:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('11:00 am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('12:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('1:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('2:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('3:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('4:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('5:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('6:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('7:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('8:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('9:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('10:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('11:00 pm', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('12:00 am', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('1:00 am', 15, 20, 6, 21));

ravenna.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('12:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('5:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('6:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('7:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('8:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('9:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('10:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('11:00 pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('12:00 am', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('1:00 am', 2, 4, 3, 11));

// Fill in tables with row data
ballard.getRow();
firstHill.getRow();
internationalDistrict.getRow();
southLakeUnion.getRow();
georgetown.getRow();
ravenna.getRow();

totalPizzasSoldAcrossAllLocations();
addTimeToLocationForm.addEventListener('submit', addUserInput);
