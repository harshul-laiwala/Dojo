//Challenge 1 
function resetNegatives(x){
    for(i=0;i<x.length;i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    console.log(x);
}
resetNegatives( [1,2,-1, -3]);

//Challenge 2
function moveForward(x){
    for(i=0;i<x.length;i++){
        x[i] = x[i+1];
    }
    x[x.length-1]=0;
    console.log(x);
}
moveForward([1,2,3,4]);
//Challenge 3
function returnReversed(x){
    reverseArr=[];
    counter =0;
    for(i=x.length-1;i>=0;i--){
        reverseArr[counter] = x[i];
        counter++;
    }
    console.log(reverseArr);
}
returnReversed([1,2,3,4]);
//Challenge 4
function repeatTwice(arr){
    newArr=[];
    for(i=0;i<arr.length;i++){
        for(j=0;j<2;j++){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
repeatTwice([4,"Ulysses",42,false]);