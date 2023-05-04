let myForm = document.getElementById("myForm")

let synth = new Tone.Synth().toDestination()

function onSubmit (e) {
    e.preventDefault()

synth.triggerAttack(myForm.elements["yourName"].value)


    let duration = parseFloat(myForm.elements["duration"].value)
    
synth.triggerRelease(Tone.now() + parseFloat(myForm.elements["duration"].value))

}

myForm.addEventListener("submit", onSubmit)