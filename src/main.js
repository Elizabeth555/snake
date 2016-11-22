window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  var snake = new Snake();
  var size = 20;
  var canvasSize = 500;
  var food = new Food();
  console.log(food)

  function gameLoop(self) {
    tick += 1;
    if(tick === 1){
      console.log(food.updateFood)
      food.updateFood();
    };
    if(tick % 10 === 0) {
      food.isFoodEaten();

      updatePosition();
    }
    draw();
    requestAnimationFrame(gameLoop);
  }
  gameLoop(this);
  window.addEventListener('keydown',doKeyDown,true);

  function updatePosition() {
    var head = snake.getHeadPosition();
    snake.move(head);
    snake.position.pop();
    snake.checkBoundary();
  }

  function draw() {
    screen.clearRect(0, 0, canvasSize, canvasSize);
    snake.position.forEach(function(cube) {
      screen.fillRect(cube[0] * size, cube[1] * size, size, size);
    });
  }

  function Snake() {
    this.direction = 'down';
    this.position = [[10, 10], [10, 9], [10, 8], [10, 7], [10, 6], [10, 5]];
  }

  Snake.prototype.getHeadPosition = function () {
    return this.position[0];
  };

  Snake.prototype.checkBoundary = function () {
    if (this.position[0][0] >= 25){
      this.position[0][0] = 0;
    }
    else if (this.position[0][1] >= 25){
      this.position[0][1] = 0;
    }
    else if (this.position[0][0] < 0){
      this.position[0][0] = 24;
    }
    else if (this.position[0][1] < 0){
      this.position[0][1] = 24;
    }
  };

  Snake.prototype.move = function(head) {
    if (this.direction === 'down'){
      this.position.unshift([head[0], head[1] + 1]);
    }
    else if (this.direction === 'up'){
      this.position.unshift([head[0], head[1] - 1]);
    }
    else if (this.direction === 'left'){
      this.position.unshift([head[0] - 1, head[1]]);
    }
    else if (this.direction === 'right'){
      this.position.unshift([head[0] + 1, head[1]]);
    }
  };

  function doKeyDown(evt){
    switch (evt.keyCode) {
      case 38:
        if(snake.direction != 'down'){
          snake.direction = 'up';
        }
      break;
      case 40:
        if(snake.direction != 'up'){
          snake.direction = 'down';
        }
      break;
      case 37:
        if(snake.direction != 'right'){
          snake.direction = 'left';
        }
      break;
      case 39:
        if(snake.direction != 'left'){
          snake.direction = 'right';
        }
      break;
    }
  }

function Food () {
  this.foodExists = false;
};

Food.prototype.updateFood = function () {
  if (this.foodExists === false){
    this.drawFood(this.randomCoor());
    console.log("updateFood")
  };
};

Food.prototype.randomCoor = function () {
  var x = Math.floor(Math.random() * 10);
  var y = Math.floor(Math.random() * 10);
  console.log([x,y])
  return [x,y];

};

Food.prototype.drawFood = function ([x,y]) {
    screen.fillRect(x*20,y*20, 20, 20);
    this.foodCoor = [x,y];
    this.foodExists = true;

};

Food.prototype.isFoodEaten = function () {
  if (snake.position[0] == this.foodCoor) {
    this.foodCoor = false;
    this.updateFood();
  };
};


};
