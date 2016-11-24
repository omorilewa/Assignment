
module.exports = {
aritGeo: function aritGeo(arr){
    if(arr === null || !Array.isArray(arr)){
        return "empty arrar";
    }

    var length = arr.length;
    if(length === 0){
        return 0;
    }
 
    var arithCount = 0,
        geoCount = 0,
        d = arr[1] - arr[0],
        q = arr[1] / arr[0];
    for(var i = length - 1; i > 0; i--){
        if((arr[i] - arr[i-1]) === d){
            arithCount++;
        }
        if((arr[i] / arr[i-1]) === q){
            geoCount++;
        }
    }

    if(arithCount === length - 1){
        return "Arithmetic";
    }else if (geoCount === length - 1){
        return "Geometric";
    }else{
        return -1;
    }
}


}