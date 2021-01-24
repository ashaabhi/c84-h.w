canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image= "c1.png";
car1x=10;
car1y=10;

car2_width=120
car2_height=70;
car2x=10;
car2y=100;

background_image="route.jpg";
function add()
{
    background_imgTag= new Image(); //definite a variable with a new image 
    background_imgTag.onload= uploadBackground(), //setting a function,onloading this variable
    background_imgTag.src = background_image //load image

    car1_imgTag= new Image(); //definite a variable with a new image 
    car1_imgTag.onload= uploadCar1(), //setting a function,onloading this variable
    car1_imgTag.src = car1_image //load image

    car2_imgTag= new Image(); //definite a variable with a new image 
    car2_imgTag.onload= uploadCar2(), //setting a function,onloading this variable
    car2_imgTag.src = car2_image //load image
}
function uploadBackground()
{
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1()
{
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2()
{
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode
    console.log(keyPressed)

    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed == '87')
    {
        car2_up();
        console.log("key w");
    }

    if(keyPressed == '83')
    {
        car2_down();
        console.log("key s");
    }
    
    if(keyPressed == '65')
    {
        car2_left();
        console.log("key a");
    }

    if(keyPressed == '68')
    {
        car2_right();
        console.log("key d");
    }
}