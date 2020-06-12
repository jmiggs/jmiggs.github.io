import NumWarrior from './game';

const SAVE_KEY_SCORE = "highscore";

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game');
  let game = new NumWarrior(canvas);

  let hiscore = localStorage.getItem(SAVE_KEY_SCORE);
  
  document.getElementById('hiscore-num').innerHTML = hiscore? hiscore: 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
  
      if (game.status === 'none') {
        document.getElementById('enter').style.display = 'none';
        game.status = 'running';
        game.start();
        game.setTimer();
      }

      if (game.status === 'done') {

        document.getElementById('enter2').style.display = 'none';
        game = new NumWarrior(canvas);

        game.status = 'running';
        game.start();
        game.setTimer();
      }
    }

  })
})
  

  
