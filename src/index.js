module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var a = arr[0];
  var b = arr[4];
  var c = arr[8];
  var sign1 = arr[3];
  var sign2 = arr[7];
    
  if (sign1 == '-'){
      b = -b;
  } else { b = b;}
    
  if (sign2 == '-'){
      c = -c;
  } else { c = c;}
    
  var d = Math.pow(b, 2) - 4 * a * c;
  var arr = [];
  if (d > 0){
      arr[0] = Math.round((- b + Math.sqrt(d))/(2 * a));
      arr[1] = Math.round((-b - Math.sqrt(d))/(2 * a));
  } else
  if (d == 0) {
      arr[0] = Math.round(-b/(2 * a));
  }
  if (arr[0] > arr[1]){
      var temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
  }
  return arr;
}
