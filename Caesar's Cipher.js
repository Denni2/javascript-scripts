
function rot13(str) {
  var x;
  var val, oval;
  var arr = str.split ("");
  var new_arr = [];
  for(x = 0; x < arr.length; x++){
    for(var y = 0; y < arr[x].length; y++){
      val = arr[x].charCodeAt(y);
      
      if (val >= 65 && val <= 90){
        if(val >= 65 && val <= 77){
          val+=13;          
        }
        else if(val >= 77 && val <= 90){
          val-=13;          
        }
        else{
        val +=0;
      }
        
      }
      
      oval = String.fromCharCode(val);
      new_arr.push(oval);
    }
  }
  arr = new_arr.join("");
  return arr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
