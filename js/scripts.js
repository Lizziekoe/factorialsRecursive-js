var factorial = function(number){

  var product = 1;
  var i = 1;

  while(i <= number) {
    product = i * product;
    i++;
  }
  return product;



 // OR YOU CAN DO THIS

  var product = 1;

  for(var i=1; i<=number; i++) {
    product = i * product;
  }
  return product;
};


 // OR YOU CAN DO THIS IF YOURE TRYNNA BE RECURSIVE

if(number > 1){
  return number * factorial(number-1);
} else{
  return 1;
}
