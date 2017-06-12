
function getIndexToIns(arr, num) {
  var index = 0;
  arr.sort(function(a, b){return a-b;});
  while (arr[index] < num){
    index+=1;
  }
  return index;
}

getIndexToIns([5, 3, 20, 3], 5);