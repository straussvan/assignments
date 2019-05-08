let form = document.mariopestcontrol



form.addEventListener("submit", function(event){
    event.preventDefault()

    let firstInput = form.baddie1.value 

    let goombaValue = 5

    let gProduct = firstInput * goombaValue 

    
    
    let secondInput = form.baddie2.value
    
    let bombombValue = 7
    
    let bProduct = secondInput * bombombValue
    
    
    
    let thirdInput = form.baddie3.value
    
    let cheepCheepValue = 11 
    
    let ccProduct = thirdInput * cheepCheepValue

    let total = gProduct + bProduct + ccProduct
    
    
     
    const finalTotal = document.createTextNode(`Mario earned $${total} !!!`);
    document.getElementById("finalmoney").appendChild(finalTotal);
    
    
})   


