
/*class Sim {

	

	constructor(consumption) {
		//WindSpeed wind = new WindSpeed();
		this.windspeed = 10;
		this.consumption = consumption;
		this.price = this.consumption/this.windspeed;
	}

	getSpeed(){
		return 1;
	}
}

module.exports = Sim;*/

var simulator = function() {};

simulator.info = function(logText) {
    console.log(new Date()+'info:::::'+logText);
};



module.exports = new simulator();