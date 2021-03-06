function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3)
    throw 'Not enough integers';

  arrayOfInts.sort(function(a, b){return a - b;});

  if(arrayOfInts[0] * arrayOfInts[1] > //if negative product higher than positive
    arrayOfInts[arrayOfInts.length - 1] * arrayOfInts[arrayOfInts.length - 2]
    && arrayOfInts[arrayOfInts.length - 1] > 0){ //and top number is positive
      return arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[arrayOfInts.length- 1];
    }

  return arrayOfInts[arrayOfInts.length - 1] *
         arrayOfInts[arrayOfInts.length - 2] *
         arrayOfInts[arrayOfInts.length - 3]; //top three numbers
}
