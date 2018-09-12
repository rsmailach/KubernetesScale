
// Notes should play in the following order:
// G  196.00Hz
// A  220.00Hz
// B  246.94Hz
// C  261.63Hz
// D  293.66Hz
// E  329.63Hz
// F# 369.99Hz
/*
// var scaleFrequencyArray = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 369.99];
var AudioContext = window.AudioContext || window.webkitAudioContext;

// Get url parameters 
//var urlParams = new URLSearchParams(window.location.search);
var noteFrequency = 196;// urlParams.get('noteFrequency');
console.log(noteFrequency);

var context = new AudioContext();
//var scaleLength = scaleFrequencyArray.length;
//for(var i = 0; i < scaleLength; i++) {
	// Must create new oscillator for each note, that's just how it works
	var oscillator = context.createOscillator();
	oscillator.type = "sine";
	oscillator.connect(context.destination);
	oscillator.frequency.value = noteFrequency;//scaleFrequencyArray[noteFrequency];
	oscillator.start();

	// Let's play the note for 1 seconds
	setTimeout(function(){ 
		oscillator.stop();
	}, 500); 
//}
*/

  console.log('Hello, world');
const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-type':'text/plain' });
  response.write('Hello, wold');
  response.end();
}).listen(8080);

