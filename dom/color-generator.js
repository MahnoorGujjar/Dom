

let colors = ["skyblue" ,"pink"];

let background = "";
for(let i =0 ; i < 1 ; i++){
    background+= colors[Math.floor(Math.random() * colors.length)]
}

document.body.style.backgroundColor=background;