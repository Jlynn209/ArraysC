var exampleA = [3.14, "food", "pie", true, "food"];
var exampleB = [4, 1, 5, 7, 2];

function alwaysHungry(arr) {
  var counter = 0;

  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      counter++;
    }
  }
  if (counter == 0) {
    console.log("I'm hungry");
  }
}

alwaysHungry(exampleA);
alwaysHungry(exampleB);

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
  var sum = 0;
  // calculate the average
  var count = 0;
  // count how many values are greated than the average
  for (var i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
    count++;
  }
  sum = sum / count;
  count = 0;

  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > sum) {
      count++;
    }
  }

  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
  for (var i = arr.length - 1; i > arr.length / 2; ) {
    for (var j = 0; j <= arr.length / 2; ) {
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i--;
      j++;
    }
  }
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];

  //   ogValue is the original length of the array
  var ogValue = fibArr.length;
  //   left Value is the original left index of the last index
  var leftValue = fibArr.length - 2;

  var counter = 1;

  //   assign the right value to the last index in the array.
  //   run through the loop until the counter *1* is less than or equal to n minus ogValue length *8 = 10 - 2*
  for (var rightValue = fibArr.length - 1; counter <= n - ogValue; counter++) {
    //   add the left and right value and add it to the array.
    fibArr.push(fibArr[leftValue] + fibArr[rightValue]);
    // reassign the left value to the left of the last index
    leftValue = fibArr.length - 2;
    // reassign the right value to the last index
    rightValue = fibArr.length - 1;
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
