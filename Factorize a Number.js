function factorialize(num) {
  var x = num;
  var y = num-1;
  if (x !== 0){
    while (y >= 1){
    num = (x * y);
    x = num;
    y -= 1;
  }
  }
  else {
    num = 1;
  }
  
  
  return num;
}

factorialize(5);