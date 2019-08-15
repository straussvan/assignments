import React from "react"
import Color from "./Color"

const ColorContainer = () => {
    const colorInfo =[
    {
       backgroundColor: "Light Blue",
       title: "Air Nation",
       subtitle: "Air",
       info: "Aang"
    },
    {
        backgroundColor: "Red",
        title: "Fire Nation",
        subtitle: "Fire",
        info: "Zuko"
     },
     {
        backgroundColor: "Grey",
        title: "Earth Nation",
        subtitle: "Earth",
        info: "Toph"
     },
     {
        backgroundColor: "Blue",
        title: "Water Tribe",
        subtitle: "Water",
        info: "Katara"
     },
     {
        backgroundColor: "Green",
        title: "Earthling",
        subtitle: "Strength",
        info: "Warrior"
     }

]

const mappedColorContainer = colorInfo.map((eachItem) => {
    return <eachItem backgroundColor = {eachItem.backgroundColor} title = {eachItem.title} subtile = {eachItem.subtitle} info = {eachItem.info} />
})

return(
    <>
        {}
    </>
)


}

export default ColorContainer
