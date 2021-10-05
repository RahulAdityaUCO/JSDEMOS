// normal function
function degreesToRadians(degrees) {
    return(degrees * Math.PI / 180.0);
  }

// created for a class
function move() {
    var angle = degreesToRadians(this.direction);
    this.x = this.x + this.speed * Math.cos(angle);
    this.y = this.y + this.speed * Math.sin(angle);
  }

  // class function
  function Ship(x, y, speed, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.move = move;
  }
