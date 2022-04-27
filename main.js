function preload() {
 
}

function setup() {

 canvas = createCanvas(640,480);
 canvas.position(110,160);
 video = createCapture();
 video.hide();

}

function draw() {

 image(video,160,120,320,240);
 fill("aqua");
 circle1 = circle(50,50,80);
 circle2 = circle(590,50,80);
 circle3 = circle(50,430,80);
 circle4 = circle(590,430,80);
 fill("#F95700FF");
 rect(35,90,30,300);
 rect(575,90,30,300);
 rect(90,35,460,30);
 rect(90,415,460,30);

}

function take_snapshot() {

 save("My_Photo_Frame.png");

}
