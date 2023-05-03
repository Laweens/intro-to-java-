let seconds= 0
let milliseconds= 0
let minutes = 0

let digits = document.getElementById('digits')

let startButton = document.getElementById('startButton')

let interval;

lapseButton.disabled = true

function start () {
    
    startButton.disabled = true 
    lapseButton.disabled = false
 
    

   interval = setInterval (function () {
milliseconds = milliseconds + 10
  
 if (milliseconds >= 1000) {
    seconds = seconds + 1
    milliseconds = 0
 }
 if (seconds >= 60) {
    minutes = minutes + 1
    seconds = 0
 }

 console.log(milliseconds)
 console.log(seconds)
 console.log(minutes)

digits.innerHTML= minutes + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds



}, 10)
}
   
function stop () {
    
     startButton.disabled = false 
     lapseButton.disabled = true 
     

      clearInterval(interval)
      digits.innerHTML= minutes + ':' + String(seconds).padStart(2, '0') + ':' + String(milliseconds).padStart(2, '0')



 }
   
 function restart () {
    startButton.disabled = false 
    

    clearInterval(interval)
    seconds = 0
    milliseconds = 0
    minutes = 0
    digits.innerHTML= minutes + ':' + String(seconds).padStart(2, '0') + ':' + String(milliseconds).padStart(2, '0')

     const myList = document.getElementById('mylist')
     myList.innerHTML = "";


 }
    
  

 function lapse () {
    
     let myList = document.getElementById('mylist')

       let newListItem = document.createElement('li')
       newListItem.textContent = digits.innerHTML= minutes + ':' + String(seconds).padStart(2, '0') + ':' + String(milliseconds).padStart(2, '0')
       myList.appendChild(newListItem)

       
       

 }
