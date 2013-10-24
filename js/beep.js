(function(window){
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	this.that = this;

	var beep = beep || function(){

	    beep.context = beep.context || new AudioContext();
		beep.oscillator = beep.oscillator || beep.context.createOscillator();
	    beep.oscillator.connect(beep.context.destination);
	    beep.oscillator.start(0);

	    setTimeout(function(){
	    	beep.oscillator.disconnect();
	    }, 300)
	};

	this.beep = beep;

}).call(this, window);