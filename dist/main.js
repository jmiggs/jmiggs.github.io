/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\n// If obj.hasOwnProperty has been overridden, then calling\n// obj.hasOwnProperty(prop) will break.\n// See: https://github.com/joyent/node/issues/1707\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = function(qs, sep, eq, options) {\n  sep = sep || '&';\n  eq = eq || '=';\n  var obj = {};\n\n  if (typeof qs !== 'string' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n\n  var maxKeys = 1000;\n  if (options && typeof options.maxKeys === 'number') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n  // maxKeys <= 0 means that we should not limit keys count\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, '%20'),\n        idx = x.indexOf(eq),\n        kstr, vstr, k, v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = '';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/querystring-es3/decode.js?");

/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar stringifyPrimitive = function(v) {\n  switch (typeof v) {\n    case 'string':\n      return v;\n\n    case 'boolean':\n      return v ? 'true' : 'false';\n\n    case 'number':\n      return isFinite(v) ? v : '';\n\n    default:\n      return '';\n  }\n};\n\nmodule.exports = function(obj, sep, eq, name) {\n  sep = sep || '&';\n  eq = eq || '=';\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (typeof obj === 'object') {\n    return map(objectKeys(obj), function(k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n      if (isArray(obj[k])) {\n        return map(obj[k], function(v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).join(sep);\n\n  }\n\n  if (!name) return '';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq +\n         encodeURIComponent(stringifyPrimitive(obj));\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\nfunction map (xs, f) {\n  if (xs.map) return xs.map(f);\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n  return res;\n}\n\nvar objectKeys = Object.keys || function (obj) {\n  var res = [];\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);\n  }\n  return res;\n};\n\n\n//# sourceURL=webpack:///./node_modules/querystring-es3/encode.js?");

/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.decode = exports.parse = __webpack_require__(/*! ./decode */ \"./node_modules/querystring-es3/decode.js\");\nexports.encode = exports.stringify = __webpack_require__(/*! ./encode */ \"./node_modules/querystring-es3/encode.js\");\n\n\n//# sourceURL=webpack:///./node_modules/querystring-es3/index.js?");

/***/ }),

/***/ "./src/aud_controller.js":
/*!*******************************!*\
  !*** ./src/aud_controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AudioController; });\n\n\nclass AudioController {\n  constructor(game) {\n    this.game = game;\n    this.bgm; \n    this.attack;\n    this.pigDeath;\n    this.gameOver;\n    this.volume = .50;\n\n    this.muted = false;\n\n    this.loadSounds();\n    this.loadSoundListeners();\n    this.loadMusicUI = this.loadMusicUI.bind(this);\n\n    this.loadMusicUI();\n\n  }\n\n  loadSounds() {\n    let bgm = document.getElementById('bgm')\n    this.bgm = bgm;\n\n    let atk = document.getElementById('attack')\n    this.attack = atk;\n\n    let pigdeath = document.getElementById('pigdeath')\n    this.pigDeath = pigdeath;\n\n\n    let gameover = document.getElementById('gameover');\n    this.gameOver = gameover;\n\n  }\n\n  loadSoundListeners() {\n    window.addEventListener('keydown', this.handleAudKeyDown.bind(this))\n  }\n\n  removeListeners() {\n    window.removeEventListener('keydown', this.handleAudKeyDown.bind(this));\n  }\n\n  loadMusicUI() {\n    let play = document.getElementById('play');\n    let mute = document.getElementById('pause')\n\n    play.addEventListener('click', () => {\n      this.muted = false\n      this.bgm.muted = false;\n\n    })\n\n    mute.addEventListener('click', () => {\n      this.bgm.muted = true;\n      this.muted = true;\n\n    })\n\n  }\n\n  handleAudKeyDown(e) {\n    if (this.game.status === 'running') {\n      if (e.key === 'Enter') {\n        this.attackSound();\n      }\n    }\n  }\n  \n  startBgm() {\n    this.bgm.volume = this.volume - .30;\n    this.bgm.muted = false;\n    this.bgm.play();\n    this.bgm.loop = true;\n  }\n\n  stopBgm() {\n    this.bgm.pause();\n    this.bgm.currentTime = 0;\n  }\n\n  attackSound() {\n    // if (this.game.status ='runnning') {\n      this.attack.volume = this.volume;\n      if (!this.muted) {\n        this.attack.muted = false;\n        this.attack.play();\n      }\n    // }\n  }\n\n  pigDeathSound() {\n    this.pigDeath.volume = this.volume - .20;\n\n    if (!this.muted) {\n      this.pigDeath.muted = false;\n      this.pigDeath.play();\n    }\n  }\n\n  playGameover() {\n    this.gameOver.volume = this.volume - .10;\n\n    if (!this.muted) {\n      this.gameOver.muted = false;\n      this.gameOver.play();\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/aud_controller.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiles */ \"./src/tiles.js\");\n\nconst BG_IMG = new Image();\nBG_IMG.src = './assets/terrain.png';\n\n\n// board shape = [\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1]\n// ]\n\nclass Board {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.cols = 8;\n    this.rows = 8;\n    this.tsize = 55;\n    this.tiles = [];\n    this.status = false;\n    this.pigs = [];\n    this.nums = [\n      1,9,3,4,5,9,3,7,\n      3,8,7,2,6,0,4,1,\n      4,1,0,9,8,3,5,0,\n      7,6,8,5,1,4,7,6,\n      8,9,4,3,2,8,9,3,\n      0,5,7,8,9,7,2,5,\n      3,8,6,1,4,0,1,6,\n      4,1,0,9,2,3,5,0,\n    ];\n\n    this.generateTiles();\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx)\n    this.drawBoard(ctx);\n    this.drawTiles(ctx);\n  }\n  \n  drawBoard(ctx) {\n    for (var c = 0, x=5; c < this.cols; c++, x+=this.tsize) {\n      for (var r = 0, y=5; r < this.rows; r++, y+=this.tsize) {\n        ctx.drawImage(BG_IMG, 320, 224, 62, 62, x,y, this.tsize-1, this.tsize-1);\n      }\n    }\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = `rgb(100, 58, 17)`;\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  generateTiles() {\n    for (var i = 0; i < this.rows; i++) {\n      let gridr = []\n      for (var j = 0; j < this.cols; j++) {\n\n        // let xoff = 12 + c*this.tsize + 22\n        // let yoff = 12 + r*this.tsize + 31\n\n        // if (i === 0 || i === 3 || i === 6 ) {\n        //   let num = nums.splice(-1, 1)[0]\n         \n        //   let tile = new Tiles(this.tsize, num);\n        //   gridr.push(tile);\n        // } else {\n        //   if (i === 2 || i === 7 || i === 1) {\n        //     let num = dnums.splice(-1, 1)[0]\n        //     let tile = new Tiles(this.tsize, num);\n        //     gridr.push(tile);\n        //   } else {\n        //     let num = ddnums.splice(1, 1)[0]\n        //     let tile = new Tiles(this.tsize, num);\n        //     gridr.push(tile);\n\n        //   }\n        // }\n\n        let num = this.nums.splice(0,1)[0]\n        let tile = new _tiles__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.tsize, num);\n        gridr.push(tile);\n      }\n\n      this.tiles.push(gridr)\n    }\n    this.status = true\n  }\n\n  drawTiles(ctx) {\n\n    if (this.status) {\n\n    for (var i = 0; i < this.cols; i++) {\n      for (var j = 0; j < this.rows; j++) {\n        \n        let xoff = 5 + i*this.tsize + 25\n        let yoff = 5 + j*this.tsize + 35\n    \n        let tile = this.tiles[i][j];\n\n        tile.drawTile(ctx, xoff, yoff)\n\n      }\n    }\n  }\n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumWarrior; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _obj_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obj_controller */ \"./src/obj_controller.js\");\n/* harmony import */ var _aud_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aud_controller */ \"./src/aud_controller.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass NumWarrior {\n  constructor(canvas) {\n    this.context = canvas.getContext('2d');\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.audio = new _aud_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.objController = new _obj_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.board, this.audio);\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.board, this.context, this.objController, this);\n\n    this.frameCount = 0;\n    this.status = 'none';\n\n    this.minute = `1`;\n    this.seconds = `00`;\n    this.timer;\n    this.score = `0`\n\n\n    this.run = this.run.bind(this);\n    this.drawGameOver = this.drawGameOver.bind(this);\n    \n  }\n\n  start() {\n\n    this.audio.startBgm();\n    this.run();\n  }\n  \n  run(c) {\n    if (this.status === 'running') {\n      this.frameCount += 1;\n      \n      if (this.frameCount < 2) {\n        requestAnimationFrame(this.run);\n        return\n      }\n      \n      this.frameCount = 0;\n      this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height);\n      this.board.animate(this.context);\n      this.objController.animatePigs(this.context);\n      this.player.animate(this.context);\n      this.drawUI();\n      \n      this.registerListeners();\n    \n      requestAnimationFrame(this.run);\n  }\n  }\n  \n\n  registerListeners() {\n    window.addEventListener('keydown', this.handleKeyDown.bind(this))\n  }\n\n  handleKeyDown(e) {\n\n    if (e.key === 'Enter') {\n\n      this.player.attacking = true;\n      this.player.attack(e);\n    }\n    // console.log(this.player.attacking)\n    this.player.move(e);\n\n  }\n\n  setTimer() {\n    this.timer = setInterval( () => {\n      if (this.minute === `1` && this.seconds === `00`) {\n        \n        this.minute = `0`\n\n        this.seconds = `59`;\n      } else {\n\n        if (this.seconds <= `10`) {\n          let newSec = parseInt(this.seconds, 10) - 1;\n          this.seconds = `0${newSec}`;\n        } else {\n          let newSec = parseInt(this.seconds, 10) - 1;\n          this.seconds = newSec.toString();\n        }\n      }\n\n      if (this.minute === `0` && this.seconds === `00`) {\n        this.gameOver();\n      }\n      \n    }, 1000)\n  }\n  \n  drawGameOver() {\n    \n    if (this.status === 'done') {\n      this.drawUI();\n      this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height);\n      this.board.drawBackground(this.context)\n      this.board.drawBoard(this.context);\n    }\n  }\n  \n  gameOver() {\n\n    this.status = 'done';\n\n\n    this.minute = `0`;\n    this.seconds = `00`;\n    this.frameCount = 0;\n    \n    clearInterval(this.timer);\n    this.audio.stopBgm();\n    this.audio.playGameover();\n    this.drawGameOver();\n\n    window.removeEventListener('keydown', this.handleKeyDown.bind(this));\n    this.audio.removeListeners();\n    document.getElementById('enter').style.display = 'block';\n\n\n  }\n  \n  drawUI() {\n    document.getElementById('time-num').innerHTML = `${this.minute}:${this.seconds}`;\n    document.getElementById('score-num').innerHTML = this.score;\n  }\n\n  addScore() {\n    let newScore = parseInt(this.score, 10) + 100;\n    this.score = newScore.toString();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let canvas = document.getElementById('game');\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  \n\n  document.addEventListener('keydown', (e) => {\n    if (e.code === 'Space') {\n  \n      if (game.status === 'none') {\n        document.getElementById('enter').style.display = 'none';\n        game.status = 'running';\n        game.start();\n        game.setTimer();\n      }\n\n      if (game.status === 'done') {\n\n        document.getElementById('enter').style.display = 'none';\n        game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n        game.status = 'running';\n        game.start();\n        game.setTimer();\n      }\n    }\n\n  })\n})\n  \n\n  \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obj_controller.js":
/*!*******************************!*\
  !*** ./src/obj_controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ObjController; });\n/* harmony import */ var _pig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pig */ \"./src/pig.js\");\n\n\n\nclass ObjController {\n  constructor(board, audController) {\n    this.board = board;\n    this.audio = audController;\n    this.pigs = [];\n    this.maxPigs = 4;\n    this.status = false;\n\n    this.generatePigs();\n  }\n\n  generatePigs() {\n    for (let i = 0; i < this.maxPigs; i++) {\n      let pigX = Math.floor(Math.random() * (8-0) )\n      let pigY = Math.floor(Math.random() * (8-0) )\n\n      let pig = new _pig__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.board, pigX, pigY, this);\n\n      this.pigs.push(pig);\n      this.board.pigs.push(pig);\n    }\n    this.status = true;\n  }\n\n  animatePigs(ctx) {\n    if (this.status) {\n      for (let i = 0; i < this.pigs.length; i++) {\n        let pig = this.pigs[i];\n\n        pig.animate(ctx);\n      }\n    }\n  }\n\n  removePig(pig) {\n\n    for (let i = 0; i < this.pigs.length; i++) {\n      let currPigPos = this.pigs[i].pos;\n\n      if (currPigPos[0] === pig.pos[0] && currPigPos[1] === pig.pos[1]) {\n        this.pigs.splice(i, 1);\n        this.audio.pigDeathSound();\n        if (this.pigs.length === 1) {\n          this.generatePigs();\n        }\n        return\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/obj_controller.js?");

/***/ }),

/***/ "./src/pig.js":
/*!********************!*\
  !*** ./src/pig.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pigs; });\n/* harmony import */ var _obj_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj_controller */ \"./src/obj_controller.js\");\n\n\nclass Pigs {\n  constructor(board, gridX, gridY, objController) {\n    // this.board = board;\n    // this.ctx = ctx;\n    this.posOffX = 20;\n    this.posOffY = -20;\n    this.gridPosX = gridX;\n    this.gridPosY = gridY;\n    this.pos = [gridX, gridY]\n    this.frame = 0;\n    this.scale = board.tsize;\n    this.objController = objController;\n    this.size = 55;\n  \n    this.hit = false;\n    this.hitFrame = 0;\n    this.death = false;\n    this.deathFrame = 0;\n    \n    this.img = new Image;\n    this.img.src = './assets/pig.png';\n    this.hitImg = new Image;\n    this.hitImg.src =  './assets/pighit.png'\n\n    this.deathImg = new Image;\n    this.deathImg.src = './assets/pigdeath.png';\n\n  }\n\n  drawFrame(ctx, frame){\n    let x = 34;\n    let scaleX = this.scale*this.gridPosX;\n    let scaleY = this.scale*this.gridPosY;\n\n    ctx.drawImage(this.img, x*frame, 0, 34, 28 , (this.posOffX+scaleX), (this.posOffY+scaleY), this.size, this.size);\n  }\n\n  drawDeath(ctx, frame){\n    let x = 34;\n    let scaleX = this.scale*this.gridPosX;\n    let scaleY = this.scale*this.gridPosY;\n\n    ctx.drawImage(this.deathImg, x*frame, 0, 34, 28, (this.posOffX+scaleX), (this.posOffY+scaleY), this.size, this.size)\n  }\n  drawHit(ctx, frame){\n    let x = 34;\n    let scaleX = this.scale*this.gridPosX;\n    let scaleY = this.scale*this.gridPosY;\n\n    ctx.drawImage(this.hitImg, x*frame, 0, 34, 28, (this.posOffX+scaleX), (this.posOffY+scaleY), 45, 45 )\n  }\n\n  animate(ctx) {\n    const loop = [0,1,2,3,4,5,6,7,8,9,10];\n    const hitLoop = [0,1,0,1,0];\n\n    if (this.death) {\n      if (this.hit) {\n\n        this.drawHit(ctx, hitLoop[this.deathFrame] );\n        this.deathFrame += 1;\n\n        if (this.deathFrame > 5) {\n          this.deathFrame = 0;\n          this.hit = false;\n        }\n      } else {\n\n        this.drawDeath(ctx, loop[this.deathFrame] );\n        this.deathFrame += 1;\n        if (this.deathFrame > 5) {\n          this.deathFrame = 0;\n          this.objController.removePig(this);\n          this.death = false;\n        }\n      } \n    } else {\n\n      if (this.frame > 9) {\n        this.frame = 0;\n      }\n      this.drawFrame(ctx, loop[this.frame]);\n      this.frame += 1;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/pig.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _obj_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj_controller */ \"./src/obj_controller.js\");\n\n\nclass Player {\n  constructor(board, ctx, objCont, game) {\n    this.pos = [0,0];\n    this.posx = -5;\n    this.posy = -12;\n    this.vel  = board.tsize\n    this.board = board;\n    this.objController = objCont;\n    this.game = game;\n    this.context = ctx;\n    this.validMoves = {};\n    this.nextMove = null;\n    this.frame = 0;\n    this.attackFrame = 0;\n    this.attacking = false\n    this.size = 85;\n\n    this.dirs = {\n      left: [-1,0],\n      right: [1, 0],\n      up: [0,-1],\n      down: [0, 1]\n    };\n    \n    this.img = new Image;\n    this.img.src = './assets/kingidle.png';\n\n    this.aimg = new Image;\n    this.aimg.src = './assets/attack.png';\n\n  }\n\n\n  drawFrame(ctx, frame){\n    let x = 78;\n\n    ctx.drawImage(this.img, x*frame, 0, 65, 55 , this.posx, this.posy, this.size, this.size);\n  }\n\n  drawAction(ctx, frame){\n    let x = 78;\n\n    ctx.drawImage(this.aimg, x*frame, 0, 75, 70, this.posx, this.posy, this.size, this.size)\n  }\n\n  animate(ctx) {\n\n    const loop = [0,1,2,3,4,5,6,7,8,9,10];\n\n    if (this.attacking) {\n      this.drawAction(ctx, loop[this.attackFrame] );\n      this.attackFrame += 1;\n\n      if (this.attackFrame > 3) {\n        this.attackFrame = 0;\n        this.attacking = false;\n      }\n    } else {\n    \n    if (this.frame > 10) {\n      this.frame = 0;\n    }\n    this.drawFrame(ctx, loop[this.frame]);\n    this.frame += 1;\n  }\n  }\n\n  move(e) {\n\n    this.getValidMoves(this.dirs);\n\n    if (this.isValidMove(this.board, e)) {\n      this.updatePos(this.nextMove);\n      this.validMoves = {};\n    }\n  }\n\n  attack(ctx) {\n\n    for (let i = 0; i < this.board.pigs.length; i++) {\n      let targetPigPos = this.board.pigs[i].pos;\n      \n      if (this.pos[0] === targetPigPos[0] && this.pos[1] === targetPigPos[1] ) {\n        let targetPig = this.board.pigs.splice(i, 1);\n        \n        targetPig[0].hit = true;\n        targetPig[0].death = true;\n      \n        this.game.addScore();\n      }\n    }\n  }\n \n\n  getValidMoves(dirs) {\n    var dirKeys = Object.keys(dirs);\n   \n    for (let i = 0; i < dirKeys.length; i++) {\n      let currX = this.pos[0];\n      let currY = this.pos[1];\n\n      let dirX = dirs[dirKeys[i]][0];\n      let dirY = dirs[dirKeys[i]][1];\n\n      let newX = currX + dirX;\n      let newY = currY + dirY;\n\n      if (newX >= 0 && newY >= 0) {\n        if (newX < 8 && newY < 8) {\n          this.validMoves[dirKeys[i]] = [newX, newY]\n        }\n      }\n\n    }\n  }\n\n  isValidMove(board, e) {\n    let valMoves = Object.keys(this.validMoves)\n    \n    for (let i = 0; i < valMoves.length; i++) {\n\n      let x =  this.validMoves[valMoves[i]][0];\n      let y =  this.validMoves[valMoves[i]][1];\n\n      if (board.tiles[x][y].number === parseInt(e.key, 10)) {\n        this.pos = this.validMoves[valMoves[i]];\n        this.nextMove = valMoves[i];\n        return true;\n      }\n    }\n  }\n\n  updatePos(move) {\n    if (move === 'up') {\n      this.posy -= this.vel;\n      return true;\n    }\n    if (move === 'down') {\n      this.posy += this.vel;\n      return true;\n    }\n    \n    if (move === 'left') {\n      this.posx -= this.vel;\n      return true;\n    }\n\n    if (move === 'right') {\n      this.posx += this.vel;\n      return true;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/tiles.js":
/*!**********************!*\
  !*** ./src/tiles.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tiles; });\n\nclass Tiles {\n  constructor(tsize, num) {\n    this.tsize = tsize\n    this.number = num;\n    this.holds = null;\n  }\n\n\n  drawTile(ctx, xoff, yoff) {\n    ctx.fillStyle = 'black';\n    ctx.font = \"20px Georgia\";\n    ctx.fillText(this.number, xoff, yoff)   \n  }\n\n  getTileNum() {\n    return this.number\n  }\n\n}\n\n//# sourceURL=webpack:///./src/tiles.js?");

/***/ })

/******/ });