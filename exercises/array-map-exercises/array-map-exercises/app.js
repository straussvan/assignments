import React from "react"
import ReactDOM from "react-dom"

const doubleNumbers = (arr) => arr.map((arr) => arr *2)
    
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//   function stringItUp(arr){
//     return arr.map(function(item){return item.toString()})
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//   function capitalizeNames(arr){
//     return arr.map(function(item){return item[0].toUpperCase() + item.slice(1).toLowerCase()})
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//   function namesOnly(arr){
//     return arr.map(function(name){return name.name.toString()})
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr){
//     return arr.map(function(item){return item.age >= 18 ? `${item.name} can go to the Matrix" ` : `${item.name} "is under age!!"`  })
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie can go to The Matrix", 
//   // "Eric Jones is under age!!", 
//   // "Paris Hilton is under age!!", 
//   // "Kayne West is under age!!", 
//   // "Bob Ziroll can go to The Matrix"]


  function readyToPutInTheDOM(arr){
  return arr.map(function(item){return <h1>{item.name}</h1> , <h2>{item.age}</h2> })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]