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
