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
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//Prediction:b=15, 
//Output: 4 


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//Prediction:b=10, c=3 ; b=3, c=10
//Output: 30, 30


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Prediction:b=3
//Output:0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//Prediction:0,2,4,8
//Output: 0,2,4,8


function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//Prediction:b=0,c=10 ,i=0;1;2;3;4;5;6;7;8;9;10
//Output:0,1,2,3,4,5,7,8,9,0,1,2,3,4,5,7,8,9,0


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}
//Prediction:
//Output: no output since function is never called 


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//Prediction:
//Output: no output since function is never called 


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//Prediction:z=10
//Output: 10


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//Prediction: z=10 ; z=15
//Output: 15,10



var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// //Prediction: z=10; z=15
// //Output: 15, 15
        