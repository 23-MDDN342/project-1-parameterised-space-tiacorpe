
function draw_one_frame(cur_frac){
  // My Code
  let deepGold = color("#9a6226");
  background(deepGold);

  let xPosition = width/4
  let yPosition = height/4
  let framerate = cur_frac* 4.8

  mainClock();

  // Cogs
  translate(xPosition, yPosition);
  push();
  rotate(framerate);
  cog();
  pop();
  
  // second cog
  translate(xPosition/2, yPosition/2);
  push();
  rotate(-framerate + TWO_PI/3);
  cog();
  pop();
}

////////// FUNCTIONS //////////
// Cog Shape created by ChatGPT.
function cog(cur_frac) {
  let numTeeth = 8; // number of teeth on the cog
  let cogRadius = 50; // radius of the cog; changes size
  let innerRadius = cogRadius * 0.85; // radius of the circle in the center of the cog
  let toothSize = cogRadius / 12; // length of each tooth
  let angleStep = TWO_PI / numTeeth; // angle between each tooth
  let angleOffset = angleStep / 2; // offset the first tooth by half an angleStep
  // translate(width/2, height/2); // move the origin to the center of the canvas

  beginShape();
  let midGold = color("#cc8400");
  let deepGold = color("#9a6226");

  fill(midGold);
  stroke(deepGold);
  for (let i = 0; i < numTeeth; i++) {
    let angle = i * angleStep - angleOffset;
    vertex(cos(angle) * cogRadius, sin(angle) * cogRadius);
    vertex(cos(angle) * (cogRadius + toothSize), sin(angle) * (cogRadius + toothSize));
    angle += angleStep / 2;
    vertex(cos(angle) * (cogRadius + toothSize), sin(angle) * (cogRadius + toothSize));
    vertex(cos(angle) * innerRadius, sin(angle) * innerRadius);
    angle += angleStep / 2;
    vertex(cos(angle) * innerRadius, sin(angle) * innerRadius);
    vertex(cos(angle) * (cogRadius + toothSize), sin(angle) * (cogRadius + toothSize));
  }
  endShape(CLOSE);
}

// Main Clock
function mainClock(cur_frac){
  let lightGold = color("#ffa500");
  let ellipseSize = width/3
  let tick = cur_frac* 4.8
  
  ellipseMode(CENTER);
  fill(lightGold);
  ellipse(width/2, height/2, ellipseSize, ellipseSize);

  strokeWeight(2);
  line(width/2, height/2, 275, 275);

  // line(ellipseSize/2, ellipseSize/2, tick, tick);

}


