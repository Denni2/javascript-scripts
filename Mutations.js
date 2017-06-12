function mutation(arr) {
  var str_one = arr[0].toLowerCase();
  var str_two = arr[1].toLowerCase();
  for (var x = 0; x < str_two.length; x++){
    if (str_one.indexOf(str_two[x]) < 0){
      return false;
    }
    
  }
 return true;
  
}

mutation(["hello", "neo"]);