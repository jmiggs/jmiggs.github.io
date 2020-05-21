import Tiles from './tiles';
const BG_IMG = new Image();
BG_IMG.src = './assets/terrain.png';


// board shape = [
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1]
// ]

export default class Board {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.cols = 8;
    this.rows = 8;
    this.tsize = 55;
    this.tiles = [];
    this.status = false;
    this.pigs = [];
    this.nums = [
      1,9,3,4,5,9,3,7,
      3,8,7,2,6,0,4,1,
      4,1,0,9,8,3,5,0,
      7,6,8,5,1,4,7,6,
      8,9,4,3,2,8,9,3,
      0,5,7,8,9,7,2,5,
      3,8,6,1,4,0,1,6,
      4,1,0,9,2,3,5,0,
    ];

    this.generateTiles();
  }

  animate(ctx) {
    this.drawBackground(ctx)
    this.drawBoard(ctx);
    this.drawTiles(ctx);
  }
  
  drawBoard(ctx) {
    for (var c = 0, x=5; c < this.cols; c++, x+=this.tsize) {
      for (var r = 0, y=5; r < this.rows; r++, y+=this.tsize) {
        ctx.drawImage(BG_IMG, 320, 224, 62, 62, x,y, this.tsize-1, this.tsize-1);
      }
    }
  }

  drawBackground(ctx) {
    ctx.fillStyle = `rgb(100, 58, 17)`;
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  generateTiles() {
    for (var i = 0; i < this.rows; i++) {
      let gridr = []
      for (var j = 0; j < this.cols; j++) {

        // let xoff = 12 + c*this.tsize + 22
        // let yoff = 12 + r*this.tsize + 31

        // if (i === 0 || i === 3 || i === 6 ) {
        //   let num = nums.splice(-1, 1)[0]
         
        //   let tile = new Tiles(this.tsize, num);
        //   gridr.push(tile);
        // } else {
        //   if (i === 2 || i === 7 || i === 1) {
        //     let num = dnums.splice(-1, 1)[0]
        //     let tile = new Tiles(this.tsize, num);
        //     gridr.push(tile);
        //   } else {
        //     let num = ddnums.splice(1, 1)[0]
        //     let tile = new Tiles(this.tsize, num);
        //     gridr.push(tile);

        //   }
        // }

        let num = this.nums.splice(0,1)[0]
        let tile = new Tiles(this.tsize, num);
        gridr.push(tile);
      }

      this.tiles.push(gridr)
    }
    this.status = true
  }

  drawTiles(ctx) {

    if (this.status) {

    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        
        let xoff = 5 + i*this.tsize + 25
        let yoff = 5 + j*this.tsize + 35
    
        let tile = this.tiles[i][j];

        tile.drawTile(ctx, xoff, yoff)

      }
    }
  }
  }



}