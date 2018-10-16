function a(){
    return 35;
}
console.log(a())

//Prediction:a=35
//Output: 35

function a(){
    return 4;
}
console.log(a()+a());
//Prediction:a=4+a=4
//Output:8


function a(b){
    return b;
}
console.log(a(2)+a(4));

//Prediction: a=2 +a=4
//Output: 6


function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));

//Prediction: b=3 , b=9
//Output: 3 , 9

function a(b){
        console.log(b);
        return b*3;
    }
console.log(a(3));
//Prediction:
//Output:


function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//Prediction:
//Output:


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//Prediction:
//Output:


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Prediction:
//Output:


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//Prediction:
//Output:


function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//Prediction:
//Output:


function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//Prediction:
//Output:


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//Prediction:
//Output:


var z = 10;

function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//Prediction:
//Output:


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//Prediction:
//Output:



var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// //Prediction:
// //Output:
        