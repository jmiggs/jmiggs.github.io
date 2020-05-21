
export default class Tiles {
  constructor(tsize, num) {
    this.tsize = tsize
    this.number = num;
    this.holds = null;
  }


  drawTile(ctx, xoff, yoff) {
    ctx.fillStyle = 'black';
    ctx.font = "20px Georgia";
    ctx.fillText(this.number, xoff, yoff)   
  }

  getTileNum() {
    return this.number
  }

}