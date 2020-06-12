import Board from './board';
import Player from './player';
import ObjController from './obj_controller'
import AudioController from './aud_controller';
import { parse } from 'querystring';

const SAVE_KEY_SCORE = "highscore";

export default class NumWarrior {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.board = new Board(this.dimensions);
    this.audio = new AudioController(this);
    this.objController = new ObjController(this.board, this.audio);
    this.player = new Player(this.board, this.context, this.objController, this);

    this.frameCount = 0;
    this.status = 'none';

    this.minute = `1`;
    this.seconds = `00`;
    this.timer;
    this.score = `0`;
    this.hiscore = '0';


    this.run = this.run.bind(this);
    this.drawGameOver = this.drawGameOver.bind(this);
    
  }

  start() {
    this.audio.startBgm();
    this.run();
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
        
        this.minute = `0`;
        this.seconds = `1`;
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

    this.status = 'done';

    this.minute = `0`;
    this.seconds = `00`;
    this.frameCount = 0;
    
    clearInterval(this.timer);
    this.audio.stopBgm();
    this.audio.playGameover();
    this.drawGameOver();

    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
    this.audio.removeListeners();
    document.getElementById('enter2').style.display = 'block';



  }
  
  drawUI() {
    document.getElementById('time-num').innerHTML = `${this.minute}:${this.seconds}`;
    document.getElementById('score-num').innerHTML = this.score;
 
  }

  addScore() {
    let newScore = parseInt(this.score, 10) + 100;
    this.score = newScore.toString();

    let currHiscore = document.getElementById('hiscore-num').innerHTML;

    if (newScore > currHiscore) {
      localStorage.setItem(SAVE_KEY_SCORE, newScore);
      document.getElementById('hiscore-num').innerHTML = newScore;
    }

  }

}