let form = document.travelform

form.addEventListener("submit", function(e){
    e.preventDefault()
    let fName = form.fName.value
    let lName = form.lName.value
    let bday = form.bday.value
    let gender = form.gender.value

    const locations = form.location
    const locChoice = []
    for(let i = 0; i < locations.length; i++)
        if(locations[i].checked){
            locChoice.push(locations[i].value)
        }
    
     const diet = form.diet
     const dietChoice = []
     for(let i = 0; i < diet.length; i++)
        if(diet[i].checked){
            dietChoice.push(diet[i].value)
        }


    alert(`
        first name: ${fName}
        last name: ${lName}
        birthday: ${bday}
        destination: ${locChoice}
        diet: ${dietChoice}
    `)
})



