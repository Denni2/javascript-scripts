function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();
  var strs = str.split('').reverse().join('');
  var check = str.length;
  for (x = 1; x <= check; x++){
    if (str[x] !== strs[x]){
      return false;
    }
  }
  return true;
} 

palindrome("eye");