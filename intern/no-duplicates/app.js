var input = "bookkeeper larry";

function noDupes (str){
// for(let i = 0; i < str.length; i++){
//     if(str[i] === str[i]){
//         str.splice(str[i])
//     }
// }
    return Array.from(new Set(str.split(''))).join('')
}

console.log(noDupes(input))

