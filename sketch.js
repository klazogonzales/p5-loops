function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    strokeWeight(4);
    stroke(255);

var x=0;
while(x<650){
    fill(0,255,0);
ellipse(x, 255, 25, 25);
x=x+50;
}
for(var x= 0; x<650; x=x+50){
    fill(255,0,0)
ellipse(100,x, 25, 25);
}
for(var x= 0; x<650; x=x+50){
    fill(66, 226, 244)
ellipse(200,x, 25, 25);
}
for(var x= 0; x<650; x=x+50){
    fill(119, 48, 160)
ellipse(300,x, 25, 25);
}
}

