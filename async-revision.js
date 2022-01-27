//need for callbacks
function display(some) {
    console.log(some);
}
function calculator(a, b) {
    setTimeout(() => {
        let c = a + b;
        return c;
    }, 2000);
}
let result = calculator(5, 10);
display(result);

//using callback
function calculator2(a, b, callback) {
    setTimeout(() => {
        let c = a + b;
        callback(c);
    }, 2000);
}

calculator2(5, 10, display);

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

//callback hell
function getContinents(callback) {
    setTimeout(() => {
        let continent = 'Asia';
        callback(continent);
    }, 2000);
}

function getCountries(continent, callback) {
    setTimeout(() => {
        let countries = ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka'];
        callback(countries);
    }, 2000);
}

function getStates(country, callback) {
    setTimeout(() => {
        let states = ['UP', 'MH', 'MP', 'AP'];
        callback(states);
    }, 2000);
}

function getCities(state, callback) {
    setTimeout(() => {
        let cities = ['Lucknow', 'Kanpur', 'Prayagraj', 'Meerut'];
        callback(cities);
    }, 2000);
}

getContinents(function (continent) {
    getCountries(continent, function (countries) {
        getStates(countries[0], function (states) {
            getCities(states[0], function (cities) {
                console.log(cities);
            })
        })
    })
})

//promise
function getTrip(destination) {
    return new Promise(function (resolve, reject) {
        if (destination == "ooty") {
            resolve("Trip to " + destination);
        } else {
            reject("Trip cancelled");
        }
    });
};

getTrip("ooty").then(
    function (data) {
        console.log(data);
    })
    .catch(
        function (error) {
            console.log(error);
        }
    )

//promise chaining
function checkEven(num) {
    return new Promise(function (resolve, reject) {
        if (num % 2 == 0) {
            resolve(num / 2);
        } else {
            reject("Not an even number")
        }
    })
}
function square(num) {
    return new Promise(function (resolve) {
        resolve(num * num)
    })
}
checkEven(10)
    .then(function (num) { return square(num) })
    .then(function (result) { console.log("Square of the number is " + result) })
    .catch(function (error) { console.log(error) });

//using async-await
async function getResult(num) {
    try {
        let newNum = await checkEven(num);
        let result = await square(newNum);
        console.log("Square of the number is " + result);
    } catch (error) {
        console.log(error);
    }
}
getResult(5);

//timer functions
function myFunction() {
    setTimeout(() => {
        console.log("Function completed");
    }, 2000);
}
console.log("Start");
myFunction();
console.log("End");

function myTimer() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}
setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}
let id = setInterval(myTimer, 1000);
clearInterval(id);

function myFunction() {
    console.log("function completed");
}
let id = setTimeout(myFunction, 2000);
clearTimeout(id);

//exercises solutions
function getData(callback) {
    setTimeout(() => {
        callback({ text: 'Complete Code Example' })
    }, 2000)
}
getData(data => {
    console.log(data.text)
})

function bookFlight(airline) {
    return new Promise(function (resolve, reject) {
        if (airline == "AirIndia") {
            resolve(5600);
        } else {
            reject(Error("Flight can not be booked"))
        }
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        resolve(7000 + flightPrice)
    })
}
bookFlight("AirIndia")
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log("Total is " + cumulativeData) }) //Output: Total is 12600
    .catch(e => console.log(e.message))


function first() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("First function");
            resolve();
        }, 2000);
    });
}

function second() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Second function");
            resolve();
        }, 3000);
    });
}

function third() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Third function");
            resolve();
        }, 1000);
    });
}

first()
    .then(second)
    .then(third);

async function execute() {
    await first();
    await second();
    await third();
}
execute();


function myTimer() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}
myTimer();
var interval = setInterval(myTimer, 1000);
setTimeout(() => {
    clearInterval(interval)
}, 10000);


var users = [
    {name: "John", age: 25},
    {name: "David", age: 28}
]

function displayUsers() {
    users.forEach(user => {
        console.log("Name: " + user.name + " Age: " + user.age);
    });
}

function validateAge(user) {
    return new Promise(function(resolve, reject) {
        if(user.age >= 25) {
            users.push(user);
            resolve();
        } else {
            reject("Age cannot be less than 25")
        }
    })
}

// let newUser1 = {name: "Jack", age: 21};
let newUser2 = {name: "Maria", age: 27};
// validateAge(newUser1).then(displayUsers).catch(function(error) {console.log(error)});
validateAge(newUser2).then(displayUsers).catch(function(error) {console.log(error)});

