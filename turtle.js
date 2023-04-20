let aquarium = document.getElementById("aquarium")
let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setSpeed(0.95)
turtle.setPosition(0,0)
turtle.setFillStyle('skyblue')
turtle.beginPath()
for (let i =0; i < 4; i++)
{
    turtle.right(90)
    turtle.forward(300)
}
turtle.closePath()
turtle.fill()




turtle.setPosition(40, 150)
turtle.beginPath()

 for ( let i = 0; i < 4; i++)
{
    turtle.forward(80)
    turtle.right(90)
}

turtle.setStrokeColorRGB(225, 00, 0)
turtle.setFillStyle('blue')





turtle.closePath()


turtle.fill('red')  

turtle.setPosition(69, 150)
turtle.beginPath()
for ( let i = 0; i < 4; i++)
{
    turtle.forward(20)
    turtle.right(90)  
}
turtle.setStrokeColorRGB(225, 00, 0)
turtle.setFillStyle('white')





turtle.closePath()
turtle.fill('grey')  


turtle.setPosition(40,70)
turtle.beginPath()
for ( let i = 0; i < 2; i++)
{
    turtle.right(45)
    turtle.forward(69.5)
    turtle.right(90)  
    turtle.left(31)

}
turtle.setStrokeColorRGB(225, 00, 0)
turtle.setFillStyle('grey')





turtle.closePath()
turtle.fill()  


turtle.setPosition(65,100)
turtle.arc(0,64)

 for ( let i = 0; i < 4; i++)
 {
     turtle.forward(15)
     turtle.right(90)
 }
 

 

 turtle.setPosition(105,100)

 for ( let i = 0; i < 4; i++)
 {
     turtle.forward(15)
     turtle.right(90)
 }


 