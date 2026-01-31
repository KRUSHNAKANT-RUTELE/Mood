let happy=document.getElementById("b1")

let sad=document.getElementById("sad1")

// let photo=document.getElementById("photo")

happy.addEventListener('click',function(){
    photo.src="Happy.EMOGI.jpg"
})


sad.addEventListener('click',function(){
    photo.src="SAD.jpg"
})

setInterval((hello) => {
    document.querySelector("img").src = ("happy.emogi.png")
}, 5000);