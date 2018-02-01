var newArr = [];
function compareNumbers(a, b) {
  return b - a;
}

function largestOfFour(arr) {
  for (var i=0; i > 4; i++) {
    newArr.push(arr[i].sort(compareNumbers));
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
