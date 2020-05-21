import Board from './board';
import Player from './player';
import ObjController from './obj_controller'
import { parse } from 'querystring';

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.board = new Board(this.dimensions);
    this.objController = new ObjController(this.board, this.context);
    this.player = new Player(this.board, this.context, this.objController, this);
    this.frameCount = 0;
    this.status = 'none';

    this.minute = `1`;
    this.seconds = `00`;
    this.timer;
    this.score = `0`


    this.run = this.run.bind(this);
    this.drawGameOver = this.drawGameOver.bind(this);
    
  }
  
  run(c) {
    if (this.status === 'running') {
      this.frameCount += 1;
      
      if (this.frameCount < 2) {
        requestAnimationFrame(this.run);
        return
      }
      
      this.frameCount = 0;
      this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height);
      this.board.animate(this.context);
      this.objController.animatePigs(this.context);
      this.player.animate(this.context);
      this.drawUI();
      
      this.registerListeners();
    
      requestAnimationFrame(this.run);
  }
  }
  

  registerListeners() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown(e) {

    if (e.key === 'Enter') {
      this.player.attacking = true;
      this.player.attack(e);
    }
    // console.log(this.player.attacking)
    this.player.move(e);

  }

  setTimer() {
    this.timer = setInterval( () => {
      if (this.minute === `1` && this.seconds === `00`) {
        
        this.minute = `0`

        this.seconds = `59`;
      } else {

        if (this.seconds <= `10`) {
          let newSec = parseInt(this.seconds, 10) - 1;
          this.seconds = `0${newSec}`;
        } else {
          let newSec = parseInt(this.seconds, 10) - 1;
          this.seconds = newSec.toString();
        }
      }

      if (this.minute === `0` && this.seconds === `00`) {
        this.gameOver();
        console.log('gameover')
      }

    }, 1000)
  }

  drawGameOver() {

    if (this.status === 'done') {
      this.drawUI();
      this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height);
      this.board.drawBackground(this.context)
      this.board.drawBoard(this.context);
    }
  }

  gameOver() {
    this.minute = `0`;
    this.seconds = `00`;
    this.frameCount = 0;
    
    clearInterval(this.timer);
    this.status = 'done';
    this.drawGameOver();
    document.getElementById('enter').style.display = 'block';

    window.removeEventListener('keydown', this.handleKeyDown.bind(this));

  }
  
  drawUI() {
    document.getElementById('time-num').innerHTML = `${this.minute}:${this.seconds}`;
    document.getElementById('score-num').innerHTML = this.score;
  }

  addScore() {
    let newScore = parseInt(this.score, 10) + 100;
    this.score = newScore.toString();
  }

}