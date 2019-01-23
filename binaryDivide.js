function divide(num, den){ //30 , 5
   let high = num;
   let low = 0;
   let mid = num >> 1;
   let remainder = num - (mid * den);

   while(remainder < 0 || remainder >= den){
       if( remainder < 0){high = mid;}
       else{ low = mid;}

        mid = (high + low) >> 1;
        remainder = num - (mid * den);
        console.log("mid: " + mid);
        console.log("remainder " + remainder);
   }
   console.log("quo: " + mid + "remain: " + remainder);
}
