module.exports = {
findMinMax: function(myArray) {


var min = myArray[0];
var max = myArray[0];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
  
  if (myArray[i] <= min) {min = myArray[i];}
  if (myArray[i] >= max) {max = myArray[i];}
  total += myArray[i]
}
if (min == max){
var va =[min];
}
else{
var va=[min,max];
}
return va;
},
}
