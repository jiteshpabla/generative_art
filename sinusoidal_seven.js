// 'speed' controls the speed at which the blobs move (or the speed of the animation)
var phase = 0, speed = 0.02, outward = 0, flag = true, blob_size = 10;
//var o2=0,
 
function setup() {
  createCanvas(500, 500);
  background(4, 58, 74);
  noStroke();
}
 
function draw() {
  // change the blob color after 600 frames
  if (frameCount%600 == 0){
    if (flag == true){
      //fill((sin(phase)+1)*125);
      fill(4, 58, 74);
      blob_size = blob_size + 0.5; // without this, there is a leftover white outline
    }
    else{
      fill(255);
      blob_size = blob_size - 0.5; // reset the blob size
    }
    flag = !flag;
  }
  // For making multiple blobs at different radii (ie o2)
  /*for(var o2 = outward - 100; o2 <= outward + 200; o2 += 50){
      for(var i = -1; i <= 1; i += 0.2){
      var x = o2 * cos(phase+i) + width/2;
      var y = o2 * sin(phase+i) + height/2;
      ellipse(x, y, 14, 14);
    }
  }*/
  // -3 to +3 with 0.9 for making 7 blobs
  for(var i = -3; i <= 3; i += 0.9){
      var x = outward * cos(phase+i) + width/2;
      var y = outward * sin(phase+i) + height/2;
      ellipse(x, y, blob_size, blob_size);
    }
  phase = phase + speed;
  // max radius = 120; the parameter of sin() determines speed of going inward/outward
  outward = 120 * sin(phase/3); //make the blobs go out and inwards
}
