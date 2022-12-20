/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

numberOfEnemies = 100;
enemyArray = [];

class Enemy {
  constructor() {
    this.x = 10;
    this.y = 50;
    this.width = 100;
    this.height = 100;
  }
  update() {
    this.x++;
    this.y++;
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemyArray.push(new Enemy());
}
console.log(enemyArray);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  requestAnimationFrame(animate);
}

animate();
