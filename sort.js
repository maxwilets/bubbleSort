Array.count = function () {
    return this.length;
   };
   function bubble_sort (unsortedArr) {
    var length = Array.count (unsortedArr);
    
    for (var x = 0; x < unsortedArr.length; x++){
     for ( var y = unsortedArr.length - 1; y > x; y--){
      if (unsortedArr[y] < unsortedArr[y-1]){
       var z = unsortedArr[y];
       unsortedArr[y] = unsortedArr[y-1];
       unsortedArr[y-1] = z;
      }
     }
    }
    return unsortedArr; 
   };
   var output = bubble_sort(unsortedArr);
   console.log (output);