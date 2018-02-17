
function rot13(str) { // LBH QVQ VG!
  var newStr = str.split('');
  var codeStr = [];

  newStr.forEach(function(x) {
    var strEval = x.charCodeAt();
    if (strEval >= 78 && strEval <= 90) {
      strEval -= 13;
    } else if (strEval >= 64 && strEval <= 77) {
      strEval += 13;
    }
    codeStr.push(String.fromCharCode(strEval));
  });
  codeStr = codeStr.join('');
  return codeStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
