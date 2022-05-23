// @Stuvers #task 
var isRecording = false;
var notes = [];
var songList = [];
var noteList = [];

//note class
class Note {
	constructor(id, note, audio, alternativeAudio) {
		this.id = id;
		this.note = note;
		this.audio = audio;
		this.alternativeAudio = alternativeAudio;
	}

	playAudio() {
		let sound = new Audio(this.audio);
		sound.play();
	}
}

function createNotes()
{
	// C1 note
	notes[0] = new Note(1, "C1", "music\\xylophone-c.wav", "music\\xylophone-c.wav");
	// D2 note
	notes[1] = new Note(2, "D2", "music\\xylophone-d1.wav", "music\\xylophone-d1.wav");
	// E3 note
	notes[2] = new Note(3, "E3", "music\\xylophone-e1.wav", "music\\xylophone-e1.wav");
	// F4 note
	notes[3] = new Note(4, "F4", "music\\xylophone-f.wav", "music\\xylophone-f.wav");
	// G5 note
	notes[4] = new Note(5, "G5", "music\\xylophone-g.wav", "music\\xylophone-g.wav");
	// A6 note
	notes[5] = new Note(6, "A6", "music\\xylophone-a.wav", "music\\xylophone-a.wav");
	// B7 note
	notes[6] = new Note(7, "B7", "music\\xylophone-b.wav", "music\\xylophone-b.wav");
	// C8 note
	notes[7] = new Note(8, "C8", "music\\xylophone-c2.wav", "music\\xylophone-c2.wav");	
}

// This will eventually be the max allowed songs and notes
// These will be the limits on the site 
const maxSongs = 9;
const maxNotes = 9;

function toggleRecording() {
	let record = document.getElementById("record");
	let songs = document.getElementById("songs")

	if (!isRecording)
	{
		isRecording = true;
		record.innerHTML = "Stop Recording!";
	}
	else
	{
		isRecording = false;
		songList.push([noteList]);
		noteList = [];
		console.log(songList);
		
		let content = "";
		for (let i = 0; i < songList.length; i++) {
			content += `${i + 1}. ${songList[i]}. <br>`;
		}
	    
		songs.innerHTML = content;
		record.innerHTML = "Start Recording!";
	}
}

function HitBar(note) {
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

	playNote(note);
}

function playNote(note) {
	for (let curNote of notes) {
		if (curNote.note === note)
		{
			curNote.playAudio();
		}
	}
}