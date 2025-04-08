// function handleClick(event) {
//     event.target.innerHTML = "X"
// }


     var player = "X"
     var player2 = "O"
     var gameMove = true


function viewClick(event){
    var cell = event.target
    cell.innerHTML = player
    player = (player === "X") ? "O" : "X"

    if(document.getElementById("box1").innerHTML == "X" && document.getElementById("box2").innerHTML == "X" && document.getElementById("box3").innerHTML == "X" || document.getElementById("box4").innerHTML == "X" && document.getElementById("box5").innerHTML =="X" && document.getElementById("box6").innerHTML == "X" || document.getElementById("box7").innerHTML == "X" && document.getElementById("box8").innerHTML =="X" && document.getElementById("box9").innerHTML == "X" || document.getElementById("box1").innerHTML == "X" && document.getElementById("box4").innerHTML =="X" && document.getElementById("box7").innerHTML == "X" || document.getElementById("box2").innerHTML == "X" && document.getElementById("box5").innerHTML =="X" && document.getElementById("box8").innerHTML == "X" || 
    document.getElementById("box3").innerHTML == "X" && document.getElementById("box6").innerHTML =="X" && document.getElementById("box9").innerHTML == "X" || 
    document.getElementById("box1").innerHTML == "X" && document.getElementById("box5").innerHTML =="X" && document.getElementById("box9").innerHTML == "X" || 
    document.getElementById("box3").innerHTML == "X" && document.getElementById("box5").innerHTML =="X" && document.getElementById("box7").innerHTML == "X") {
        document.getElementById("screen").innerHTML = "X won"}

    if(document.getElementById("box1").innerHTML == "O" && document.getElementById("box2").innerHTML == "O" && document.getElementById("box3").innerHTML == "O" || document.getElementById("box4").innerHTML == "O" && document.getElementById("box5").innerHTML =="O" && document.getElementById("box6").innerHTML == "O" || document.getElementById("box7").innerHTML == "O" && document.getElementById("box8").innerHTML =="O" && document.getElementById("box9").innerHTML == "O" || document.getElementById("box1").innerHTML == "O" && document.getElementById("box4").innerHTML =="O" && document.getElementById("box7").innerHTML == "O" || document.getElementById("box2").innerHTML == "O" && document.getElementById("box5").innerHTML =="O" && document.getElementById("box8").innerHTML == "O" || 
    document.getElementById("box3").innerHTML == "O" && document.getElementById("box6").innerHTML =="O" && document.getElementById("box9").innerHTML == "O" || 
    document.getElementById("box1").innerHTML == "O" && document.getElementById("box5").innerHTML =="O" && document.getElementById("box9").innerHTML == "O" || 
    document.getElementById("box3").innerHTML == "O" && document.getElementById("box5").innerHTML =="O" && document.getElementById("box7").innerHTML == "O") {
        document.getElementById("screen").innerHTML = "O won"}
}

function handleClick() {
    var cells = document.querySelectorAll(".container div")
    var screens = document.getElementById("screen")
    cells.forEach(cell => {
        cell.innerHTML = ""
        
    })
    screens.innerHTML = ""
    player2 = (player2 === "O") ? "O" : "X"
}