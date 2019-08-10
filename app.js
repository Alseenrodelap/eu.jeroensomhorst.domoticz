'use strict';

const Homey = require('homey');

class DomoticzApp extends Homey.App {

	onInit() {
		this.debug = false;
		this.doLog('Domoticz app started');
		this.doLog("Version: "+this.manifest.version);

		Homey.on('unload',()=>{
			this.doLog('Domoticz app unloaded');
		});
		Homey.on('memwarn',()=>{
			this.doLog('Domoticz app memory warning!');
			// Force garbage collection
			try{
				global.gc();
			}catch(e){}

		});


	}
	doError(msg){

		this.doLog("Error: "+msg);

	}

	doLog(msg){
		//if(this.debug) {

			if (msg instanceof Object) {
				this.log(JSON.stringify(msg));
			} else {
				this.log(msg);
			}
		//}
	}
}

module.exports = DomoticzApp;