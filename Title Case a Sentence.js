function titleCase(str) {
  var arr = str.split(" ");
  var arrs, val = 1;
  var name,names,fulls;
  for (x = 0; x < arr.length; x+=1){
    name = arr[x];
    names = name.substring(0, 1).toUpperCase();
    fulls = name.substring(1).toLowerCase();
    name = names + fulls;
    arr[x] = name;
    
  }
  arrs = arr.join(" ");
  return arrs;
}

titleCase("I'm a little tea pot");