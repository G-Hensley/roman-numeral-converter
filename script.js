let numInput = document.getElementById("number");
let output = document.getElementById("output");
let btn = document.getElementById("convert-btn");
const romanNums = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
}

let convertedNum = "";

function numValid(num) {
    if (num == "") {
        output.innerText = "Please enter a valid number."
        return false;
    } else if (num < 1) {
        output.innerText = "Please enter a number greater than or equal to 1.";
        return false;
    } else if (num > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999."
        return false;
    } else {
        return true;
    }
}

function convertNum(num) {
    convertedNum = "";
    let newNumber = Number(num);
    let lessThanValues = [];
 
    for (let item in romanNums) {
        if (romanNums[item] <= newNumber) {
            lessThanValues.push(item);
        }
    }

    while (newNumber != 0) {
        if (romanNums[lessThanValues[0]] > newNumber) {
            lessThanValues.shift();
        } else {
            newNumber -= romanNums[lessThanValues[0]];
            convertedNum += lessThanValues[0];
        }
    }

    output.innerText = convertedNum;
}

btn.addEventListener("click", () => {
    let newNum = numInput.value;

    let bool = numValid(newNum);
    if (bool) {
        convertNum(newNum);
    }
        
})

numInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        btn.classList.add("clicked-effect");
        btn.click();
        setTimeout(() => {
            btn.classList.remove("clicked-effect");
        }, 150);
    }
})