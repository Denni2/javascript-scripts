function largestOfFour(arr) {
  var arr_s = [];
  var val;
  for (x=0; x < arr.length; x+=1){
    val = 0;
    for (y=0; y < arr[x].length; y+=1){
      if (arr[x][y] > val){
        val = arr[x][y];
        
      }
    
  }
    arr_s.push(val);
}
  return arr_s;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);