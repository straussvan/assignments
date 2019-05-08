const ask = require("readline-sync")

console.log("Welcome to Oakhaven! Do you wanna solve a mystery?")


let username = ask.question("What's your name?")
let slueth = new Player(username)


function Player (name){
    this.name = name;
    this.hp = 100;
    this.pockets = ["Scooby Snacks"];
    this.isAlive = true;
    this.hasSolved = false;
    this.attack = function(){
        return Math.floor(Math.random() * 10) +5
    }
    
}

const ghost = Ghost()

function Ghost(name, hp, num){
    this.name = name;
    this.hp = hp;
    this.attack = function(){
        return Math.floor(Math.random() * num) +3
    }
}

const benRavencroft = new Ghost ("Ben Ravencroft", 50, 40);
const sarahRavencroft = new Ghost ("Sarah Ravenecroft", 20, 80);
const pumpkin = new Ghost (" The Evil Pumpkins", 10, 5);
const turkey = new Ghost (" The Giant Turkey", 20, 2);

const ghosts = [benRavencroft, sarahRavencroft, pumpkin, turkey];

while(!slueth.hasSolved && slueth.isAlive ){
    let action = ask.keyIn(`${slueth.name}, do you wanna look for clue's?" [w],\n "Do we have any Scooby Snacks?!" [p],\n "I'm too spooked gang, let's get back to the Mystery Machine" [q]`, { limit: "wpq"})
    if(action === "w"){
        investigate()
    } else if( action === "p"){
        pockets()
    } else if( action === "q"){
        quit()
    console.log("Like Scoob! Like lets get outta here!")
    } 
    
}
function investigate(){
    let random = Math.floor(Math.random() * 4) +1;
    if(random < 4 ){
    console.log("Jinkies! I found a clue! ");
    } else {
        let phrase = aGhost()
    } 
}

function aGhost(){
    let ghostEncounter = ghosts[Math.floor(Math.random() * ghosts.length)];
    let action = ask.keyIn(`Zoinks!! It's ${ghostEncounter.name}, do you want to set a Booby Trap!? [b],
    
    "Or do you wanna run for The Mystery Machine" [r]`, {limit: "br"});
    if(action === "r"){
        toTheVan()
    } else { ( action === "b") 
        while(ghostEncounter.hp > 0 && slueth.hp > 0){
            aTrap(ghostEncounter)
            // return "Jeepers Gang! We did it!"
            console.log("Jeepers gang! We did it")
        }

    }   

}


function aTrap(aGhost){
    let randomTrap = Math.floor(Math.random() * 5) +1
    if(randomTrap === 1){
        console.log("You missed!")
    } else {
        aGhost.hp -= slueth.attack()
        slueth.hp -= aGhost.attack()
        console.log(`${aGhost.name} scared ${slueth.name}. \n ${slueth.name}'s courage is now ${slueth.hp}\n${aGhost.name}'s hp is now ${aGhost.hp}`)
    }
}

    

function pockets(){
    console.log (`Your pockets have ${slueth.pockets}`)
}


function toTheVan(){
    let randomVan = Math.floor(Math.random() * 2)
 if(randomVan === 1){
 console.log("Jeepers! You barely made it to the Mystery Machine!")
 } else {
    aTrap()
 }

}

function quit(){
    slueth.isAlive = false;

}








