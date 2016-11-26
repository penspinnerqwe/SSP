var fibonacci = (function() {
  var memory = {};
 
  function f(n) {
    var val;
 
    if (n in memo)
      value = memomory[n];
    else 
        if (n === 0 || n === 1)
            val = n;
    else
        val = f(n - 1) + f(n - 2);
    memory[n] = value;
  
    return value;
}
 
  return f;
})();

function summ(number1){
  return function(number2) {
    return number1*number2;
  }
}
