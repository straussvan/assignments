let shopper = {
    name: "Atilla",
    lastName: "Ujvari",
    age: 32,
    fullName: function(){
        return this.name + " " + this.lastName;
    },
    groceryCart: []
}
    
console.log(shopper.fullName())

function food(){
    shopper.groceryCart.push("corn dogs")

}
food()
console.log(shopper.groceryCart[0])