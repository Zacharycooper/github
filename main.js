rightWristX = 0;
leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
scoreRightWrist = 0;
scoreleftWrist = 0;
song1 = '';
song2 = '';
song1_status = '';
song2_status = '';
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('posenet loaded ツ')
}
function draw(){
image(video, 0, 0, 600, 500);
}
function preload(){
    song1 = loadSound('music.mp3');
    song2 = loadSound('Xenogenesis')
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('the X of the left wrist is: ' + leftWristX +'and the Y of the left wrist is:' + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('the X of the right Wrist is: ' + rightWristX +'and the Y of the right Wrist is:' + rightWristY);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log('score the right Wrist is: ' + scoreRightWrist +'score of the left Wrist is:' + scoreleftWrist);
    }
}