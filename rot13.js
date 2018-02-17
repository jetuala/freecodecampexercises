
function rot13(str) { // LBH QVQ VG!
  var newStr = str.split('');
  var codeStr = [];

  newStr.forEach(function(x) {
    var strEval = x.charCodeAt();
    if (strEval !== 32) {
      strEval -= 13;
      if (strEval < 65) {
        strEval += 26;
      }
    }
    codeStr.push(String.fromCharCode(strEval));
  });
  codeStr = codeStr.join('');
  return codeStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
