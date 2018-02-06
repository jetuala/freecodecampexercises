function mutation(arr) {
  var splitArr = arr[1].toLowerCase().split('');
  var lowerArr = arr[0].toLowerCase();
  for (var i = 0; i < splitArr.length; i++) {
    if (lowerArr.indexOf(splitArr[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
