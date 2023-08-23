noseX=0;
noseY=0;

function preload(){
   clown_nose = loadImage('https://media.istockphoto.com/id/1192834521/vector/a-red-ball-isolated-vector-illustration.jpg?s=612x612&w=0&k=20&c=j1COhE5OAB4BvSVXvwSXDlbcIZyNE4vhUn_7gZ6iwDo=');
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center()
    video=videoCapture(VIDEO);
    viedosize=(300, 300);
    viedo.hide();

     poseNet= ml5.poseNet(video , modelLoaded);
     poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
       console.log('poseNet is Initialized');

}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.x-15;

    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}
function takeSnapshot() {
    save('myFilterImage.png');
}


