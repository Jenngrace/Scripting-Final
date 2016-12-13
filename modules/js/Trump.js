import Dynamic from './Dynamic.js';

export default class Trump extends Dynamic {
	

	constructor ( name, top, left ) {

		console.log('in Trump object, name:' + name);

		super( name );

this.dom = document.getElementById('trump');
this.dom.style.top = top = 'px';
this.dom.style.left = left = 'px';

this.initPingPong()

this.show();

	}

initPingPong () {
console.log("in pingpong");
}

startPingPong () {
	console.log(" I Am KiCKED!!! in trump.startPingPong()");
	this.intervalId = setInterval( () => this.doPingPong, 40 );

}

doPingPong () {

}

stopPingPong () {

	clearInterval(this.intervalId)

}

}