
// const ownerName = "John"
// let age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             let name = "fluffy"
//         } else {
//             let name = "spot"
//         }
//          pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// runForLoop()

// const carrots = ["bright orange", "ripe", "rotten"]

// // function mapVegetables(arr) {
// //     return arr.map(function(carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }


// const mapVegetables = (arr) => arr.map((carrot) => [{type:"carrot", name: carrot}])

// console.log(mapVegetables(carrots))
    

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}

console.log(filterForFriendly())
// const filterForFriendly = (arr) => people.filter(() => {people.friendly === true})
// //     return arr.filter(function(person) {
// //         return person.friendly
// //     })
// // }