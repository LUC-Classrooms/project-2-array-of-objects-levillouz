/*
 Project 2 - Array of Objects
 Name: 
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas


}

function draw(){
  background(200); //light gray background
  myShape(width / 2, height / 2, 1);

    
    myShape(width / 4, height / 4, 0.8);
  
   
    myShape(width * 3 / 4, height * 3 / 4, 1.2);
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
    // Body
  fill(0, 0, 153);
  ellipse(0, 120, 150, 200); 
  // Head
  fill(255, 204, 153);
  ellipse(0, 0, 100, 120); 

  // Eyes
  fill(0);
  ellipse(-30, -20, 20, 20); 
  ellipse(30, -20, 20, 20); 
  // Nose
  fill(255, 102, 102);
  triangle(0, 0, -10, 20, 10, 20); 

  // Mouth
  noFill();
  stroke(255, 102, 102);
  arc(0, 20, 40, 20, 0, PI); 

  // Hat
  fill(0);
  rect(-50, -80, 100, 50, 20); 
  fill(255, 0, 0);
  rect(-30, -130, 60, 70, 20); 

  pop(); // restore previous drawing state
}

}

