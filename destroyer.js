function destroyer(arr) {
  // Remove all the values
  var arg = Array.from(arguments).slice(1);
  return arr.filter(function(a) {
    return !arg.includes(a);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
