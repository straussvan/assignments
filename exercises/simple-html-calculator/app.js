let addition = document.addition

console.log(addition)



addition.addEventListener("submit", function(event){

    event.preventDefault()
    
    let add1 = addition.add1.value
    let add2 = addition.add2.value

    let sum = +add1 + +add2
    document.getElementById("showAdd").innerText = sum
})

let subtraction = document.subtraction

console.log(subtraction)

subtraction.addEventListener("submit", function(event1){
    event1.preventDefault()

    let sub1 = subtraction.sub1.value
    let sub2 = subtraction.sub2.value
console.log(sub1)
console.log(sub2)

    let difference = sub1 - sub2
    document.getElementById("showSubtract").innerText = difference
})

let multiplication = document.multiplication

multiplication.addEventListener("submit", function(event2){
    event2.preventDefault()

    let mult1 = multiplication.mult1.value
    let mult2 = multiplication.mult2.value

    let product = mult1 * mult2

    document.getElementById("showMultiply").innerText = product



})
