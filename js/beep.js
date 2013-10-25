(function(window){
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	this.that = this;

	var beep = beep || function(time){
		var time = time || 500;
		beep.oscillator.connect(beep.context.destination);
		beep.oscillator.start(0);

		setTimeout(function(){
			beep.oscillator.disconnect();
		}, time)
	};

	beep.context = beep.context || new AudioContext();
	beep.oscillator = beep.oscillator || beep.context.createOscillator();
	beep.oscillator.type = 1;

	this.beep = beep;

}).call(this, window);