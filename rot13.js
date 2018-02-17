
function rot13(str) { // LBH QVQ VG!
  var newStr = str.split('');
  var codeStr = [];

  var strEval = function(newStr) {

  };

  newStr.forEach(function(x) {
    codeStr.push(String.fromCharCode((x.charCodeAt() - 13)));
  });
  return codeStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
