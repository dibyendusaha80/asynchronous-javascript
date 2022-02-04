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

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post);
        });
    }, 1000);
}

function createPost(newPost, callback) {
    setTimeout(() => {
        posts.push(newPost);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);


function getName(callback) {
    setTimeout(() => {
        this.name = "John";
        console.log("Getting name");
        callback();
    }, 1000);
};
function getLastName(callback) {
    setTimeout(() => {
        this.lastname = "Rambo";
        console.log("Getting lastname");
        callback();
    }, 1000);
};
function getAge(callback) {
    setTimeout(() => {
        this.age = "30";
        console.log("Getting age");
        callback();
    }, 1000);
};
function getGender(callback) {
    setTimeout(() => {
        this.gender = "M";
        console.log("Getting gender");
        callback();
    }, 1000);
};
function showFullName() {
    console.log(this.name + " " + this.lastname + ", " + this.gender + ", " + this.age + " years old");
};
function getUser() {
    getName(function () {
        getLastName(function () {
            getAge(function () {
                getGender(function () {
                    showFullName();
                })
            });
        });
    });
};
getUser();


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
const users = [
    {id:1, name:'John', gender:'M', age:25},
    {id:2, name:'Maria', gender:'F', age:22},
    {id:3, name:'David', gender:'M', age:24}
];
function getUsers() {
    return new Promise((resolve, reject) => {
        users.forEach((user) => {
            console.log(user);
        });
        resolve();  
    })
}
function validateNewUser(newUser) {
    return new Promise((resolve, reject) => {
        if(newUser.name && newUser.gender && newUser.age > 18) {
            resolve(newUser);
        }
        else {
            reject("New user is not valid");
        }
    })
}
function addUser(newUser) {
    return new Promise((resolve, reject) => {
        let lastId = Math.max.apply(Math, users.map(function(user) { return user.id; }));
        newUser.id = lastId + 1;
        users.push(newUser);
        resolve();
    })
}
let newUser1 = {name:'Jack', gender:'M', age:28};
validateNewUser(newUser1)
    .then((data) => {
        return addUser(data);
    })
    .then(() => {
        return getUsers();
    })
    .then()
    .catch((error) => {
        console.log(error);
    })


//using async-await
let newUser2 = {name:'Jack', gender:'M', age:28};
async function run(user) {
    try {
        let validatedUser = await validateNewUser(user);
        await addUser(validatedUser);
        await getUsers();
    }
    catch(error) {
        console.log(error);
    }
}
run(newUser2);


//timer functions
function myFunction() {
    setTimeout(() => {
        console.log("Function completed");
    }, 2000);
}
console.log("Start");
myFunction();
console.log("End");

// program to display time every 1 seconds
function timer() {
    let dateTime = new Date();
    console.log(dateTime.toLocaleTimeString());
    setTimeout(timer, 1000);
}
timer();

function myTimer() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}
setInterval(myTimer, 1000);

{/* <html>
<head>
    <title> setInterval() method </title>
</head>
<body>
    <h3> This is an example of using the setInterval() method </h3>
    <p> Here, the text color changes on every 200 milliseconds. </p>
    <script>
        var var1 = setInterval(color, 200);
        function color() {
            var var2 = document.querySelector('p');
            console.log(var2)
            var2.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";
        }
    </script>
</body>
</html> */}


function timer1() {
    const date = new Date();
    console.log(date.toLocaleTimeString());

}
let id = setInterval(timer1, 1000);
setTimeout(() => {
    clearInterval(id);
}, 10000);


function myFunction() {
    console.log("function completed");
}
let id = setTimeout(myFunction, 2000);
clearTimeout(id);

{/* <html>
<body>
    <p>Click the button before 3 seconds to prevent the timeout to execute.</p>
    <h2 id="demo"></h2>
    <button onclick="myStopFunction()">Stop</button>
    <script>
        const myTimeout = setTimeout(showMsg, 3000);
        function showMsg() {
            document.getElementById("demo").innerHTML = "Timeout executed";
        }
        function myStopFunction() {
            clearTimeout(myTimeout);
        }
    </script>
</body>
</html> */}

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
validateAge(newUser2)
    .then(displayUsers)
    .catch(function(error) {console.log(error)});


function multiply(num1, num2) {
    if(num1 > 0 && num2 > 0) {
      return num1 * num2;
    } else {
      return "Error while multiplying";
    }
  };
  
  function getPromise(num1, num2) {
    return new Promise((resolve, reject) => {
      const result = multiply(num1, num2);
      if(typeof result === "number") {
        resolve(result);
      } else {
        reject(result)
      }
    });
  };
  
  getPromise(4, 5)
   .then(result => console.log(result)) // 16
   .catch(error => console.log(error));
  
  getPromise(-5, 3)
   .then(result => console.log(result))
   .catch(error => console.log(error)); // Error while multiplying