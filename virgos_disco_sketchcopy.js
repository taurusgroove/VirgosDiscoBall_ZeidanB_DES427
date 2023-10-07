let disco;

function preload(){
  disco = loadImage("DiscoBall.jpg");
  song = loadSound('song_file/09VIRGOS_GROOVE.mp3');
}

function setup() {
  createCanvas(500, 500, WEBGL);
  background(0, 71, 171);
}
function keyPressed() {
  if (song.isPlaying()) {
    // virgos_groove/mp3.isPlaying() returns a boolean
    song.stop();
    background(128,0,0);
    
  } else {
    song.play();
    background (25, 25, 112);
    TransitionEvent
    background (220, 208, 255);
  }
}
function draw() {
  rotateY(millis(1000) / 1000);
  // normalMaterial();
  // sphere(150);
  // texture(disco);

  translate(0, 0);
  texture(disco);
  sphere(150);
}
function text (){
    addText ("Press any key to play. Press any key to stop");
    color ('black');
};