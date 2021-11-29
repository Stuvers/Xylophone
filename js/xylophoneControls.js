// @Stuvers #task 
var isRecording = false;
var songList = [];
var noteList = [];

// This will eventually be the max allowed songs and notes
// These will be the limits on the site 
const maxSongs = 9;
const maxNotes = 9;

function toggleRecording() {
	if (!isRecording)
	{
		isRecording = true;
		document.getElementById("recording").innerHTML = "Stop Recording!";
	}
	else
	{
		isRecording = false;
		songList.push([noteList]);
		noteList = [];
		console.log(songList);
		for (let i = 0; i < songList.length; i++)
		{
			document.getElementById("paragraph").innerHTML = "\n" + songList[i];
			document.getElementById("recording").innerHTML = "Start Recording!";
		}
	}
}

function HitBar(note) {
	let audio;

	if (noteList.length < maxNotes && isRecording)
	{
		noteList.push(note);
		console.log("<10 " + noteList.length);
	}
	else if (noteList.length == maxNotes && isRecording)
	{
		noteList.push(note);
		toggleRecording();
		console.log("=10 " + noteList.length);
	}

	if (note == "C1") {
		audio = new Audio("..\\music\\xylophone-c.wav");
		audio.play();
	}
	else if (note == "D2") {
		audio = new Audio("..\\music\\xylophone-d1.wav");
		audio.play();
	}
	else if (note == "E3") {
		audio = new Audio("..\\music\\xylophone-e1.wav");
		audio.play();
	}
	else if (note == "F4") {
		audio = new Audio("..\\music\\xylophone-f.wav");
		audio.play();
	}
	else if (note == "G5") {
		audio = new Audio("..\\music\\xylophone-g.wav");
		audio.play();
	}
	else if (note == "A6") {
		audio = new Audio("..\\music\\xylophone-a.wav");
		audio.play();
	}
	else if (note == "B7") {
		audio = new Audio("..\\music\\xylophone-b.wav");
		audio.play();
	}
	else if (note == "C8") {
		audio = new Audio("..\\music\\xylophone-c2.wav");
		audio.play();
	}	
}
