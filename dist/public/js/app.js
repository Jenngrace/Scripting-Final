(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animal = function (_Dynamic) {
	_inherits(Animal, _Dynamic);

	function Animal(name, screenId) {
		_classCallCheck(this, Animal);

		console.log('in Animal object, name:' + name + 'screenId' + screenId);

		var _this = _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));

		_this.dom = document.getElementById(screenId);
		_this.show();

		return _this;
	}

	return Animal;
}(_Dynamic3.default);

exports.default = Animal;

},{"./Dynamic.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cage = function (_Static) {
	_inherits(Cage, _Static);

	function Cage(name, screenId) {
		_classCallCheck(this, Cage);

		console.log('in a Zoo Cage, name:' + name + 'screenId:' + screenId);

		var _this = _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));

		_this.dom = document.getElementById(screenId);
		_this.show();

		return _this;
	}

	return Cage;
}(_Static3.default);

exports.default = Cage;

},{"./Static.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_GameObj) {
	_inherits(Dynamic, _GameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in Dynamic');

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	}

	return Dynamic;
}(_GameObj3.default);

exports.default = Dynamic;

},{"./GameObj.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function () {
	function GameObj(name) {
		_classCallCheck(this, GameObj);

		//inherits from generic Javascript Object;

		console.log('in gameObj');

		this.name = name;
		this.id = this.setId();
	} //end of construcor

	/**
 * get the id assigned to this object.
 * @returns [string] the name
 */

	_createClass(GameObj, [{
		key: 'getId',
		value: function getId() {

			return this.id;
		}

		/** 
  * get the name assigned to this object
  * @returns name
  */

	}, {
		key: 'getName',
		value: function getName() {

			return this.name;
		}
	}, {
		key: 'setName',
		value: function setName(newName) {

			this.name = newName;
		}

		/** 
  	*generates a unique id for every game obkect
  * @link stackoverflow.com/questions/105034/creae-guid-uuid-in-javascript
  	*/

	}, {
		key: 'setId',
		value: function setId() {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now(); //use high-precision timer if available
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
			return uuid;
		} //end of set id

	}, {
		key: 'show',
		value: function show() {

			this.dom.style.display = 'block';
		}
	}, {
		key: 'hide',
		value: function hide() {

			this.dom.style.display = 'none';
		}
	}, {
		key: 'setBackgroundImage',
		value: function setBackgroundImage(imgPath) {

			this.dom.style.backgroundImage = "url('" + imgPath + "')";
		}
	}, {
		key: 'setForegroundimage',
		value: function setForegroundimage(imgPath) {

			var img = new Image();

			img.src = imgPath;

			this.dom.appendChild(img);
		}

		//set the size of an object, in pexils.

	}, {
		key: 'setSize',
		value: function setSize(width, height) {

			this.dom.style.width = width + 'px';

			this.dom.style.height = height + 'px';
		}

		//set the position of an oject, relative to the enclosing screen object.

	}, {
		key: 'setPosition',
		value: function setPosition(top, left) {

			this.dom.style.top = top + 'px';

			this.dom.style.left = left + 'px';
		}
	}]);

	return GameObj;
}(); //end of class


exports.default = GameObj;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScreen = function (_Screen) {
	_inherits(GameScreen, _Screen);

	function GameScreen(name) {
		_classCallCheck(this, GameScreen);

		console.log('in GameScreen');

		var _this = _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, name));

		_this.dom = document.getElementById('game-screen');
		_this.setBackgroundImage('img/screens/game-screen.png');

		return _this;
	} // end of constructor

	/** 
  * create game objects
  *  - add a Zoo
  *    - add 4 Cages
  *    - add 4 Animals
  *  - add a Trump
  *  - add a Player
  */


	_createClass(GameScreen, [{
		key: 'build',
		value: function build() {

			console.log('building the game...');

			// add a Zoo (4 Animals and 4 Cages go inside it)

			this.zoo = new _Zoo2.default('Funky Zoo');

			this.zoo.build(); // make Zoo add Cages and Animals

			this.dom.appendChild(this.zoo.dom);

			// add a Trump

			this.trump = new _Trump2.default('Donald Presidentia Trump', 440, 245);

			// add a Player

			this.player = new _Player2.default('myself', 500, 245, this.trump);
		}
	}]);

	return GameScreen;
}(_Screen3.default); // end of class


exports.default = GameScreen;

},{"./Player.js":8,"./Screen.js":10,"./Trump.js":13,"./Zoo.js":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HUD = function (_GameObj) {
	_inherits(HUD, _GameObj);

	function HUD(name) {
		_classCallCheck(this, HUD);

		console.log('in HUD');

		return _possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this, name));
	} // end of constructor

	return HUD;
}(_GameObj3.default); // end of class


exports.default = HUD;

},{"./GameObj.js":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LostScreen = function (_Screen) {
	_inherits(LostScreen, _Screen);

	function LostScreen(name, screenArray) {
		_classCallCheck(this, LostScreen);

		console.log('in LostScreen');

		var _this = _possibleConstructorReturn(this, (LostScreen.__proto__ || Object.getPrototypeOf(LostScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('lost-screen');

		console.log("THIS DOM:" + _this.dom);

		_this.setBackgroundImage('img/screens/lost-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return LostScreen;
}(_Screen3.default); // end of class


exports.default = LostScreen;

},{"./Screen.js":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name, top, left, trump) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));

		console.log('in Player Object name:' + name + 'trump:' + trump);
		_this.trump = trump; //local reference to Trump


		_this.dom = document.getElementById('player');

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		document.addEventListener('keydown', function (event) {
			return _this.slew(event);
		}, false);

		document.addEventListener('keyup', function (event) {
			return _this.unkick(event);
		}, false);

		_this.show();
		return _this;
	}

	_createClass(Player, [{
		key: 'slew',
		value: function slew(event) {

			console.log('in slew');

			var currentX = parseInt(this.dom.style.left);
			var currentY = parseInt(this.dom.style.top);
			console.log("event.keyCode:" + event.keyCode + ' x:' + currentX + ' y:' + currentY);

			switch (event.keyCode) {

				case 37:
					//left arrow
					currentX -= 2;
					this.setPosition(currentY, currentX);
					break;

				case 39:
					//right arrow
					currentX += 2;
					this.setPosition(currentY, currentX);
					break;

				case 32:
					//space bar
					if (currentY < 496) return;
					currentY -= 4;
					this.setPosition(currentY, currentX);
					this.checkForTrump(currentY, currentX);
					break;
			}
			console.log('in slew');
		}
	}, {
		key: 'unkick',
		value: function unkick(event) {

			console.log('in unkick (when spacebar is un-pressed');

			var currentX = parseInt(this.dom.style.left);
			var currentY = parseInt(this.dom.style.top);

			switch (event.keyCode) {

				case 32:
					//space bar
					currentY -= 4;
					this.setPosition(currentY, currentX);
					break;
			}
		}
	}, {
		key: 'checkForTrump',
		value: function checkForTrump(top, left) {

			var trumpCurrentX = parseInt(this.trump.dom.style.left);
			var trumpCurrentY = parseInt(this.trump.dom.style.top);

			console.log('top:' + top + ' left:' + left + ' trumpTop:' + trumpCurrentY + ' trumpLeft:' + trumpCurrentX);

			// if trump is approximatley above the palyer, order his to be kicked
			if (trumpCurrentY > 590 && trumpCurrentX > left && trumpCurrentX < left + 50) {

				trump.startPingPong();
			}
		}
	}]);

	return Player;
}(_Dynamic3.default);

exports.default = Player;

},{"./Dynamic.js":3}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _HUD2 = require('./HUD.js');

var _HUD3 = _interopRequireDefault(_HUD2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_HUD) {
	_inherits(Score, _HUD);

	function Score(name) {
		_classCallCheck(this, Score);

		console.log('in Score');

		var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));

		_this.dom = document.getElementById('game-score');

		return _this;
	} // end of constructor

	return Score;
}(_HUD3.default); // end of class


exports.default = Score;

},{"./HUD.js":6}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_GameObj) {
	_inherits(Screen, _GameObj);

	function Screen(name, screenArray) {
		_classCallCheck(this, Screen);

		console.log('in Screen, name:' + name + ' screens:' + screenArray);

		var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));

		_this.setScreens(screenArray);

		return _this;
	} // end of constructor

	_createClass(Screen, [{
		key: 'setScreens',
		value: function setScreens(screenArray) {

			console.log("in setScreens, screens:" + screenArray);

			this.screens = screenArray;
		}
	}, {
		key: 'getStartButton',
		value: function getStartButton() {

			this.startButton = this.dom.getElementsByClassName('game-start')[0];
		}
	}, {
		key: 'getExitButton',
		value: function getExitButton() {

			this.exitButton = this.dom.getElementsByClassName('game-exit')[0];
		}
	}]);

	return Screen;
}(_GameObj3.default); // end of class


exports.default = Screen;

},{"./GameObj.js":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name, screenArray) {
		_classCallCheck(this, StartScreen);

		console.log('in StartScreen, name:' + name + " screens:" + screenArray);

		var _this = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('start-screen');

		_this.setBackgroundImage('img/screens/start-screen.png');

		_this.getStartButton(); // defined in Screen.js


		//Wire up the start button to lead the GameScreen
		_this.startButton.addEventListener('click', function () {

			///alert(' I am in screen:' + this.name );

			_this.screens['start'].hide(); // hide myself

			_this.screens['game'].show(); // show the game screen

			_this.screens['game'].build(); // rebuild the game with all its objects
		});

		_this.getExitButton();

		return _this;
	} // end of constructor


	return StartScreen;
}(_Screen3.default); // end of class


exports.default = StartScreen;

},{"./Screen.js":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static = function (_GameObj) {
	_inherits(Static, _GameObj);

	function Static(name) {
		_classCallCheck(this, Static);

		console.log('in Static');

		return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).call(this, name));
	}

	return Static;
}(_GameObj3.default);

exports.default = Static;

},{"./GameObj.js":4}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name, top, left) {
		_classCallCheck(this, Trump);

		console.log('in Trump object, name:' + name);

		var _this = _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));

		_this.dom = document.getElementById('trump');
		_this.dom.style.top = top = 'px';
		_this.dom.style.left = left = 'px';

		_this.initPingPong();

		_this.show();

		return _this;
	}

	_createClass(Trump, [{
		key: 'initPingPong',
		value: function initPingPong() {
			console.log("in pingpong");
		}
	}, {
		key: 'startPingPong',
		value: function startPingPong() {
			var _this2 = this;

			console.log(" I Am KiCKED!!! in trump.startPingPong()");
			this.intervalId = setInterval(function () {
				return _this2.doPingPong;
			}, 40);
		}
	}, {
		key: 'doPingPong',
		value: function doPingPong() {}
	}, {
		key: 'stopPingPong',
		value: function stopPingPong() {

			clearInterval(this.intervalId);
		}
	}]);

	return Trump;
}(_Dynamic3.default);

exports.default = Trump;

},{"./Dynamic.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WonScreen = function (_Screen) {
	_inherits(WonScreen, _Screen);

	function WonScreen(name, screenArray) {
		_classCallCheck(this, WonScreen);

		console.log('in WonScreen');

		var _this = _possibleConstructorReturn(this, (WonScreen.__proto__ || Object.getPrototypeOf(WonScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('won-screen');

		_this.setBackgroundImage('img/screens/won-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return WonScreen;
}(_Screen3.default); // end of class


exports.default = WonScreen;

},{"./Screen.js":10}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in Zoo');
		// end of constructor

		var _this = _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));

		_this.dom = document.createElement('div');
		return _this;
	}

	_createClass(Zoo, [{
		key: 'build',
		value: function build() {

			console.log('in Zoo build...');

			this.cages = [];

			this.cages.push(new _Cage2.default('Cage #1', 'cage1')); // or, this.cages[0] = new Cage(....)
			this.cages.push(new _Cage2.default('Cage #2', 'cage2')); // 
			this.cages.push(new _Cage2.default('Cage #3', 'cage3'));
			this.cages.push(new _Cage2.default('Cage #4', 'cage4'));

			this.animals = [];

			this.animals.push(new _Animal2.default('Angry Lion', 'lion'));
			this.animals.push(new _Animal2.default('Raging Tiger', 'tiger'));
			this.animals.push(new _Animal2.default('Mauling Bear', 'bear'));
			this.animals.push(new _Animal2.default('Rampaging Gorilla', 'gorilla'));
		}
	}]);

	return Zoo;
}(_Static3.default); // end of class


exports.default = Zoo;

},{"./Animal.js":1,"./Cage.js":2,"./Static.js":12}],16:[function(require,module,exports){
'use strict';

var _GameObj = require('./GameObj.js');

var _GameObj2 = _interopRequireDefault(_GameObj);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _WonScreen = require('./WonScreen.js');

var _WonScreen2 = _interopRequireDefault(_WonScreen);

var _LostScreen = require('./LostScreen.js');

var _LostScreen2 = _interopRequireDefault(_LostScreen);

var _HUD = require('./HUD.js');

var _HUD2 = _interopRequireDefault(_HUD);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Static = require('./Static.js');

var _Static2 = _interopRequireDefault(_Static);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _Dynamic = require('./Dynamic.js');

var _Dynamic2 = _interopRequireDefault(_Dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//static object


//hud object
//maste object.
console.log('loading game.');

//global storage of all screebs created


//dynamic object


//screen objects
window.gameScreens = [];

window.startScreen = new _StartScreen2.default('ZooKill start', window.gameScreens);
window.gameScreens['start'] = window.startScreen;

window.gameScreen = new _GameScreen2.default('zookill Game', window.gameScreens);
window.gameScreens['game'] = window.gameScreen;

window.wonScreen = new _WonScreen2.default('zookill You won', window.gameScreens);
window.gameScreens['won'] = window.wonScreen;

window.lossScreen = new _LostScreen2.default('zookill You loss', window.gameScreens);
window.gameScreens['lost'] = window.lostScreen;

window.score = new _Score2.default('game score object');

//window.zoo = new Zoo('zoo object');
//window.cage = new Cage('cage object');


//start the game.....
window.startScreen.show();

//create a general object

//window.obj = new gameObj('donald trump');

//window.obj2 = new Screen('start Screen');

//window.ob3 = new HUD('game score');

},{"./Cage.js":2,"./Dynamic.js":3,"./GameObj.js":4,"./GameScreen.js":5,"./HUD.js":6,"./LostScreen.js":7,"./Score.js":9,"./Screen.js":10,"./StartScreen.js":11,"./Static.js":12,"./WonScreen.js":14,"./Zoo.js":15}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvR2FtZU9iai5qcyIsIm1vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyIsIm1vZHVsZXMvanMvSFVELmpzIiwibW9kdWxlcy9qcy9Mb3N0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXIuanMiLCJtb2R1bGVzL2pzL1Njb3JlLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWMuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9Xb25TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1pvby5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixpQkFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQStCO0FBQUE7O0FBRTlCLFVBQVEsR0FBUixDQUFZLDRCQUE0QixJQUE1QixHQUFtQyxVQUFuQyxHQUFnRCxRQUE1RDs7QUFGOEIsOEdBSXZCLElBSnVCOztBQU0vQixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWDtBQUNELFFBQUssSUFBTDs7QUFQZ0M7QUFTOUI7Ozs7O2tCQVhtQixNOzs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFFcEIsZUFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQStCO0FBQUE7O0FBRTlCLFVBQVEsR0FBUixDQUFZLHlCQUF5QixJQUF6QixHQUFnQyxXQUFoQyxHQUE4QyxRQUExRDs7QUFGOEIsMEdBSXZCLElBSnVCOztBQU0vQixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0Is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QXRDOztBQUVBLE9BQU8sS0FBUCxHQUFlLG9CQUFVLG1CQUFWLENBQWY7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQSxPQUFPLFdBQVAsQ0FBbUIsSUFBbkI7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWFsIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHNjcmVlbklkICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEFuaW1hbCBvYmplY3QsIG5hbWU6JyArIG5hbWUgKyAnc2NyZWVuSWQnICsgc2NyZWVuSWQpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmVlbklkKTtcbnRoaXMuc2hvdygpIFxuXG5cdH1cblxuXG59IiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBTdGF0aWMge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5JZCApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBhIFpvbyBDYWdlLCBuYW1lOicgKyBuYW1lICsgJ3NjcmVlbklkOicgKyBzY3JlZW5JZCApO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmVlbklkKTtcbnRoaXMuc2hvdygpXG5cblxuXHR9XG5cblxufSIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBEeW5hbWljJyApO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqIHtcblxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdC8vaW5oZXJpdHMgZnJvbSBnZW5lcmljIEphdmFzY3JpcHQgT2JqZWN0O1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIGdhbWVPYmonKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5pZCA9IHRoaXMuc2V0SWQoKTtcblxuXHRcdFxuXG5cdH0vL2VuZCBvZiBjb25zdHJ1Y29yXG5cblx0LyoqXG5cdCogZ2V0IHRoZSBpZCBhc3NpZ25lZCB0byB0aGlzIG9iamVjdC5cblx0KiBAcmV0dXJucyBbc3RyaW5nXSB0aGUgbmFtZVxuXHQqL1xuXG5cdGdldElkKCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHQvKiogXG5cdCogZ2V0IHRoZSBuYW1lIGFzc2lnbmVkIHRvIHRoaXMgb2JqZWN0XG5cdCogQHJldHVybnMgbmFtZVxuXHQqL1xuXG5cdGdldE5hbWUoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXG5cdH1cblxuXHRzZXROYW1lICggbmV3TmFtZSApIHtcblxuXHRcdHRoaXMubmFtZSA9IG5ld05hbWU7XG5cblx0fVxuXG5cdC8qKiBcblxuXHQqZ2VuZXJhdGVzIGEgdW5pcXVlIGlkIGZvciBldmVyeSBnYW1lIG9ia2VjdFxuXHQqIEBsaW5rIHN0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYWUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcblxuXHQqL1xuXG5cblx0ICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfS8vZW5kIG9mIHNldCBpZFxuXG4gICAgc2hvdyAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHR9XG5cblx0aGlkZSAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdH1cblxuXHRzZXRCYWNrZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBpbWdQYXRoICsgXCInKVwiO1xuXHR9XG5cblx0c2V0Rm9yZWdyb3VuZGltYWdlKCBpbWdQYXRoICkge1xuXG5cdFx0bGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0aW1nLnNyYyA9IGltZ1BhdGg7XG5cblx0XHR0aGlzLmRvbS5hcHBlbmRDaGlsZCggaW1nICk7XG5cdH1cblxuXHQvL3NldCB0aGUgc2l6ZSBvZiBhbiBvYmplY3QsIGluIHBleGlscy5cblx0c2V0U2l6ZSggd2lkdGgsIGhlaWdodCApIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXHR9XG5cblx0Ly9zZXQgdGhlIHBvc2l0aW9uIG9mIGFuIG9qZWN0LCByZWxhdGl2ZSB0byB0aGUgZW5jbG9zaW5nIHNjcmVlbiBvYmplY3QuXG5cdHNldFBvc2l0aW9uKCB0b3AsIGxlZnQgKXtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cblxuXHR9XG5cblxuXG59IC8vZW5kIG9mIGNsYXNzXG4iLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBab28gZnJvbSAnLi9ab28uanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEdhbWVTY3JlZW4nKVxuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdnYW1lLXNjcmVlbicgKTtcbnRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCAnaW1nL3NjcmVlbnMvZ2FtZS1zY3JlZW4ucG5nJyk7XG5cblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdC8qKiBcblx0ICogY3JlYXRlIGdhbWUgb2JqZWN0c1xuXHQgKiAgLSBhZGQgYSBab29cblx0ICogICAgLSBhZGQgNCBDYWdlc1xuXHQgKiAgICAtIGFkZCA0IEFuaW1hbHNcblx0ICogIC0gYWRkIGEgVHJ1bXBcblx0ICogIC0gYWRkIGEgUGxheWVyXG5cdCAqL1xuXHRidWlsZCAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyggJ2J1aWxkaW5nIHRoZSBnYW1lLi4uJyApO1xuXG5cdFx0Ly8gYWRkIGEgWm9vICg0IEFuaW1hbHMgYW5kIDQgQ2FnZXMgZ28gaW5zaWRlIGl0KVxuXG5cdFx0dGhpcy56b28gPSBuZXcgWm9vKCAnRnVua3kgWm9vJyApO1xuXG5cdFx0dGhpcy56b28uYnVpbGQoKTsgLy8gbWFrZSBab28gYWRkIENhZ2VzIGFuZCBBbmltYWxzXG5cdFxuXHR0aGlzLmRvbS5hcHBlbmRDaGlsZCggdGhpcy56b28uZG9tICk7XG5cbiBcblx0XHQvLyBhZGQgYSBUcnVtcFxuXG5cdFx0dGhpcy50cnVtcCA9IG5ldyBUcnVtcCggJ0RvbmFsZCBQcmVzaWRlbnRpYSBUcnVtcCcsIDQ0MCwgMjQ1ICApO1xuXG5cdFx0Ly8gYWRkIGEgUGxheWVyXG5cblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoICdteXNlbGYnLCA1MDAsIDI0NSwgdGhpcy50cnVtcCApO1xuXG5cbn1cblxufSAvLyBlbmQgb2YgY2xhc3NcblxuIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFVEIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gSFVEJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvc3RTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBMb3N0U2NyZWVuJyk7XG5cblx0XHRzdXBlciggbmFtZSwgc2NyZWVuQXJyYXkgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb3N0LXNjcmVlbicgKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiVEhJUyBET006XCIgKyB0aGlzLmRvbSlcblxuXHRcdHRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCAnaW1nL3NjcmVlbnMvbG9zdC1zY3JlZW4ucG5nJyApO1xuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcbiBcblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yKCBuYW1lLCB0b3AsIGxlZnQsIHRydW1wICkge1xuXG5cdFx0XG5cdFx0c3VwZXIoIG5hbWUgKTsgXG5jb25zb2xlLmxvZygnaW4gUGxheWVyIE9iamVjdCBuYW1lOicgKyBuYW1lICsgJ3RydW1wOicgKyB0cnVtcCk7XG5cdFx0dGhpcy50cnVtcCA9IHRydW1wOyAvL2xvY2FsIHJlZmVyZW5jZSB0byBUcnVtcFxuXG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKTtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG5cdFx0dGhpcy5kb20uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHRoaXMuc2xldyhldmVudCksIGZhbHNlKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4gdGhpcy51bmtpY2soZXZlbnQpLCBmYWxzZSk7XG5cblx0XHR0aGlzLnNob3coKTtcblx0fVxuXG5cdHNsZXcoZXZlbnQpIHtcblxuY29uc29sZS5sb2cgKCdpbiBzbGV3Jyk7XG5cblxuXHRcdGxldCBjdXJyZW50WCA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLmxlZnQpO1xuXHRcdGxldCBjdXJyZW50WSA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLnRvcCk7XG5jb25zb2xlLmxvZyhcImV2ZW50LmtleUNvZGU6XCIgKyBldmVudC5rZXlDb2RlICsgJyB4OicgKyBjdXJyZW50WCArICcgeTonICsgY3VycmVudFkpXG5cblxuXHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG5cblx0XHRcdGNhc2UgMzc6IC8vbGVmdCBhcnJvd1xuXHRcdFx0XHRjdXJyZW50WCAtPSAyO1xuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM5OiAvL3JpZ2h0IGFycm93XG5cdFx0XHRcdGN1cnJlbnRYICs9IDI7XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzI6IC8vc3BhY2UgYmFyXG5cdFx0XHRcdGlmKCBjdXJyZW50WSA8IDQ5NikgcmV0dXJuO1xuXHRcdFx0XHRjdXJyZW50WSAtPSA0O1xuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdHRoaXMuY2hlY2tGb3JUcnVtcChjdXJyZW50WSwgY3VycmVudFgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdGNvbnNvbGUubG9nKCdpbiBzbGV3Jyk7XG5cblx0fVxuXG5cblxuXHR1bmtpY2soZXZlbnQpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiB1bmtpY2sgKHdoZW4gc3BhY2ViYXIgaXMgdW4tcHJlc3NlZCcpO1xuXHRcdFxuXHRcdGxldCBjdXJyZW50WCA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLmxlZnQpO1xuXHRcdGxldCBjdXJyZW50WSA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLnRvcCk7XG5cblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG5cblxuXHRcdFx0XHRcdGNhc2UgMzI6IC8vc3BhY2UgYmFyXG5cdFx0XHRcdGN1cnJlbnRZIC09IDQ7XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0fVxuXG5jaGVja0ZvclRydW1wKHRvcCwgbGVmdCkge1xuXG5cdGxldCB0cnVtcEN1cnJlbnRYID0gcGFyc2VJbnQodGhpcy50cnVtcC5kb20uc3R5bGUubGVmdCk7XG5cdGxldCB0cnVtcEN1cnJlbnRZID0gcGFyc2VJbnQodGhpcy50cnVtcC5kb20uc3R5bGUudG9wKTtcblxuXHRjb25zb2xlLmxvZygndG9wOicgKyB0b3AgKyAnIGxlZnQ6JyArIGxlZnQgKyAnIHRydW1wVG9wOicgKyB0cnVtcEN1cnJlbnRZICsgJyB0cnVtcExlZnQ6JyArIHRydW1wQ3VycmVudFgpO1xuXG5cdC8vIGlmIHRydW1wIGlzIGFwcHJveGltYXRsZXkgYWJvdmUgdGhlIHBhbHllciwgb3JkZXIgaGlzIHRvIGJlIGtpY2tlZFxuXHRpZiggdHJ1bXBDdXJyZW50WSA+IDU5MCAmJiB0cnVtcEN1cnJlbnRYID4gbGVmdCAmJiB0cnVtcEN1cnJlbnRYIDwgbGVmdCArIDUwKSB7XG5cblxuXHRcdHRydW1wLnN0YXJ0UGluZ1BvbmcoKTtcblx0fVxuXG5cbn1cblxuXG5cbn0iLCJpbXBvcnQgSFVEIGZyb20gJy4vSFVELmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVUQge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFNjb3JlJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2dhbWUtc2NvcmUnICk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gU2NyZWVuLCBuYW1lOicgKyBuYW1lICsgJyBzY3JlZW5zOicgKyBzY3JlZW5BcnJheSk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5zZXRTY3JlZW5zKCBzY3JlZW5BcnJheSApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0c2V0U2NyZWVucyAoIHNjcmVlbkFycmF5ICkge1xuXG5cdFx0Y29uc29sZS5sb2coXCJpbiBzZXRTY3JlZW5zLCBzY3JlZW5zOlwiICsgc2NyZWVuQXJyYXkgKVxuXHRcdFxuXHRcdHRoaXMuc2NyZWVucyA9IHNjcmVlbkFycmF5O1xuXG5cdH1cblxuXHRnZXRTdGFydEJ1dHRvbiAoKSB7XG5cblx0XHR0aGlzLnN0YXJ0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtc3RhcnQnIClbIDAgXTtcblxuXHR9XG5cblx0Z2V0RXhpdEJ1dHRvbigpIHtcblxuXHRcdHRoaXMuZXhpdEJ1dHRvbiA9IHRoaXMuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdnYW1lLWV4aXQnIClbIDAgXTtcblxuXHR9XG5cbn0gLy8gZW5kIG9mIGNsYXNzXG5cblxuXG4iLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGFydFNjcmVlbiwgbmFtZTonICsgbmFtZSArIFwiIHNjcmVlbnM6XCIgKyBzY3JlZW5BcnJheSk7XG5cblx0XHRzdXBlciggbmFtZSwgc2NyZWVuQXJyYXkgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzdGFydC1zY3JlZW4nICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnICk7XG5cdFx0XG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpOyAvLyBkZWZpbmVkIGluIFNjcmVlbi5qc1xuXG5cblxuLy9XaXJlIHVwIHRoZSBzdGFydCBidXR0b24gdG8gbGVhZCB0aGUgR2FtZVNjcmVlblxuXHRcdHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuXG5cdFx0XHQvLy9hbGVydCgnIEkgYW0gaW4gc2NyZWVuOicgKyB0aGlzLm5hbWUgKTtcblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnc3RhcnQnIF0uaGlkZSgpOyAgLy8gaGlkZSBteXNlbGZcblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnZ2FtZScgXS5zaG93KCk7ICAgLy8gc2hvdyB0aGUgZ2FtZSBzY3JlZW5cblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnZ2FtZScgXS5idWlsZCgpOyAvLyByZWJ1aWxkIHRoZSBnYW1lIHdpdGggYWxsIGl0cyBvYmplY3RzXG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWMgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGF0aWMnICk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH1cblxufSIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXG5cdGNvbnN0cnVjdG9yICggbmFtZSwgdG9wLCBsZWZ0ICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFRydW1wIG9iamVjdCwgbmFtZTonICsgbmFtZSk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG50aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cnVtcCcpO1xudGhpcy5kb20uc3R5bGUudG9wID0gdG9wID0gJ3B4JztcbnRoaXMuZG9tLnN0eWxlLmxlZnQgPSBsZWZ0ID0gJ3B4JztcblxudGhpcy5pbml0UGluZ1BvbmcoKVxuXG50aGlzLnNob3coKTtcblxuXHR9XG5cbmluaXRQaW5nUG9uZyAoKSB7XG5jb25zb2xlLmxvZyhcImluIHBpbmdwb25nXCIpO1xufVxuXG5zdGFydFBpbmdQb25nICgpIHtcblx0Y29uc29sZS5sb2coXCIgSSBBbSBLaUNLRUQhISEgaW4gdHJ1bXAuc3RhcnRQaW5nUG9uZygpXCIpO1xuXHR0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCggKCkgPT4gdGhpcy5kb1BpbmdQb25nLCA0MCApO1xuXG59XG5cbmRvUGluZ1BvbmcgKCkge1xuXG59XG5cbnN0b3BQaW5nUG9uZyAoKSB7XG5cblx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpXG5cbn1cblxufSIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb25TY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBXb25TY3JlZW4nKTtcblxuXHRcdHN1cGVyKCBuYW1lLCBzY3JlZW5BcnJheSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3dvbi1zY3JlZW4nICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL3dvbi1zY3JlZW4ucG5nJyk7XG5cblx0XHR0aGlzLmdldFN0YXJ0QnV0dG9uKCk7XG5cblx0XHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbyBleHRlbmRzIFN0YXRpYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0Y29uc29sZS5sb2coJ2luIFpvbycpO1xuXHQgLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0c3VwZXIoIG5hbWUgKTtcblxudGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHR9XG5cblxuXG5cblx0YnVpbGQoKSB7XG5cblx0XHRjb25zb2xlLmxvZyggJ2luIFpvbyBidWlsZC4uLicgKTtcblxuXHRcdHRoaXMuY2FnZXMgPSBbXTtcblxuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2UoICdDYWdlICMxJywgJ2NhZ2UxJyApICk7IC8vIG9yLCB0aGlzLmNhZ2VzWzBdID0gbmV3IENhZ2UoLi4uLilcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMicsICdjYWdlMicgKSApOyAvLyBcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMycsICdjYWdlMycgKSApO1xuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2UoICdDYWdlICM0JywgJ2NhZ2U0JyApICk7XG5cblxuXHRcdHRoaXMuYW5pbWFscyA9IFtdO1xuXG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdBbmdyeSBMaW9uJywgJ2xpb24nICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ1JhZ2luZyBUaWdlcicsICd0aWdlcicgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnTWF1bGluZyBCZWFyJywgJ2JlYXInICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ1JhbXBhZ2luZyBHb3JpbGxhJywgJ2dvcmlsbGEnICkgKTtcblxuXG5cdH1cblxuXHRcbn0gLy8gZW5kIG9mIGNsYXNzIiwiLy9tYXN0ZSBvYmplY3QuXG5pbXBvcnQgZ2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG4vL3NjcmVlbiBvYmplY3RzXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgV29uU2NyZWVuIGZyb20gJy4vV29uU2NyZWVuLmpzJztcbmltcG9ydCBMb3N0U2NyZWVuIGZyb20gJy4vTG9zdFNjcmVlbi5qcyc7XG5cbi8vaHVkIG9iamVjdFxuaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vc3RhdGljIG9iamVjdFxuaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vWm9vLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5cbi8vZHluYW1pYyBvYmplY3RcbmltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmNvbnNvbGUubG9nKCdsb2FkaW5nIGdhbWUuJyk7XG5cbi8vZ2xvYmFsIHN0b3JhZ2Ugb2YgYWxsIHNjcmVlYnMgY3JlYXRlZFxud2luZG93LmdhbWVTY3JlZW5zID0gW107XG5cbndpbmRvdy5zdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbignWm9vS2lsbCBzdGFydCcsIHdpbmRvdy5nYW1lU2NyZWVucyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdzdGFydCcgXSA9IHdpbmRvdy5zdGFydFNjcmVlbjtcblxud2luZG93LmdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbignem9va2lsbCBHYW1lJywgd2luZG93LmdhbWVTY3JlZW5zKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0gPSB3aW5kb3cuZ2FtZVNjcmVlbjtcblxud2luZG93LndvblNjcmVlbiA9IG5ldyBXb25TY3JlZW4oJ3pvb2tpbGwgWW91IHdvbicsIHdpbmRvdy5nYW1lU2NyZWVucyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICd3b24nIF0gPSB3aW5kb3cud29uU2NyZWVuO1xuXG53aW5kb3cubG9zc1NjcmVlbiA9IG5ldyBMb3N0U2NyZWVuKCd6b29raWxsIFlvdSBsb3NzJywgd2luZG93LmdhbWVTY3JlZW5zKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2xvc3QnIF0gPSB3aW5kb3cubG9zdFNjcmVlbjtcblxud2luZG93LnNjb3JlID0gbmV3IFNjb3JlKCdnYW1lIHNjb3JlIG9iamVjdCcpO1xuXG5cbi8vd2luZG93LnpvbyA9IG5ldyBab28oJ3pvbyBvYmplY3QnKTtcbi8vd2luZG93LmNhZ2UgPSBuZXcgQ2FnZSgnY2FnZSBvYmplY3QnKTtcblxuXG4vL3N0YXJ0IHRoZSBnYW1lLi4uLi5cbndpbmRvdy5zdGFydFNjcmVlbi5zaG93KCk7XG5cblxuXG5cblxuXG4vL2NyZWF0ZSBhIGdlbmVyYWwgb2JqZWN0XG5cbi8vd2luZG93Lm9iaiA9IG5ldyBnYW1lT2JqKCdkb25hbGQgdHJ1bXAnKTtcblxuLy93aW5kb3cub2JqMiA9IG5ldyBTY3JlZW4oJ3N0YXJ0IFNjcmVlbicpO1xuXG4vL3dpbmRvdy5vYjMgPSBuZXcgSFVEKCdnYW1lIHNjb3JlJyk7XG5cblxuXG5cblxuXG4iXX0=
