//Preliminaries//
function preLim(){
    if(5 > 3){
        return "is greater than";
    }

    
}
console.log(preLim())

function preLim2(){
    var cat = 3
    if(cat === 3){
        return 'is the length';
    }
    
}
console.log(preLim2())

function preLim3(){
    if ('cat' === 'dog'){
        return 'the same'
     } else {
         return "not the same"
     }
}
console.log(preLim3())

// Bronze Medal//
var person = {
    name: "Bobby",
    age: 12

}

function myFunction(){
if(person.age >= 18){
    return (person.name + " is allowed to go to the movie")
    } else { 
        return (person.name + " is not allowed to go to the movie ")
        
    }
}
console.log(myFunction())






