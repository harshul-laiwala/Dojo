function swapping() {
    var MyName = Harshul;
    var MyNumber = 42;
    var temp = MyName;
    MyName = MyNumber;
    MyNumber = temp;
    return MyName,MyName;
}

function PrintNumbersUsingForLoop() {
    for (let i = -52; i <= 1066; i++) {
        console.log(i);
    }
    return;
}

function beCheerful() {
    var str = "good morning!";
    for (let i = 0; i < 98; i++) {
        console.log(str);
    }
    return;
}

function MultiplesOfThreeButNotAll() {
    for (let i = -300; i <= 0; ) {
        if (i==-3 || i==-6){
            i++
        }
        else if(i%3 == 0){
            console.log(i);
        }
        i++;
    }
    return;
}

function IntegersWithWhile(params) {
    var x = 2000;
    while (x <= 5280) {
        console.log(x);
        x++;
    }
}

function Birthday(month, day) {
    var BirthMonth=03;
    var BirthDay =25;
    if (BirthMonth === month && BirthDay===day) {

        console.log("How Did you Know?");
    }
    else{
        console.log("Just anoither day ...");
    }
    return;
}

function LeapYear(year) {
    if(year%4==0 || year%100==0 || year%400==0){
        console.log("The year", year, "is a Leap Year");
    }
    else
    console.log("The year",year, "is Not a Leap Year");
    return;
}

function PrintAndCount() {
    var count =0;
    for (let i = 512; i < 4096; i++) {
        if (i%5==0) {
            console.log(i);
            count=count=1;
        }
        
    }
    console.log("The total count was",count);
    return;
}

function MultipleofSix() {
    var x= 0;
    while (x<=6000) {
        if (x%6 ==0) {
            console.log(x);
            x++;
        }
        
    }
    return;
}

function CountingDojoWway() {

    for (let i = 1; i <= 100; i++) {
        if (i%5==0) {
            console.log("Coding");
        }
        if (i%10==0) {
            Console.log("Dojo");
        }
    }
    return;
}

function WhatDoYouKnow(incoming) {
    console.log(incoming);
}

function Sucker() {
    var sum=0;
    for (let i = -300000; i <= 300000; i++) {
        if (i%2 != 0) {
            sum = sum+i;
        }
    }
    
}
function CountingByFours(){
    var x = 2016;
    while (x>=0) {
        console.log(x);
        x=x-4;
    }

}

function FlexibleCountdown(lowNum,highNum,mult){
    for (let i = highNum; i >=lowNum ;  i--){
        if(i%mult == 0){
            console.log(i/n);
        }
    }
}
                        
function FinalCountdown(param1,param2,param3,param4){
    if (param2 < param3) {
        for(let i=param2 ; i <= param3 ; i++){
            if(i%param1 == 0 ){
                if(i!=param4){
                    console.log(i);
                }
                if(i==param4){i++;}
            }
        }
    }
    if(param3 < param2){
        for(let i=param3; i <= param2; i++){
            if(i%param1 == 0){
                if(i==param4){i++;}
                    console.log(i);
                }
            }
    }
    
}

function Countdown(num){
    var arr = [];
    for (let i = num; i <= 0; i--) {
        arr.push(i);
    }
    console.log("the array length is: %s", arr.length);
    return arr;
}

function PrintAndReturn(input_arr) {
    var arr = input_arr;
    console.log("First Value of array is %s,", arr[0])
    return arr[1];
}

function FirstPLusLength(arr) {
    var x = arr;
    return (x[0]+ x.length());
}

function ValuesGreaterThanSecond() {
    var arr = [1,3,5,7,9,13]
    var count=0;
    for (let i = 0; i < array.length; i++) {
        if(arr[i]>arr[i+1]);
        count= count+1;
    }
    return count;
}

function ValuesGreaterThanSecondGenralized(arrparam) {
    var arr = arrparam;
    var count=0;
    if (arr.length ==1){
        console.log("array has only 1 element")
    }
    for (let i = 0; i < array.length; i++) {
        if(arr[i]>arr[i+1]);
        count= count+1;
    }
    return count;
}

function ThisLengthThatValue(param1, param2){
    var x =param1;
    var y= param2;
    var arr =[];
    if(x==y){
        console.log("Jinx!!");
    }
    for (let i = 0; i < x; i++) {
        array[i].push(y);
    }
    return arr;
}

function FitTheFirstValue(arr){
    var x = arr;
    if(x[0]==x.length){
        console.log("Just Right !!");
    }
    if(x[0]>xlength){
        console.log("Too Big !!");
    }else
        console.log("Too Small  !!");
}
function FarenheitToCelisius(fdegrees){
    var farenheitdegrees = fdegrees;
    var celsiusdegrees = 0;
    celsiusdegrees =  [(farenheitdegrees -32)] * (5/9);
    return celsiusdegrees;
}
function CelsiusToFarenheit(cdegrees){
    var farenheitdegrees = 0;
    var celsiusdegrees = cdegrees;
    farenheitdegrees =  [(9/5) *cdegrees] + 32;
    return farenheitdegrees;
}

function CeliusToFarenheitMatch(){
    var celius = 200;
    var farenheit=0;
    for (i=celius i<=0;i--){
        farenheit = convertOperation(i);
        if (farenheit == i){
            console.log("The Degrees match at %s", farenheit);
        }
    }
    function convertOperation(cdeg){
        var value= 0 ;
        value =[(9/5) *cdeg] + 32;
        return value;
    }
}

function MakeItBig(arr) {
    var array = arr;
    for(i=0;i<array.length; i++){
        if(array[i] < 0){
            array[i] = "big"
        }
        return array
    }
}
function PrintLowPrintHigh(arr) {
    var array=arr;
    var max=0;
    var lowest=array[0];
    for(i=0 i<array.length,i++){
        if(a[i]>max){
            max = a[i];
        }
        if(a[i]<low){
            lowest = a[i];
        }
    }
    console.log(lowest);
    return max;
}
function PrintOneReturnAnother(arr){
    var array=arr;
    console.log(array[array.length -2]);
    for(i=0;i<array.length;i++){
        if(a[i]%2 !=0){
            return a[i];
        }
    }
}
function DoubleVision(arr){
    var array = arr;
    var newarray;
    for(i=0;i<array.length ; i++){
        newarray[i]= 2*array[i];
    }
    return newarray;
}

function CountPositives(arr){
    var array = arr;
    var positivecount=0;
    for(i=0;i<array.length ; i++){
        if(array[i]>0){
            positivecount = positivecount+1;
        }
    }
    array[array.length -1] = positivecount;
    return array;
}
function EvenAndOdd(paramArray){
    var arr=paramArray;
    for(i=0;i<arr.length ; i++){
        if(arr[i]%2 == 0 && arr[i+1] %2 == 0  && arr[i+2]%2 ==0 ){
            Console.log("Even More So !");
        }
        if(arr[i]%2 != 0 && arr[i+1] %2 != 0  && arr[i+2]%2 !=0 ){
            Console.log("That's Odd !");
        }
    }
}

function IncrementTheSeconds(paramArr){
    var arr = paramArray;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2 != 0){
            arr[i] = arr[i]+1;
        }
        console.log(arr[i]);
    }
}
function AddSevenToMost(inputArr){
    var arr = inputArr;
    var newArray;
    for(i=1;i<arr.length; i++){
        newarray[i] = arr[i] +7;
    }
    return newArray;
}

function ReverseArray(inputArr){
    var arr = inputArr;
    var reverseArray;
    for(i=arr.length-1; i<=0; i++){
        reverseArray.push(arr[i]);
    }
    return reverseArray;
}

function NegativeOutlook(inputArr) {
    var arr = inputArr;
    var newArr;
    for(i=0 ; i<arr.length; i++){
        if(arr[i]<0){
            newArr[i] = (arr[i] * -1); 
        }
        newArr[i] = arr[i];
    }
    return newArr;
}

function AlwaysHungry(inputArr){
    var arr = inputArr;
    var foodcount = 0;
    for(i=0 ; i<arr.length; i++ ){
        if(arr[i] == "food"){
            console.log("yummy");
            foodcount = foodcount +1;
        }
    }
    if(foodcount == 0){
        console.log("I'm Hungry !")
    }
}

function SwapToCenter(inputArr){
    var arr = inputArr;
    var temp;
    temp = arr[arr.length -1];
    arr[arr.length -1] =  arr[0];
    arr[0] = temp;
    temp = arr[arr.length-4];
    arr[arr.length-4] =  arr[3];
    arr[3] = temp;
}

function ScaleArray(inputArr , num){
    var arr = inputArr;
    var multiplevalue = num;
    for(i=0 ; i<arr.length ; i++ ){
        arr[i] = arr[i] * multiplevalue;
    }
    return arr;
}