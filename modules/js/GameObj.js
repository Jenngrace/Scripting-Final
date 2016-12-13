export default class GameObj {

	constructor( name ) {

		//inherits from generic Javascript Object;

		console.log('in gameObj');

		this.name = name;
		this.id = this.setId();

		

	}//end of construcor

	/**
	* get the id assigned to this object.
	* @returns [string] the name
	*/

	getId() {

		return this.id;
	}

	/** 
	* get the name assigned to this object
	* @returns name
	*/

	getName() {

		return this.name;

	}

	setName ( newName ) {

		this.name = newName;

	}

	/** 

	*generates a unique id for every game obkect
	* @link stackoverflow.com/questions/105034/creae-guid-uuid-in-javascript

	*/


	  setId () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }//end of set id

    show () {

		this.dom.style.display = 'block';

	}

	hide () {

		this.dom.style.display = 'none';

	}

	setBackgroundImage( imgPath ) {

		this.dom.style.backgroundImage = "url('" + imgPath + "')";
	}

	setForegroundimage( imgPath ) {

		let img = new Image();

		img.src = imgPath;

		this.dom.appendChild( img );
	}

	//set the size of an object, in pexils.
	setSize( width, height ) {

		this.dom.style.width = width + 'px';

		this.dom.style.height = height + 'px';

	}

	//set the position of an oject, relative to the enclosing screen object.
	setPosition( top, left ){

		this.dom.style.top = top + 'px';

		this.dom.style.left = left + 'px';


	}



} //end of class
