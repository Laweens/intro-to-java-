let aquarium = document.getElementById("aquarium")
let turtle = new RealTurtle.default(aquarium, {autoStart: true})


turtle.setStrokeColorRGB(225, 00, 0)
turtle.setFillStyle('red')
turtle.beginPath()




turtle.closePath()
turtle.fill()

turtle.setPosition(40, 150)

 for ( let i = 0; i < 4; i++)
{
    turtle.forward(80)
    turtle.right(90)
}
turtle.beginPath()

turtle.fill('red')
turtle.setFillStyle('red')
turtle.closePath()

turtle.setPosition(69, 150)
for ( let i = 0; i < 4; i++)
{
    turtle.forward(20)
    turtle.right(90)  
}
turtle.setPosition(40,70)
for ( let i = 0; i < 2; i++)
{
    turtle.arc(0, 45)
    turtle.forward(69.5)
    turtle.right(90)  
    turtle.arc(0, -31)

}

turtle.setPosition(65,100)
turtle.arc(0,64)
 for ( let i = 0; i < 4; i++)
 {
     turtle.forward(15)
     turtle.right(90)
 }
 turtle.beginPath()
 turtle.fill('red')
 turtle.setFillStyle('red')
 turtle.closePath()
 

 turtle.setPosition(105,100)
 for ( let i = 0; i < 4; i++)
 {
     turtle.forward(15)
     turtle.right(90)
 }
 turtle.beginPath()
 turtle.setFillStyle('red')
 turtle.fill('red')
 turtle.closePath()
 
 