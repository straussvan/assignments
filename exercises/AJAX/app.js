var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data.objects[0].pokemon)
        let pokemon = data.objects[0].pokemon
        for(let i = 0; i < pokemon.length; i++){

            document.getElementById("demo1").innerHTML += `<li>${pokemon[i].name}</li>`
            console.log(pokemon[i].name)
        }
    }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

let name = 'dog'
name = 'cat'
console.log(name)