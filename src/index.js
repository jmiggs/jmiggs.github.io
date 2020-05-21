import NumWarrior from './game';


document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game');
  let game = new NumWarrior(canvas);
  
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {

      if (game.status === 'none') {
        document.getElementById('enter').style.display = 'none';
        game.status = 'running';
        game.run();
        game.setTimer();
      }

      if (game.status === 'done') {

        document.getElementById('enter').style.display = 'none';
        console.log('hit')
        game = new NumWarrior(canvas);

        game.status = 'running';
        game.run();
        game.setTimer();
      }
    }

  })
})
  

  
