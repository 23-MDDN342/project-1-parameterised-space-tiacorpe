//////// MY CODE //////////
const ease = new p5.Ease();

function draw_one_frame(cur_frac){
  // Colors
  let magenta = color("#ff33e7");
  let hot_pink = color("#ff3381");
  let orange = color("#ff4b33");
  let gold = color("#ffb133");

  background(0);
  fill(gold);
  rect(0, 0, width * 4/6, height);

  fill(hot_pink);
  rect(width * 5/6, 0, width * 1/6, height/2);

  // Back rectangle
  draw_Backrect(cur_frac);

  // Upper-left squares
  draw_rect_1(cur_frac);
  draw_rect_2(cur_frac);
  draw_rect_3(cur_frac);

  // Rotating semi-circle
  draw_semi();
  draw_semi2();

}

//////// FUNCTIONS //////////
// Upper left rectangle/square
function draw_rect_1(cur_frac) {
  // General movement w/help from example_easing.js
  let going_right = true;
  let amount_across = 0;
  if (cur_frac < 0.5) {
    going_right = true;
    amount_across = cur_frac * 2;
  }
  else {
    going_right = false;
    amount_across = (cur_frac-0.5) * 2;
  }

  // Easing movement
  const left_x = int(0);
  const right_x = int(width/6);
  const ease_amount_across = ease.circularInOut(amount_across); // OK

  if(going_right) {
    cur_x2 = map(ease_amount_across, 0, 1, left_x, right_x);
  }
  else {
    cur_x2 = map(ease_amount_across, 0, 1, right_x, left_x)
  }

  // Rectangle/square
  let r_height = int(0); // y-position of rect
  let r_size = int(height/3); // size control
  let orange = color("#ff4b33"); // orange

  fill(orange);
  noStroke();
  rect(cur_x2, r_height, r_size);
}

// Upper left rectangle/square 2
function draw_rect_2(cur_frac) {
  // General movement w/help from example_easing.js
  let going_right = true;
  let amount_across = 0;
  if (cur_frac < 0.5) {
    going_right = true;
    amount_across = cur_frac * 2.5;
  }
  else {
    going_right = false;
    amount_across = (cur_frac-0.5) * 2.5;
  }

  // Easing movement
  const left_x = int(0);
  const right_x = int(width/6);
  const ease_amount_across = ease.circularInOut(amount_across); // OK

  if(going_right) {
    cur_x2 = map(ease_amount_across, 0, 1, left_x, right_x);
  }
  else {
    cur_x2 = map(ease_amount_across, 0, 1, right_x, left_x)
  }

  // Rectangle/square
  let r_height = int(height/3); // y-position of rect
  let r_size = int(height/3); // size control
  let orange = color("#ff4b33"); // orange

  fill(orange);
  noStroke();
  rect(cur_x2, r_height, r_size);
}

// Upper left rectangle/square 3
function draw_rect_3(cur_frac) {
  // General movement w/help from example_easing.js
  let going_right = true;
  let amount_across = 0;
  if (cur_frac < 0.5) {
    going_right = true;
    amount_across = cur_frac * 3;
  }
  else {
    going_right = false;
    amount_across = (cur_frac-0.5) * 3;
  }

  // Easing movement
  const left_x = int(0);
  const right_x = int(width/6);
  const ease_amount_across = ease.circularInOut(amount_across); // OK

  if(going_right) {
    cur_x2 = map(ease_amount_across, 0, 1, left_x, right_x);
  }
  else {
    cur_x2 = map(ease_amount_across, 0, 1, right_x, left_x)
  }

  // Rectangle/square
  let r_height = int(height * 2/3); // y-position of rect
  let r_size = int(height/3); // size control
  let orange = color("#ff4b33"); // orange

  fill(orange);
  noStroke();
  rect(cur_x2, r_height, r_size);
}

// Backgrounf rectangle
function draw_Backrect(cur_frac) {
// General movement w/help from example_easing.js
  let going_right = true;
  let amount_across = 0;
  if (cur_frac < 0.5) {
    going_right = true;
    amount_across = cur_frac * 2;
  }
  else {
    going_right = false;
    amount_across = (cur_frac-0.5) * 2;
  }

  // Easing movement
  const left_x = int(width/6);
  const right_x = int(width/4);
  const ease_amount_across = ease.circularInOut(amount_across); // OK

  if(going_right) {
    cur_x2 = map(ease_amount_across, 0, 1, right_x, left_x);
  }
  else {
    cur_x2 = map(ease_amount_across, 0, 1, left_x, right_x)
  }

  // Rectangle/square
  let magenta = color("#ff33e7");

  fill(magenta);
  noStroke();
  rect(cur_x2, 0, width/6, height);
}

// Rotating semi-circle
function draw_semi(cur_frac) {
  let hot_pink = color("#ff3381");

  // Origin
  translate(width * 2/3, height/4);

  // Semi-circle
  let diameter = height/2;
  let x = 0;
  let y = 0;
  
  // Rotation
  let angle = radians(frameCount * 20 % 360);
  rotate(angle);

  fill(hot_pink);
  arc(x, y, diameter, diameter, 0, PI);
}

// Rotating semi-circle 2
function draw_semi2(cur_frac) {
  let hot_pink = color("#ff3381");

  // Origin
  translate(width/4, height/4);

  // Semi-circle
  let di = height/2;
  let x = 0;
  let y = 0;
  
  // Rotation
  let angle2 = radians(frameCount * 20 % 360);
  rotate(angle2);

  fill(hot_pink);
  arc(x, y, di, di, 0, PI);
}
