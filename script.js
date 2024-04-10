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

var obj1, obj2// Global Variables go here
var objects = new Array(10); // the argument to Array() defines its size

function setup(){
  createCanvas(320, 240);
  obj1 = new MyClass(100, 100);
  obj2 = new MyClass(200, 100);
  for(var i = 0; i < objects.length; i++) {
    objects[i] = new MyClass(random(width), random(height));
    }
  }
}
function draw(){
  background(200);
  for(var i = 0; i < objects.length; i++){
    objects[i].move(); // each time through the loop, move the next object in the array
    objects[i].display(); // call the display method for each object (0 - 9)
  }

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
  
  obj1.move(); // move object 1 (obj1)
  obj1.display(); // display obj1 on screen
  obj2.move();
  obj2.display();
}





