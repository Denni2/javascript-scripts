function reverseString(str) {
 var arr = str.split("");
 var new_arr = arr.reverse();
 str = new_arr.join("");
  
 return str;
  
}

reverseString("hello");