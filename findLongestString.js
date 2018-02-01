
function findLongestWord(str) {
  var newArr = [];
  var newArr2 = [];
  newArr = str.split(' ');
  newArr = newArr.forEach(function(arr){newArr2.push(arr.length);});
  newArr2.sort(function(a, b){
    return b - a;
  });
  return newArr2[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
