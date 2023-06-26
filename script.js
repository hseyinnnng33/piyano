const piano = document.querySelectorAll(".key");

let audio = new Audio("sesler/a.wav")

function playtune(key){
    audio.src = `sesler/${key}.wav`;
    audio.play()
}

piano.forEach((key)=>{
    key.addEventListener("click", function(){
    playtune(key.dataset.key)

    if(key.classList.contains("active")){
        key.classList.remove("active");
    }
    else{
        piano.forEach((otherKey) => {
            otherKey.classList.remove("active");
        })
        key.classList.toggle("active");
    }
})
})

function pressKey(e){
    playtune(e.key)
}

document.addEventListener("keydown", pressKey)