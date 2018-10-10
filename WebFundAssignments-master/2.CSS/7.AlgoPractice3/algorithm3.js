// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.
function printAverage(x){
    sum = 0;
    avg=0;
    for(i=0;i<x.length;i++){
        sum+=x[i];
    }
    avg=sum/(x.length);
    return avg;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5

 function returnOddArray(){
    var x=[];
    for(i=0;i<=255;i++){
        if(i%2!=0){
            x.push(i);
        }
    }
    return x;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]


 function squareValue(x){
     for(i=0;i<x.length;i++){
         x[i] = x[i]*x[i];
     }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]


