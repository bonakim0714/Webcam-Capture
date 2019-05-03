let video;
var button;
var snapshots = [];

function setup() {
  createCanvas(640, 480);
  background(255);
  video = createCapture(VIDEO);
  video.size(640,480);
  button = createButton('snap');
  button.mousePressed(takesnap);
}

function takesnap(){
  snapshots.push(video.get());

  //frameRate(200)
  //image(video, 0, 0, 640, 480);
}

function draw() {
  for (var i = 0; i < snapshots.length; i++){
    tint(random(255),random(255),random(255),80);
    image(snapshots[i],0,0);
  }
}
