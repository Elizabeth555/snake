[![Waffle](https://badge.waffle.io/calveym/snake.png?label=ready&title=Ready)](https://waffle.io/calveym/snake)
#Javascript snake

http://snakesonascreen.herokuapp.com/snake - (has loud but exciting music)


##Goal:
A recreation of snake.

MVP description: Make a continuously moving black box change direction with the arrow keys.

##Features
- Continuous movement of player box.
- Changing direction with arrow keys.
- If snake collides with a food square, score increases.

##User stories:

`As a player, so that I can interact with the game, I should be able to use the arrow keys to move.`

`As a player, so that there is a point to the game, my objective should be to consume food.`

`As a player, so that I can win, I should be able to see my score.`

`As a player, so that the game gets more challenging as I play on, the snake should grow when it eats.`

`As a player, so that I can lose the game, I should not be able to cross my tail.`

`As a player, so that I can lose the game, I should not be able to cross the edge of the canvas.`

## Specification:
- Decide which movement system to use.
- Create the snake class.
- Store snake positions.
- Implement continuous movement.
- Helper methods to change direction.
- Basic collision for hitting the wall.
- Print food randomly at some position.
- Detect food collisions.
- Show score.
- Highscore stored and shown.
