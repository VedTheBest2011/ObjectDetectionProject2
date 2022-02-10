status="";
img="";

function preload()
{
    img = loadImage("bunk_bed.jpg");
}

function setup()
{
    canvas = createCanvas(640, 350);
    canvas.center()
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects...";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_detector.detect(img, gotResults);
}

function gotResults(results, error)
{
    if(error){
        console.log(error);
    }
    console.log(results)
}

function draw()
{
    image(img, 0, 0, 640, 350 )
}