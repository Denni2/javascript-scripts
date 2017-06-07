function truncateString(str, num) {
  if (num < str.length && num > 3){
    return str.slice(0, num - 3) + ("...");
  }
  else if (num <= 3) {
    return str.slice(0, num) + ("...");
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);