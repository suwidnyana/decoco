import { PRIZE_EMOJI_LIST, PRIZE_LIST } from "../components/ClawMachine";

export function populateCanvas(canvas) {
  var pen = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  var numBalls = 30;
  var grav = [0, -0.1];

  const COLOR_LIST = [
    "#206C7A",
    "#BFFFEA",
    "#F74C77",
    "#f5a623",
    "#4ADE7B",
    "#C17CEF",
    "#3D9CF7",
    "#ff4ecd",
    "#6E0E7A",
  ];

  function Ball(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.color = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
    const prize = PRIZE_LIST[Math.floor(Math.random() * PRIZE_LIST.length)];

    this.draw = function () {
      pen.fillStyle = this.color;
      pen.beginPath();
      pen.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      pen.fill();
      pen.font = `${this.r}px serif`;

      pen.fillText(
        PRIZE_EMOJI_LIST[prize],
        this.x - this.r / 2,
        this.y + this.r / 2
      );
    };

    this.update = function () {
      this.x += this.dx;
      this.y += this.dy;
      this.dx += grav[0];
      this.dy -= grav[1];
      if (this.x > W - this.r) {
        this.x = W - this.r;
        this.dx *= -1;
      } else if (this.x < this.r) {
        this.x = this.r;
        this.dx *= -1;
      }
      if (this.y > H - this.r) {
        this.y = H - this.r;
        this.dy *= -0.7;
      } else if (this.y < this.r) {
        this.y = this.r + 1;
        this.dy *= -0.7;
      }
      this.draw();
    };
  }

  var balls = [];

  function reset() {
    balls = [];
    for (var i = 0; i < numBalls; i++) {
      var x = Math.random() * W;
      var y = Math.random() * H;
      var r = Math.random() * 10 + 15;
      balls.push(
        new Ball(x, y, Math.random() * 10 - 5, Math.random() * 10 - 5, r)
      );
    }
  }
  reset();

  var mouseDown = false;
  var cooldown = 0;
  var mouse = {
    x: undefined,
    y: undefined,
  };

  function animate() {
    pen.clearRect(0, 0, W, H);
    cooldown++;
    if (mouseDown && cooldown > 2) {
      var r = Math.random() * 20 + 10;
      balls.push(
        new Ball(
          mouse.x,
          mouse.y,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          r
        )
      );
      cooldown = 0;
    }
    for (var ball of balls) {
      ball.update();
      for (var ball2 of balls) {
        //Not the most efficient way to check every pair, but this is just a rough version
        if (ball !== ball2) {
          var collision = checkCollision(ball, ball2);
          if (collision[0]) {
            adjustPositions(ball, ball2, collision[1]);
            resolveCollision(ball, ball2);
          }
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();

  function checkCollision(ballA, ballB) {
    var rSum = ballA.r + ballB.r;
    var dx = ballB.x - ballA.x;
    var dy = ballB.y - ballA.y;
    return [
      rSum * rSum > dx * dx + dy * dy,
      rSum - Math.sqrt(dx * dx + dy * dy),
    ];
  }

  function resolveCollision(ballA, ballB) {
    var relVel = [ballB.dx - ballA.dx, ballB.dy - ballA.dy];
    var norm = [ballB.x - ballA.x, ballB.y - ballA.y];
    var mag = Math.sqrt(norm[0] * norm[0] + norm[1] * norm[1]);
    norm = [norm[0] / mag, norm[1] / mag];

    var velAlongNorm = relVel[0] * norm[0] + relVel[1] * norm[1];
    if (velAlongNorm > 0) return;

    var bounce = 0.7;
    var j = -(1 + bounce) * velAlongNorm;
    j /= 1 / ballA.r + 1 / ballB.r;

    var impulse = [j * norm[0], j * norm[1]];
    ballA.dx -= (1 / ballA.r) * impulse[0];
    ballA.dy -= (1 / ballA.r) * impulse[1];
    ballB.dx += (1 / ballB.r) * impulse[0];
    ballB.dy += (1 / ballB.r) * impulse[1];
  }

  function adjustPositions(ballA, ballB, depth) {
    //Inefficient implementation for now
    const percent = 0.2;
    const slop = 0.01;
    var correction =
      (Math.max(depth - slop, 0) / (1 / ballA.r + 1 / ballB.r)) * percent;

    var norm = [ballB.x - ballA.x, ballB.y - ballA.y];
    var mag = Math.sqrt(norm[0] * norm[0] + norm[1] * norm[1]);
    norm = [norm[0] / mag, norm[1] / mag];
    correction = [correction * norm[0], correction * norm[1]];
    ballA.x -= (1 / ballA.r) * correction[0];
    ballA.y -= (1 / ballA.r) * correction[1];
    ballB.x += (1 / ballB.r) * correction[0];
    ballB.y += (1 / ballB.r) * correction[1];
  }
}
