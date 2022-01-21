/* Write a function in JS to check if a given year is a leap year or no*/

function LeapYearChecker(year) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
  // in case needed this function in other code
}
var y = prompt("Choose a Year to check if it is a Leap Year");
var answer1 = LeapYearChecker(y);
document.getElementById("output1").innerHTML =
  "Is the year " + y + " a Leap year?: " + answer1;

/*Write a function that calculates BMI given height (cm) and weight (kg)*/

function BMI_Calculator(weight, height) {
  var BMI_answer = weight / height ** 2;
  return BMI_answer;
}
var w = prompt("Input your weight(Kg) to calculate your BMI");
var h = prompt("Input your height(m) to calculate your BMI");
var answer2 = BMI_Calculator(w, h);
document.getElementById("output2").innerHTML = "Your BMI is: " + answer2;

/*Given an array where elements are repeated at least twice, there is only one element that is not repeated. 
Get the non-repeated element (optimized way)*/
function CountOccurences(arr) {
  var visited = [];
  var occurences_dict = {};
  for (var i = 0; i < arr.length; i++) {
    if (visited.includes(arr[i]) == false) {
      visited.push(arr[i]);
      occurences_dict[arr[i]] = 1;
    } else {
      occurences_dict[arr[i]] += 1;
    }
  }
  return occurences_dict;
}
function FindTheNonRepeated(array) {
  var repeated_dict = CountOccurences(array);
  for (let [key, value] of Object.entries(repeated_dict)) {
    if (value === 1) {
      return key;
    }
  }
}

var list1 = [1, 1, 2, 2, 4, 4, 3, 5, 5, 6, 6];
console.log(list1);
var non_repeated_element = FindTheNonRepeated(list1);
console.log("The non-repeated element of list1 is: " + non_repeated_element);

/*Get the 2nd maximum in an array of integers (optimized way)*/

function FindSecondMax(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array[array.length - 2];
}
var list2 = [8, 2, 7, 9, 55, 87, 66, 12, 34];
console.log(list2);
second_max = FindSecondMax(list2);
console.log("The second max in list2 is: " + second_max);
