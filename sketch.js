const section = document.getElementById('section'); 
const logo = document.getElementById('logo');
const FPS = 60;

section.style.height = window.innerHeight +'px'; 
section.style.width  = window.innerWidth + 'px';

let xPos = 10;
let yPos = 10;
let xSpeed = 4;
let ySpeed = 4;

function update(){
    logo.style.left = xPos + 'px';
    logo.style.top = yPos + 'px';
}

setInterval(() => {
    if(xPos + logo.clientWidth >= window.innerWidth || xPos <= 0){
        xSpeed = -xSpeed;
    }
    if(yPos +logo.clientHeight >= window.innerHeight || yPos <=0){
        ySpeed = -ySpeed;
    }

    xPos += xSpeed;
    yPos += ySpeed;
    update();

}, 1000/FPS)
