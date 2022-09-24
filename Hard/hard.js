let tHeight = 9;
let tMass = 8;

let jHeight = 10;
let jMass = 45;

bmi1 = tMass / (tHeight * tHeight);

bmi2 = jMass / (jHeight * jHeight);

if (bmi1 > bmi2) {
  console.log("Is Tom's BMI higher than Jerry's? True");
} else {
  console.log("Is Tom's BMI hiher than Jerry's? Flase");
}
