let userInput = prompt("Enter a list of comma-separated froyo flavors:");
let flavorsArray = userInput.split(",");

let flavorFrequencies = {};

// for (let flavor of flavorsArray) {
//     flavorFrequencies[flavor] = (flavorFrequencies[flavor] || 0) + 1;
// }


for (let i = 0; i < flavorsArray.length; i++) {
    let flavor = flavorsArray[i];
    if (flavorFrequencies[flavor]) {
        flavorFrequencies[flavor]++;
    } else {
        flavorFrequencies[flavor] = 1;
    }
}

console.log(flavorFrequencies);



