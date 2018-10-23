// Objectives
// Practice iterating through an array of objects/dictionaries.
// Imagine that you are given an array of objects.  For example,
// var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
// How would you print/log John's age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  Your output should look something like this
// Michael - 37
// John - 30
// David - 27

function PlayingWithObjects(){
    var users = [
        {name: "Michael", age:37}, 
        {name: "John", age:30}, 
        {name: "David", age:27}
    ]; 

    for (var userindex in users ){
        if (users[userindex].name == "John"){
            console.log("John's Age is "+users[userindex].age)
        }
    }
    console.log("Name of the first Object is: " +users[0].name);
    
    for(var userindex in users){
        console.log(users[userindex].name+ " - " + users[userindex].age );
    }
}
PlayingWithObjects();
