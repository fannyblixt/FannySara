
class Sim {

	
	constructor(consumption) {
		//WindSpeed wind = new WindSpeed();
		this.windspeed = 10;
		this.consumption = consumption;
		this.price = this.consumption/this.windspeed;
	}


	getPrice(){
	return this.price;
	}
}

module.exports = Sim;

