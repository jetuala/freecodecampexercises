function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var newArr = arr;
  newArr.push(num);
  newArr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([3, 10, 5], 3);
