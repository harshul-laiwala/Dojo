function GreaterThanValue(x,y){
    var count=0;
    for(i=0;i<x.length;i++){
        if(x[i]>y){
            count+=1;
            console.log(x[i]);
        }
    }
    console.log("total number of values greater than " + y + " are " + count);
}
GreaterThanValue([1,2,3,4],1);

function MaxMinAvgValues(x){
    var maxValue=0;
    var minValue=0;
    var avgValue=0;
    var sum=0;
    for(i=0;i<=x.length;i++){
        if(x[i]>maxValue){
            maxValue=x[i];
        }
        if(x[i]<minValue){
            minValue=x[i];
        }
        sum+=x[i];   
    }
    avgValue=sum/x.length;
    console.log("The maximum value in the array is " +maxValue);
    console.log("The minimum value in the array is "+minValue);
    console.log("The average of the array is "+avgValue);
    console.log("The sum of the array is "+sum);
}
MaxMinAvgValues([1,2,3,4]);

function replaceNegatives(x){
    var newarr=[];
    for(i=0;i<x.length;i++){
        if(x[i]<0){
            newarr[i]="Dojo";
        }else newarr[i]=x[i];
    }
    console.log(newarr);
}
replaceNegatives([1,-1,-2]);

function removeVals(arr,startindex,endindex){
    arr.splice(startindex,(endindex-startindex));
    console.log(arr);
}
removeVals([20,30,40,50,60,70],2,3);
