function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = [];
  if (howMany === 0) {
    return arr;
  } else {
    newArr = arr.splice(howMany, arr.length - 1);
    return newArr;
  }
}

slasher([1, 2, 3], 2);
