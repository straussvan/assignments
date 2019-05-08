const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0

function myFunc(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] === "computer"){
            count++
        }
    }
    return count
}

console.log(myFunc(officeItems))


let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  function madMax(mm){
     
      for (i = 0; i < mm.length; i++){
        if(mm[i].age >= 18){
            if(mm[i].gender === "female"){
                console.log(mm[i].name + ", she is old enough to see Mad Max")
            }
            else {
                console.log(mm[i].name + ", he is old enough to see Mad Max")
            }
        } else if (mm[i].gender === 'male') {
            console.log(mm[i].name + ", he is not old enough to see Mad Max")
        } else {
            console.log(mm[i].name + ", she is not old enough to see Mad Max")
        }

    }
  }
madMax(peopleWhoWantToSeeMadMaxFuryRoad)