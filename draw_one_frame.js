//////// MY CODE //////////
const ease = new p5.Ease();

function draw_one_frame(cur_frac){
  // Colors
  let magenta = color("#ff33e7");
  let hot_pink = color("#ff3381");
  let orange = color("#ff4b33");
  let gold = color("#ffb133");

  background(gold);

  // Upper-left Squares
  draw_rect_1(cur_frac);
  draw_rect_2(cur_frac);
  draw_rect_3(cur_frac);

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
  const left_x = int(0.001 * width);
  const right_x = int(0.3 * width);
  const ease_amount_across = ease.circularInOut(amount_across); // OK

  if(going_right) {
    cur_x2 = map(ease_amount_across, 0, 1, left_x, right_x);
  }
  else {
    cur_x2 = map(ease_amount_across, 0, 1, right_x, left_x)
  }

  // Rectangle/square
  let r_height = int(0.01 * height); // y-position of rect
  let r_size = int(0.08*height); // size control
  let orange = color("#ff4b33"); // orange

  fill(orange);
  noStroke();
  rect(cur_x2, r_height, r_size * 2);
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
  const left_x = int(0.001 * width);
  const right_x = int(0.3 * width);
  const ease_amount_across = ease.circularInOut(amount_across); // OK

  if(going_right) {
    cur_x2 = map(ease_amount_across, 0, 1, left_x, right_x);
  }
  else {
    cur_x2 = map(ease_amount_across, 0, 1, right_x, left_x)
  }

  // Rectangle/square
  let r_height = int(0.175 * height); // y-position of rect
  let r_size = int(0.08*height); // size control
  let orange = color("#ff4b33"); // orange

  fill(orange);
  noStroke();
  rect(cur_x2, r_height, r_size * 2);
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
  const left_x = int(0.001 * width);
  const right_x = int(0.3 * width);
  const ease_amount_across = ease.circularInOut(amount_across); // OK

  if(going_right) {
    cur_x2 = map(ease_amount_across, 0, 1, left_x, right_x);
  }
  else {
    cur_x2 = map(ease_amount_across, 0, 1, right_x, left_x)
  }

  // Rectangle/square
  let r_height = int(0.34 * height); // y-position of rect
  let r_size = int(0.08*height); // size control
  let orange = color("#ff4b33"); // orange

  fill(orange);
  noStroke();
  rect(cur_x2, r_height, r_size * 2);
}

