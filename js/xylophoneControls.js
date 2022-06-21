// @Stuvers #task
"use strict"; 
var isRecording = false;
var musicNotes = [];
var songList = [];
var noteList = [];
var songNo = 0;

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

class Song {
	constructor(id, name, notes) {
		this.id = id;
		this.name = name;
		this.notes = notes;
	}

	playSong() {

		for (let note of this.notes)
		{
			playNote(note);
			console.log(note + " inside play song");

			let now = Date.now();
      		let end = now + 1000;
			
  			while (now < end) 
			{ 
				now = Date.now(); 
			}
		}
	}
}

function createNotes()
{
	// C1 note
	musicNotes[0] = new Note(1, "C1", "music\\xylophone-c.wav", "music\\xylophone-c.wav");
	// D2 note
	musicNotes[1] = new Note(2, "D2", "music\\xylophone-d1.wav", "music\\xylophone-d1.wav");
	// E3 note
	musicNotes[2] = new Note(3, "E3", "music\\xylophone-e1.wav", "music\\xylophone-e1.wav");
	// F4 note
	musicNotes[3] = new Note(4, "F4", "music\\xylophone-f.wav", "music\\xylophone-f.wav");
	// G5 note
	musicNotes[4] = new Note(5, "G5", "music\\xylophone-g.wav", "music\\xylophone-g.wav");
	// A6 note
	musicNotes[5] = new Note(6, "A6", "music\\xylophone-a.wav", "music\\xylophone-a.wav");
	// B7 note
	musicNotes[6] = new Note(7, "B7", "music\\xylophone-b.wav", "music\\xylophone-b.wav");
	// C8 note
	musicNotes[7] = new Note(8, "C8", "music\\xylophone-c2.wav", "music\\xylophone-c2.wav");	
}

// This will eventually be the max allowed songs and notes
// These will be the limits on the site 
const maxSongs = 9;
const maxNotes = 9;

function toggleRecording() {
	let record = document.getElementById("record");

	if (!isRecording)
	{
		noteList = [];
		isRecording = true;
		record.innerHTML = "Stop Recording!";
	}
	else
	{	
		let content = "";

		isRecording = false;
		let song = new Song(songNo, "Recording " + songNo , noteList);
		songList.push(song);
		songNo++;

		UpdateSongList();		

		record.innerHTML = "Start Recording!";
		songNo = songNo++;
	}
}

function UpdateSongList()
{
	let songs = document.getElementById("songs");
	songs.innerHTML = null;

	for (let curSong of songList) {
		let paragraph = document.createElement("div");
		paragraph.className = "singleSong";
		paragraph.id = curSong.name;
		paragraph.innerHTML = `<p> ${curSong.id + 1}. ${curSong.notes}. </p>`;
		songs.appendChild(paragraph);
		let button = document.createElement("button");
		button.innerHTML = "Play Song";
		button.className = "play";
		button.value = curSong.id;
		button.onclick = function() { playSong(curSong.id) };
		songs.appendChild(button);
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
		noteList.push(getNote(note));
		toggleRecording();
		console.log("=10 " + noteList.length);
	}

	playNote(note);
}

function playNote(note) {
	for (let curNote of musicNotes) {
		if (curNote.note === note)
		{
			curNote.playAudio();
		}
	}
}

function getNote(note) {
	let retNote = null;
	for (let curNote of musicNotes) {
		if (curNote.note === note)
		{
			retNote = curNote;
		}
	}

	return retNote;
}

function playSong(id) {
	songList[id].playSong();
}