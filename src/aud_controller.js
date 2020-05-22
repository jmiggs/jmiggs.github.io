

export default class AudioController {
  constructor(game) {
    this.game = game;
    this.bgm; 
    this.attack;
    this.pigDeath;
    this.gameOver;
    this.volume = .60;

    this.loadSounds();
    this.loadSoundListeners();

  }

  loadSounds() {
    let bgm = document.getElementById('bgm')
    this.bgm = bgm;

    let atk = document.getElementById('attack')
    this.attack = atk;

    let pigdeath = document.getElementById('pigdeath')
    this.pigDeath = pigdeath;

    let gameover = document.getElementById('gameover');
    this.gameOver = gameover;
  }

  loadSoundListeners() {
    window.addEventListener('keydown', this.handleAudKeyDown.bind(this))
  }

  removeListeners() {
    window.removeEventListener('keydown', this.handleAudKeyDown.bind(this));
  }

  handleAudKeyDown(e) {
    if (this.game.status === 'running') {
      if (e.key === 'Enter') {
        this.attackSound();
      }
    }
  }
  

  startBgm() {
    this.bgm.volume = this.volume - .10;
    this.bgm.muted = false;
    this.bgm.play();
    this.bgm.loop = true;
  }

  stopBgm() {
    this.bgm.pause();
    this.bgm.currentTime = 0;
  }

  attackSound() {
    // if (this.game.status ='runnning') {
      this.attack.volume = this.volume;
      this.attack.muted = false;
      this.attack.play();
    // }
  }

  pigDeathSound() {
    this.pigDeath.volume = this.volume;
    this.pigDeath.muted = false;
    this.pigDeath.play();
  }

  playGameover() {
    this.gameOver.volume = this.volume - .10;
    this.gameOver.muted = false;
    this.gameOver.play();
  }






}