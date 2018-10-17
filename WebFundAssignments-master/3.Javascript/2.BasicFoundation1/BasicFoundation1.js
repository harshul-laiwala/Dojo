function Get1to255(){
    for(i=1;1<=255;i++){
        console.log(i);
    }
}
Get1to255();

function GetEven1000(){
    sum=0;
    for(i=0;i<=1000;i++){
        if(i%2==0){
            sum += i;
        }
    }
    return sum;
}
GetEven1000()

function SumOdd5000(){
    sum=0;
    for(i=0;i<=1000;i++){
        if(i%2!=0){
            sum += i;
        }
    }
    return sum;
}
SumOdd5000();

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function IterateAnArray(arr){
    var input_arr = arr;
    sum=0;
    for(i=0;i<input_arr.length; i++){
        sum += input_arr[i];
    }
    return sum;
}
IterateAnArray([1,-3,5]);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function FindMax(x){
    arr=x;
    maxValue=0;
    for(i=0;i<arr.length;i++){
        if(x[i]>maxValue){
            maxValue=x[i];
        }
    }
    return maxValue;
}
console.log(FindMax([1,3,-5,-9,10]));


// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function FindAverage(x){
    arr=x;
    sum=0;
    avg=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    avg=sum/arr.length;
    return avg;
}
console.log(FindAverage([1,2,3]));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function ArrayOdd(){
    out_arry=[];
    for(i=0;i<50;i++){
        if(i%2!=0){
            out_arry.push(i);
        }
    }
    return out_arry
}
console.log(ArrayOdd());
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function GreaterThanY(x,y){
    NumofValues =0;
    for(i=0;i<x.length;i++){
        if(x[i]>y){
            NumofValues++;
        }
    }
    return NumofValues;
}
console.log(GreaterThanY([1,3,5,7,9,10],5));

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function SquaresX(x){
    for(i=0;i<x.length;i++){
        x[i]=x[i]*x[i];
    }
    return x;
}
console.log(SquaresX([2,3,4]));

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function Negatives(x){
    for(i=0;i<x.length;i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    return x;

}
console.log(Negatives([1,5,10,-2]));

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function MaxMinAvg(x){
    var sum,max,min,avg=0;
    var y=[];
    for(i=0;i<x.length;i++){
        if(x[i]<min){
            min=x[i];
        }
        if(x[i]>max){
            max=x[i]
        }
        sum+=x[i];
    }
    avg=sum/x.length;
    y.push(max);
    y.push(min);
    y.push(avg);
    return y;
}
console.log(MaxMinAvg([1,5,10,-2]));

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function SwapValues(x){
    var temp=0;
    temp=x[0];
    x[0]=x[x.length-1];
    x[x.length-1]=temp;
    return x;
}
console.log(SwapValues([1,5,10,-2]))

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function NumberToString(x){
    for(i=0;i<x.length;i++){
        if(x[i]<0){
            x[i]="Dojo";
        }
    }
    return x;
}
console.log(NumberToString([-1,-3,2]));