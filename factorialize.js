function factorialize(num) {
  for (var i = 1; num > 1; num--) {
    i = num * i;
  }
  return i;
}

factorialize(5);
