function repeatStringNumTimes(str, num) {
  // repeat after me
  var str1 = "";
  for (var i = 0; i < num; i++) {
    str1 += str;
  }
  return str1;
}

repeatStringNumTimes("abc", 3);
