const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById('play');

const artist = document.getElementById('artist');
const title = document.getElementById('title');
const previous = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [{
    name :'music1',
    title:'TUMSA KOI PYARA',
    artist:'(kumar sanu and alka yagnik)',
},
{
    name :'music2',
    title:'TERA FITOOR',
    artist:'(arjit singh)',
},
{
    name :'music3',
    title:'TUM HI HO',
    artist:'(arjit singh)',
},
{
    name :'music4',
    title:'RAH ME UNSE',
    artist:'(Alka yagnik and kumar sanu)',
},
{
    name :'music5',
    title:'KEH DU TUMHE',
    artist:'(asha bhosle,dj aqeel and kishore)',
},
{
    name :'music6',
    title:'KCH KCH HOTA HAI',
    artist:'(udit narayan and alka yagnik)',
},
{
    name :'music7',
    title:'Marjaavaan',
    artist:'(jubin nautiyal and payal dev)',
},
{
    name :'music8',
    title:'TERE NAAM',
    artist:'(udit narayan and alka yagnik)',
},
{
    name :'music9',
    title:'HAI DIL YE MERA',
    artist:'(arijit singh and shreya ghosal)',
},
]

let isplaying = false;

//  for pause function
const playMusic = ()=>{
    isplaying =true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');     // classList is a DOM property of JavaScript that allows for styling the CSS classes of an element. JavaScript classList is a read-only property that returns the names of the CSS classes.
    // play.classList.replace('fa-pause', 'fa-play');
    img.classList.add('anime');
};

//  for pause function
const pauseMusic = ()=>{
    isplaying =false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
};

play.addEventListener('click' , ()=>{
    if (isplaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

// changing the music 

const loadsong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "./music/" + songs.name + '.mp3';
    // music.src = `music/ ${songs.name}.mp3`;
    img.src = './images/' + songs.name + ".jpg";
};

songIndex = 0;
// loadsong(songs[1]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;  //!important
    // songIndex++;
    loadsong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;  //!important
    // songIndex++;
    loadsong(songs[songIndex]);
    playMusic();
};



next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong);