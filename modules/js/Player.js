import Dynamic from './Dynamic.js';

export default class Player extends Dynamic {
	
	constructor( name, top, left, trump ) {

		
		super( name ); 
console.log('in Player Object name:' + name + 'trump:' + trump);
		this.trump = trump; //local reference to Trump


		this.dom = document.getElementById('player');

		this.dom.style.top = top + 'px';
		this.dom.style.left = left + 'px';

		document.addEventListener('keydown', event => this.slew(event), false);

		document.addEventListener('keyup', event => this.unkick(event), false);

		this.show();
	}

	slew(event) {

console.log ('in slew');


		let currentX = parseInt(this.dom.style.left);
		let currentY = parseInt(this.dom.style.top);
console.log("event.keyCode:" + event.keyCode + ' x:' + currentX + ' y:' + currentY)


		switch(event.keyCode) {

			case 37: //left arrow
				currentX -= 2;
				this.setPosition(currentY, currentX);
				break;

			case 39: //right arrow
				currentX += 2;
				this.setPosition(currentY, currentX);
				break;

			case 32: //space bar
				if( currentY < 496) return;
				currentY -= 4;
				this.setPosition(currentY, currentX);
				this.checkForTrump(currentY, currentX);
				break;
		}
	console.log('in slew');

	}



	unkick(event) {

		console.log('in unkick (when spacebar is un-pressed');
		
		let currentX = parseInt(this.dom.style.left);
		let currentY = parseInt(this.dom.style.top);

			switch(event.keyCode) {


					case 32: //space bar
				currentY -= 4;
				this.setPosition(currentY, currentX);
				break;
			}

	}

checkForTrump(top, left) {

	let trumpCurrentX = parseInt(this.trump.dom.style.left);
	let trumpCurrentY = parseInt(this.trump.dom.style.top);

	console.log('top:' + top + ' left:' + left + ' trumpTop:' + trumpCurrentY + ' trumpLeft:' + trumpCurrentX);

	// if trump is approximatley above the palyer, order his to be kicked
	if( trumpCurrentY > 590 && trumpCurrentX > left && trumpCurrentX < left + 50) {


		trump.startPingPong();
	}


}



}