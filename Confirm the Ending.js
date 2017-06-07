function confirmEnding(str, target) {
  str.split(" ");
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");