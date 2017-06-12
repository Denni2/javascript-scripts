function destroyer(arr) { 
  var arrs = [].slice.call(arguments);
  arrs.splice(0, 1);
  return arr.filter(function(element){
    return (arrs.indexOf(element) === -1);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);