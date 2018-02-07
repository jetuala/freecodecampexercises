function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isFalsy(obj) {
    return Boolean(obj);
  }
  return arr.filter(isFalsy);

}

bouncer([7, "ate", "", false, 9]);
