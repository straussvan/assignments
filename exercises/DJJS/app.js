document.getElementById("blue").addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue"
})

document.getElementById("blue").addEventListener("mousedown", function(){
    this.style.backgroundColor = "red"
})

document.getElementById("blue").addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
})

document.getElementById("blue").addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"
})
 window.addEventListener("scroll", function(){
    document.getElementById("blue").style.backgroundColor = "orange"
 })