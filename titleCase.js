<<<<<<< HEAD
function titleCase(str) {
  var newArr = str.split(' ');
  var newStr = [];
  newArr.forEach(function(str) {
    newStr.push(str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase());
  });
  newStr = newStr.join(' ');
  return newStr;
}

titleCase("I'm a little tea pot");
=======
function titleCase(str) {
  var newArr = str.split(' ');
  var newStr = [];
  newArr.forEach(function(str) {
    newStr.push(str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase());
  });
  newStr = newStr.join(' ');
  return newStr;
}

titleCase("I'm a little tea pot");
>>>>>>> 93f849a7c7529a0d9bc5a4901388b8d05fe3ef08
