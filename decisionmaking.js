//Leap year checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


//Weather clothing adviser
function getRecommendation(temperature, isRaining) {
    if (temperature < 10) {
        if (isRaining) {
            return "It's cold and raining. You should wear a warm coat, hat, scarf, and raincoat.";
        } else {
            return "It's cold but not raining. You should wear a warm coat, hat, and scarf.";
        }
    } else if (temperature >= 10 && temperature < 20) {
        if (isRaining) {
            return "It's cool and raining. You should wear a jacket and take an umbrella.";
        } else {
            return "It's cool but not raining. You should wear a light jacket.";
        }
    } else {
        if (isRaining) {
            return "It's warm and raining. You should wear a light jacket or hoodie and take an umbrella.";
        } else {
            return "It's warm and not raining. You should wear comfortable clothes.";
        }
    }
}

// Example usage:
let temperature = parseFloat(prompt("What is the current temperature in Celsius?"));
let isRaining = confirm("Is it raining? (OK for Yes, Cancel for No)");

let recommendation = getRecommendation(temperature, isRaining);
console.log(recommendation);
