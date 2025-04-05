// function handleClick(event) {
//     event.target.innerHTML = "X"
// }


     var player = "X"
     var gameMove = true


function viewClick(event){
    var cell = event.target
    cell.innerHTML = player
    player = (player === "X") ? "O" : "X"

}

function handleClick() {
    var cells = document.querySelectorAll(".container div")
    cells.forEach(cell => {
        cell.innerHTML = ""
    })
    player = "X"
}