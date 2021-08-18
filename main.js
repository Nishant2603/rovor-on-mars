canvas = document.getElementById("mars");
ctx = canvas.getContext("2d");

background_image = "mars.jpg";
rover = "rover.png";

rover_x = 10;
rover_y = 10;
rover_width = 90;
rover_height = 100;

function add() {
    back_img = new Image();
    back_img.src = background_image;
    back_img.onload = uploadBackground;
    rover_img = new Image();
    rover_img.src = rover;
    rover_img.onload = uploadRover;
}
function uploadRover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
function uploadBackground() {
    ctx.drawImage(back_img, 0, 0, canvas.width, canvas.height);
}















