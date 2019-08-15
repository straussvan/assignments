// function stringifyUrl(url, query) {
//     return `${url}?color=${query.color}&species=${query.species}`
// }

// const url = "http://localhost:8080/monkeys"
// const query = {
//     color: "black",
//     species: "howler"
// }

// stringifyUrl(url, query)

// console.log(stringifyUrl(url, query))

function stringifyUrl(url, query) {
    return `${url}?color=${query.color}&species=${query.species}`
}

const url = "http://localhost:8080/monkeys"
const query = {
    color: "black",
    species: "howler"
}

stringifyUrl(url, query)
// returns "http://localhost:8080/monkeys?color=black&species=howler"

console.log(stringifyUrl(url,query))