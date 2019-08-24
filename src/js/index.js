var oneDay = 24 * 60 * 60 * 1000;
// var i_DateInputs = document.getElementsByTagName("input");
// var label = document.getElementsByName("h3");

// i_DateInputs[0].valueAsDate = new Date(2019, 7, 21, 13);
// i_DateInputs[1].valueAsDate = new Date();

// console.log("One day's milliseconds is: " + oneDay);

function calculateDiff() {

    // Oct 10, 2020
    // Month is one less 
    var target = new Date(2020, 9, 10);
    var current = new Date();
    var diff = (target - current) / oneDay;

    // Remove decimal
    diff = Math.trunc(diff);
    
    return diff;
}

function displayDaysLeft() {
    // event.preventDefault();

    var msg = "";
    var daysLeft = calculateDiff();

    if (daysLeft > 0) {
        msg = daysLeft;
        if (daysLeft === 1) {
            msg += " Day until the Wedding!";
        } else {
            msg += " Days until the Wedding!";
        }
    } else if (daysLeft === 0) {
        msg = "🎉Today is the Day!🎉";
    } else {
        msg = "Hope you had a great time!"
    }

    document.getElementById("lblDaysLeft").innerHTML = msg;
}

displayDaysLeft();
// document.getElementById("cmdCalculate").addEventListener("click", displayDaysLeft);

