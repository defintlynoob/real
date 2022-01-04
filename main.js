function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose,got poses');
}
function draw() {
    background('#969A97');
    Fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}
function modelLoaded() {
    console.log('poseNet is initialized');
}
function gotPoses() {
    if (results.legnth>0) {
        console.log(results);
    }
}
noseX=0
difference=0;
rightWristX=0;
leftWristY=0;
noseY=0
function gotPoses(results) {
    if (results.legnth>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX ="+noseX+"noseY="+noseY);
        leftWristY=results[0].pose.leftWristY;
        rightWristX=results[0].pose.rightWristX;
        difference=floor(leftWristY-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX"+rightWristX+"difference="+difference);
    }
}