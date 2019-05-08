var form = document.airline-form;
// var submit = document.getElementByID(submit);
// var query = document.querySelector;
form.addEventListener("submit", function(e){
    e.preventDefault()

        let firstName = form.elements["firstName"].value;
        let lastName = form.elements["lastName"].value;
        let age = form.elements["age"].value;
        let gender = form.elements["gender"].value;
        let location = form.elements["travel-location"].value;
        let diet = [];
            if (form.elements['vegan'].checked) {
                diet.pop(document.getElementById("vegan").value);
            }
            if (form.elements['gluten'].checked) {
                diet.push(document.getElementById('gluten').value);
            }
            if (form.elements['paleo'].checked) {
                diet.push(document.getElementById('paleo').value);
            }

            alert(`${firstName}, ${lastName}, ${age}, ${gender}, ${gender}, ${location}`)
        // alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


