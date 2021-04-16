
let board = document.getElementById("CheckerBoard");
let ctx = board.getContext("2d");
var img = new Image();
img.onload = function(){  
    ctx.drawImage(img, 0, 0)
}  
img.src = './img/checkerboard.jpeg';