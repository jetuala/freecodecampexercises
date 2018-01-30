function titleCase(str) {
  var newArr = str.split(' ');
  newArr.forEach(function(str) {
	newStr = str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
  });
  newArr = newArr.join(' ');
  return newArr;
}

titleCase("I'm a little tea pot");
