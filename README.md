# NumWarrior

Do you feel like typing out numbers is troublesome or not as easy as typing words?? Here's a way to get better at doing that!!

## Background
NumWarriors is a game where users can practice their speed and efficiency with a 10key numpad, in a fun way! The game is played on a grid,
and each tile on the board has a randomly generated number displayed to it. To move to a desired tile, the user must type the
tile that is displayed on it. The board will also randomly generate objectives that the user must navigate to using the method 
previously described. once the user has navigated to an objective, the enter button must be pressed to capture that objective.
The game itself is timed at a minute and a half, and the main objective of the game is to capture as many objectives as you can
within that time for a score!!

Through this game design, numerical data entry is mimicked, and users can get faster using the 10key numpad, or just typing out
nums in general, too!

There will also be other symbols such as $, +, * or many others that will be in the game!

## Functionality and MVPs

In NumWarrior, users will be able to:

1. navigate the board tiles by typing the number associated with that tile
2. capture as many objectives generated on the board randomly in under 1:30.
3. see their high scores so users can be motvated to increase their num typing powers!

additionally, users will also be able click a link leading to my Github and Linkedin.

## Design

The design of this app is fairly simple. The game view will be displayed in the center of the window, and will house the board,
of which will fill out 100% of the game view. From there, current score will be displayed on the top right corner, and next to it is the remianing time.
The player will start on the bottom left corner of the tile and will be able to navigate the board to randomly generated objectives!

## Architecture and Technologies

The app will only use Canvas and Javascript and it will contain four classes to run and play:

### Board Class
is responsible for rendering the board; generating tiles and randomly assigning each tile with a number for the player to navigate in.

### The Player
is reponsible for rendering the player on the board and also associated player login such as: player navigation on the board,
and capturing objectives.

### The Objectives
is reponsible for objectives login such as: randomly appearing on a tile on the board as soon as the player captures an objective.
There can be more than one objective on the board at a given time, but is capped at 3.

### the Game View
is simply reponsible for bringing all the above classes together and handles the logic for running the game.

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
      
 Additional Features:
 
  Hardmode: there will be an additional class that players must avoid or they lose score/die!!
  Skin:  players will be able to choose from a variety of skins.
  
  
 
      
      

  




