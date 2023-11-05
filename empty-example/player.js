class Player {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size * SCALE;
    this.color = color;
    this.speed = SCALE;
  }

  draw() {
    fill(this.color);
    ellipse(this.x+this.size / 2, this.y + this.size / 2 , this.size, this.size);
  }

  // move
  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x + this.size < width) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW) && this.y > 0) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW) && this.y < height - this.size) {
      this.y += this.speed;
    }
  }

  //   checkCollision() {
  //     let index = IX(this.x, this.y);
  //     let d = fluid.density[index];
  //     if (d > 0) {
  //       alert("collision");
  //     }
  //   }
}
