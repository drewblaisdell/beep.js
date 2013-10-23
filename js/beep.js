(function(window){
	window.AudioContext = window.AudioContext || window.webkitAudioContext;

	var beep = beep || function(){
		this.that = this;

	    this.context = new AudioContext();
		this.oscillator = context.createOscillator();
	    this.oscillator.connect(context.destination);
	    this.oscillator.start(0);

	    setTimeout(function(){
	    	that.oscillator.stop(0);
	    }, 300)
	};

	this.beep = beep;

}).call(this, window);