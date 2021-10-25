nosex = 0;
nosey = 0;
lwristx = 0;
rwristx = 0;
differ = 0;
function preload(){
    
}
function setup(){
    canvas=createCanvas(500, 500);
    canvas.position(700, 250);
    video = createCapture(VIDEO);
    video.position(100, 300);
    video.size(500, 375);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses); 
}
function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        lwristx = results[0].pose.leftWrist.x;
        rwristx = results[0].pose.rightWrist.x;
        differ = lwristx - rwristx;
        nosey = results[0].pose.nose.y;
        
    }
}
function draw() {
    
    background("red");
    textSize(differ);
    text("Priyansh", nosex, nosey);
    
}