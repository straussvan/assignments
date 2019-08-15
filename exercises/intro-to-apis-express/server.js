const express= require("express")
const app = express()
const data = require("./database") 

app.use(express.json())

app.get("/bounty",(request, response) => {
    response.send(data)
})

app.get("/bounty/:bountyID", (request, response) => {
    console.log(request.params.bountyID)
    const results = data.filter(bounty => bounty._id === request.params.ID)
    response.send(results)

})

app.post("/boiunty",(request, response) => {
    const newBounty = request.body
    data.push(newBounty)
    response.send(newBounty)

})

app.delete("/bounty/:bountyID",(request, response) => {
    console.log(request.params)
    console.log(data)
    const results = data.filter(BountyID =>BountyID._id !==request.params.BountyID)
    response.send("it was deleted")
}
})
