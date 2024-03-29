noseY = 0;
noseX = 0;

function preload(){
    nose = loadImage("https://i.postimg.cc/GtcwHL4j/mustache-removebg-preview.png");
    }

function setup(){
canvas= createCanvas(300,300)
canvas.center()

video = createCapture(VIDEO);
video.size(300,300);
video.hide()

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("noseX = "+ results [0].pose.nose.x);
        console.log("noseY = "+ results [0].pose.nose.y);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
image (video,0,0,300,300);
image(nose,noseX-28,noseY-10,60,60);

}

function takeSnapshot(){
    save('MustacheYOU.jpg')
}
