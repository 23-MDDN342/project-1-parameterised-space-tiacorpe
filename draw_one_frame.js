
function draw_one_frame(cur_frac) {
  // My Code
  let deepGold = color("#9a6226");
  let lightGold = color("#ffa500");

  background(deepGold);
  // cogRotation();
    let angle = cur_frac*2;
    let xPosition = width/4
    let yPosition = height/3
    
  translate(xPosition, yPosition);
  push();
  rotate(angle);
  cog();
  pop();
  
  // second cog
  translate(xPosition, yPosition);
  push();
  rotate(-angle + TWO_PI/3);
  cog();
  pop();
}

////////// FUNCTIONS //////////
// Cog Shape created by ChatGPT.
function cog() {
  let numTeeth = 8; // number of teeth on the cog
  let cogRadius = 100; // radius of the cog
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
function mainClock(){
  // outer circle
   ellipse(width/2, height/2, height, height);
   fill(midGold);

  // inner circle
  ellipse(width/2, height/2, height/1.2, height/1.2);
  stroke(lightGold);
}


