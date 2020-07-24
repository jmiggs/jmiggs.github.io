# NumWarrior

Do you feel like typing out numbers is troublesome or not as easy as typing words? Here's a way to get better at doing that!

![alt text](https://i.imgur.com/TiOxLt7.png)

NumWarrior is a game where users can practice their speed and efficiency with a 10key numpad, in a fun way! The game aims to simulate numeric data entry by having to press numbers to reach an objective and pressing enter to capture it. If you keep playing the game, your fingers will remember where exactly on your keyboard the number you want to type is.

![alt text](https://i.imgur.com/zSNhrZ1.gif)

Through this game design, numerical data entry is mimicked, and users can get faster using the 10key numpad, or just typing out nums on a keyboard, too!

## Architecture and Technologies

The app will use **Javascript**, **Canvas**, and **CSS3** with **HTML5** for styling. It will contain four core classes to run and play:

### the Game Class
is reponsible for bringing all the above classes together and handles the logic for running and drawing each frame of the game. The core function within this class is ``run()``:

```javascript
  run(c) {
    if (this.status === 'running') {
      ...
      ...  
      
      this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height);
      this.board.animate(this.context);
      this.objController.animatePigs(this.context);
      this.player.animate(this.context);
      this.drawUI();
      
      this.registerListeners();
    
      requestAnimationFrame(this.run);
    }
  }

```
This function draws each frame of the game, animating each of the classes at each frame. the function ``requestAnimationFrame()`` allows the frames to be drawn at 60 frames per second (since it is calling on ``run()`` at that rate). Note that this function is only for ***drawing***; the change in positions and movements of other classes is handled in each of the respective classes.

The Game Class also handles other global game logic, such as Game Over scenarios, decrementing the timer, handling score, and handling key entry. 

### Board Class
is responsible for rendering the board; generating tiles and randomly each tile with a number for the player to navigate in.
the Board Class's ``animate()`` funciton looks like so:
```javascript
  animate(ctx) {
    this.drawBackground(ctx) // draws base background for the Board
    this.drawBoard(ctx); // draws the tiles background image from a sprite sheet
    this.drawTiles(ctx); // assigns each tile a corresponding a number and draws it on the tile.
  }
```
As mentioned above, the Game's ``run()`` function will class the Board's ``animate()`` at each frame.

Another key function of the Board class is to keep track of the positions of tiles which contain objectives, so the Player class can verify if the Player is on a tile with an Objective.


### The Player Class
is reponsible for all logic related to the Player, such as player movement, player animation, and player attack.

The Player's animations are handled by its ``animate()`` method, along with ``drawFrame()``:

```javascript
  animate(ctx) {

    const loop = [0,1,2,3,4,5,6,7,8,9,10];

    if (this.attacking) {
      this.drawAction(ctx, loop[this.attackFrame] );
      this.attackFrame += 1;

      if (this.attackFrame > 3) {
        this.attackFrame = 0;
        this.attacking = false;
      }
    } else {
    
      if (this.frame > 10) {
        this.frame = 0;
      }
      this.drawFrame(ctx, loop[this.frame]);
      this.frame += 1;
    }
  }

```
```javascript
 drawFrame(ctx, frame){
    let x = 78;

    ctx.drawImage(this.img, x*frame, 0, 65, 55 , this.posx, this.posy, this.size, this.size);
  }
```

These two functions together use this sprite sheet image:

![alt text](https://i.imgur.com/f6ptvbH.png)

Each time the Player's ``animate()`` function is called by the ``run()`` function from the Game Class, the next image on the sprite sheet is drawn, and once the functions reach the end of the sprite sheet, the first image is drawn, creating an animation loop for the player.

The ``animate()`` function also checks if the Player is currently attacking, and will use a different sprite sheet that will draw the attack animation.

Check out these animation loops~

![alt text](https://i.imgur.com/GZwJ4H0.gif)
![alt text](https://i.imgur.com/2OsYMz8.gif)

For movement, the Player Class interacts with the Board Class, checking to see whether the number entered by the player is an adjacent tile next to the current tile the player is on. If so, the Player's position is updated on the board.

Similarily, the Player Class also interacts with the Board Class for valid attacks. Since the Board Class keeps track of the positions of where the objectives are in its state, a succesful attack occurs if the player hits ENTER when the position of the player is equal to a position of an objective. The Board class then removes that position in its state.

### The Objectives (the evil little pigs)
is reponsible for all logic related to the Objective(the evil little pigs), such as Objective animation, Objective Capture, and Objective respawning.

Objective animation is handled by its ``animate()`` funciton, and works the same way as the Player's:

![alt text](https://i.imgur.com/JcPE10K.gif)

Because there are more than one objectives on the board at a single time, I decided to construct an **Objective Controller** class that that handles all of the objectives on the board, while the Objective Class handles the logic for a single objective.

This Objective Controller class generates all pigs on the board, and calls on each pigs' animation method so there can be multiple pigs being animated on the board at the same time. Here's what ``generatePigs()`` and ``animatePigs()`` looks like:

```javascript
  generatePigs() {
    for (let i = 0; i < this.maxPigs; i++) {
      let pigX = Math.floor(Math.random() * (8-0) )
      let pigY = Math.floor(Math.random() * (8-0) )

      let pig = new Pig(this.board, pigX, pigY, this);

      this.pigs.push(pig);
      this.board.pigs.push(pig);
    }
   ...
  }

  animatePigs(ctx) {
    if (this.status) {
      for (let i = 0; i < this.pigs.length; i++) {
        let pig = this.pigs[i];

        pig.animate(ctx);
      }
    }
  }
```
As an Objective is created randomly on the board, the Objective Controller keeps track of that objective's existence by storing it's position in its state. It also gives the Board the objective's positiion so that the Board can keep track of which tiles has an objective.

As each objective is captured, the objective's position is removed from the Objective Controllers state (and also the Board's), thus shrinking the amount of objectives its keeping track of. Once the amount of pigs reaches an amount of 1, ``generatePigs()`` is called to spawn even more pigs!!


![alt text](https://i.imgur.com/8z3NeJq.gif)


## MVPs

In NumWarrior, users will be able to:

1. navigate the board tiles by typing the number associated with that tile
2. capture as many objectives generated on the board randomly in under 1:00.
3. see their high scores so users can be motvated to increase their num typing powers!

Through this, numerical data entry is simulated, and players can keep track of how many points they earn.

## Project Timeline

### Day 1: 
      1. Project Setup: build skeleton of the app along with the skeletons for each of the classes. Succesfully render a Board
          on the window!
      2. Review Javascript OOP and Canvas methodology.
      3. Research how to implement appealing design into the app 

### Day 2:
      1. Build the Board class: Succesfully render a board with tiles, with each tile having a number associated with it.
      2. Begin work on User/Objective logic. 
### Day 3:
      1. Build the User Class: Succesfully render the Player! The player should be able to succesfully navigate the board by typing
        the correct numbers shown on the board.
      2. Build the Objective Class: Objectives will Randomly generate on the board! Player should now be able to navigate and capture objectives
### Day 4:
      1. Finish up Game View: Write the logic needed to run the game: implement time, high score display, and gameover logic.
