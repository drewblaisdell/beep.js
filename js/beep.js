(function(window){
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	this.that = this;

	var beep = beep || function(time, volume){
		var time = time || 500;
		var volume = volume || 1;

		beep.volume.gain.value = volume;

		beep.oscillator.connect(beep.volume);
		beep.oscillator.start(0);

		setTimeout(function(){
			beep.oscillator.disconnect();
		}, time)
	};

	beep.context = beep.context || new AudioContext();
	beep.oscillator = beep.oscillator || beep.context.createOscillator();
	beep.oscillator.type = 1;
	beep.volume = beep.volume || beep.context.createGainNode();
	beep.volume.connect(beep.context.destination);

	this.beep = beep;

}).call(this, window);