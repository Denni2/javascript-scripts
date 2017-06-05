function findLongestWord(str) {
  var arr = str.split(" ");
  var val  = 1;
  for (x = 0; x < arr.length; x+=1){
    if(arr[x].length > val){
      val = arr[x].length;
    }        
  }
  return val;
}

findLongestWord("The quick brown fox jumped over the lazy dog");