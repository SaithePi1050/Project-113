nose_x = 0;
nose_y = 0;

clown = "";
hat = "";

function preload()
{
   clown = loadImage("https://i.postimg.cc/Pf0Hk2cN/m.png"); 
   hat = loadImage("https://i.postimg.cc/nLMZJgHj/Topper-Hat-Download-PNG.png");
}

function draw() 
{
    image(video,0,0,300,300);
    fill(0,0,255);
    stroke(255,255,255);
    image(clown,nose_x-29,nose_y-2.5,60,40);
    image(hat,nose_x-64,nose_y-120,120,60);
}

function setup() 
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('PoseNet is Loaded');
}

function Take_snapshot() 
{
    save('Yourfilter.png');
}

function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

