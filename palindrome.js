function palindrome(str) {
  // Good luck!
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  var newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').reverse().join('');
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");
