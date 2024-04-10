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

// Define the constructor function for Gnome objects
function Gnome(tempX, tempY) {
  // Initialize properties
  this.x = tempX;
  this.y = tempY;
  this.scale = 1; // Default scale
}

// Define methods for Gnome objects
Gnome.prototype.display = function() {
  push(); // Save current drawing style
  translate(this.x, this.y); // Move the origin point
  scale(this.scale); // Scale the gnome

  // Draw gnome
  fill(0, 0, 153); // Body
  ellipse(0, 120, 150, 200);
  fill(255, 204, 153); // Head
  ellipse(0, 0, 100, 120);
  fill(0); // Eyes
  ellipse(-30, -20, 20, 20);
  ellipse(30, -20, 20, 20);
  fill(255, 102, 102); // Nose
  triangle(0, 0, -10, 20, 10, 20);
  noFill(); // Mouth
  stroke(255, 102, 102);
  arc(0, 20, 40, 20, 0, PI);
  fill(0); // Hat
  rect(-50, -80, 100, 50, 20);
  fill(255, 0, 0);
  rect(-30, -130, 60, 70, 20);

  pop(); // Restore previous drawing style
};

Gnome.prototype.move = function() {
  // Move the gnome randomly
  this.x += random(-2, 2);
  this.y += random(-2, 2);
};

// Create an array to contain instances of Gnome objects
var gnomes = [];

function setup() {
  createCanvas(600, 400);
  // Initialize the array with 10 gnome objects
  for (var i = 0; i < 10; i++) {
    gnomes.push(new Gnome(random(width), random(height)));
  }
}

function draw() {
  background(200);
  // Display and move each gnome object
  for (var i = 0; i < gnomes.length; i++) {
    gnomes[i].move();
    gnomes[i].display();
  }
}



