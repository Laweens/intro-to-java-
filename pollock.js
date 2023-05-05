let myCanvas = document.getElementById("myCanvas")
let ismouseDown = false


paper.setup(myCanvas)

function drawCircle (e) {

console.log(e.x, e.y)

if (isMouseDown) {


let circle = new paper.Path.Circle({
      radius: Math.random() * 40, 
      center: {
        x: e.x, 
        y: e.y
      }

   })

   let red = Math.random() * 255
   let blue = Math.random() * 255
   let green = Math.random() * 255
  

   circle.fillColor = "rgb(" + red + "," + green + "," + blue + ")" 
    }
}

myCanvas.addEventListener("mousemove", drawCircle) 
function mouseUp () {
    isMouseDown = false



}

function mouseDown () {
    isMouseDown = true



}


myCanvas.addEventListener("mouseup", mouseUp)
myCanvas.addEventListener("mousedown", mouseDown)