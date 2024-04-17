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
var gnomes = new Array (10);
var gnome1, gnome2


function setup(){
  createCanvas(600, 400);
  for(let i = 0; i < gnomes.length; i++){
    gnomes[i] = new Gnome(width/2, height/2);
  }
  gnome1 = new Gnome(width/4, height/2);
  console.log(gnome1);
  gnome2 = new Gnome(width * 3/4, height/2);
  console.log (gnome2);

}

function draw(){
  background(200);
  //gnome1.display();
  //gnome2.display();
  gnome1.move();
  gnome2.move();

for(let i = 0; i < gnomes.length; i++){
  gnomes[i].display();
gnomes[i].move();
}

}


function Gnome (tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.r = 0;
  this.s = 1;
  this.rSpeed = random (-.1, .1);
  this.xSpeed = random (-4, 4);
  this.ySpeed = random (-4, 4);
  
  this.move = function(){
    this.x += this.xSpeed;
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    this.y += this.ySpeed;
    if(this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
  this.display = function() {
    push ()
    translate (this.x, this.y);
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
    pop ()
  }
}





