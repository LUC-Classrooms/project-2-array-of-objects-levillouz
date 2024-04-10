/**
 * Add code for your class constructor in this file
 */
function Gnome(tempX, tempY) {
    this.x = tempX; // Initialize x-coordinate
    this.y = tempY; // Initialize y-coordinate
    this.scale = 1; // Initialize scale factor
}

// Methods for Gnome objects

/*
Method: display()

Description:
    Displays the gnome on the canvas.

Parameters:
    None

Returns:
    None
*/
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

/*
Method: move()

Description:
    Moves the gnome randomly.

Parameters:
    None

Returns:
    None
*/
Gnome.prototype.move = function() {
    // Move the gnome randomly
    this.x += random(-2, 2);
    this.y += random(-2, 2);
};