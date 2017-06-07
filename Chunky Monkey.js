function chunkArrayInGroups(arr, size) {
  var arrs = [];
  var x = 0;
  
  while (x < arr.length){
    arrs.push(arr.slice(x, x + size));
    x += size;
  }
  return arrs;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);