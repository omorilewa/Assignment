
module.exports = {
findMinMax: function findMinMax(array) {

  var va =[];
  
  for (var i = 0; i < array.length; i++) {
      var val1 =array[0];
      var val2 =1;
      
      
      if (array[i] < val1) {
        val1 = array[i];
        va[0] = val1;
      
    } else{
      va[0] = val1
    }if (array[i] > val2) {
       
        val2 = array[i];
        va[1] = val2;
      }
    }
   

  return va;
},

}