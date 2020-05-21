import ObjController from './obj_controller';

export default class Pigs {
  constructor(board, gridX, gridY, controller) {
    // this.board = board;
    // this.ctx = ctx;
    this.posOffX = 20;
    this.posOffY = -20;
    this.gridPosX = gridX;
    this.gridPosY = gridY;
    this.pos = [gridX, gridY]
    this.frame = 0;
    this.scale = board.tsize;
    this.objController = controller;
    this.size = 55;
  
    this.hit = false;
    this.hitFrame = 0;
    this.death = false;
    this.deathFrame = 0;
    
    this.img = new Image;
    this.img.src = './assets/pig.png';
    this.hitImg = new Image;
    this.hitImg.src =  './assets/pighit.png'

    this.deathImg = new Image;
    this.deathImg.src = './assets/pigdeath.png';

  }

  drawFrame(ctx, frame){
    let x = 34;
    let scaleX = this.scale*this.gridPosX;
    let scaleY = this.scale*this.gridPosY;

    ctx.drawImage(this.img, x*frame, 0, 34, 28 , (this.posOffX+scaleX), (this.posOffY+scaleY), this.size, this.size);
  }

  drawDeath(ctx, frame){
    let x = 34;
    let scaleX = this.scale*this.gridPosX;
    let scaleY = this.scale*this.gridPosY;

    ctx.drawImage(this.deathImg, x*frame, 0, 34, 28, (this.posOffX+scaleX), (this.posOffY+scaleY), this.size, this.size)
  }
  drawHit(ctx, frame){
    let x = 34;
    let scaleX = this.scale*this.gridPosX;
    let scaleY = this.scale*this.gridPosY;

    ctx.drawImage(this.hitImg, x*frame, 0, 34, 28, (this.posOffX+scaleX), (this.posOffY+scaleY), 45, 45 )
  }

  animate(ctx) {
    const loop = [0,1,2,3,4,5,6,7,8,9,10];
    const hitLoop = [0,1,0,1,0];

    if (this.death) {
      if (this.hit) {

        this.drawHit(ctx, hitLoop[this.deathFrame] );
        this.deathFrame += 1;

        if (this.deathFrame > 5) {
          this.deathFrame = 0;
          this.hit = false;
        }
      } else {

        this.drawDeath(ctx, loop[this.deathFrame] );
        this.deathFrame += 1;
        if (this.deathFrame > 5) {
          console.log('hit')
          this.deathFrame = 0;
          this.objController.removePig(this);
          this.death = false;
        
        }
      } 
    } else {

      if (this.frame > 9) {
        this.frame = 0;
      }
      this.drawFrame(ctx, loop[this.frame]);
      this.frame += 1;
    }
  }

}