function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(1200,1000);

}
//did you know that it is possible to pasteurize a glass of milk in the
//Dasht-E-Lut desert in Iran simply by leaving it in the open air?

function draw()
{
  //create a background using RGB values
  background(250,240,120)
  // change the paint brush to a specific color according to RGB values
  fill(19,209,25);
  
  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  //reference points for rectangles is at TOP LEFT CORNER; account for shifts
  rect(1099,499,100,500);
  rect(1187,1,10,50);
  rect(48,250,120,250);


}
