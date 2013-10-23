var context, oscillator;

$(document).ready(function(){
	window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    oscillator = context.createOscillator();

    oscillator.connect(context.destination);

    oscillator.start(0);

	$('#frequency').on('change', function(){

		oscillator.frequency.value = $(this).val();
	});
});