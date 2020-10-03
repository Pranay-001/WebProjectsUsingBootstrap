var songs=[]
var images=[]
var song =new Audio();
var i=-1;
var flag=true;
var volflag=true;
var prevVol=song.volume;
function addSong(name){
    img="Audio-Images/"+name+".jpg";
    name="Music/"+name+".mp3";
    i=songs.length;
    songs[i]=name;
    images[i]=img;
    play();
}
function mute_unmute(){
    if(volflag){
        prevVol=song.volume;
        document.getElementById("vol-unmute-mute").setAttribute('src','icons/volume-control.png');
        volflag=false;
        song.volume=0;
    }
    else{
        document.getElementById("vol-unmute-mute").setAttribute('src','icons/volume.png');
        volflag=true;
        song.volume=prevVol;
    }
}
function play(){
    if(i<0) return;
    name=songs[i];
    image=images[i];
    document.getElementById("play/pause").setAttribute('src',"icons/pause.png");
    document.getElementById("btm-bar-img").setAttribute('src',image);
    document.getElementById("btm-bar").innerHTML=name.substr(6,name.length-10);
    song.src=name;
    song.play();
    f=false;
}
function play_pause(){
    if(!f){
        document.getElementById("play/pause").setAttribute('src',"icons/play-button.png");
        f=true;
        song.pause();
    }
    else{
        document.getElementById("play/pause").setAttribute('src',"icons/pause.png");
        f=false;
        song.play();
    }
}
function prev(){
    if(i-1>-1){
        i--;
    }
    play();
}
function next(){
    if(i+1<songs.length){
        i++;
        play();
    }
    else{
        play_pause();
    }
    
}
song.addEventListener('timeupdate',function(){
    var pos=song.currentTime/song.duration;
    seeker.style.width=pos*100+'%';
    convertTime(Math.round(song.currentTime));
    document.getElementById("seek-bar").addEventListener('mousedown',function(e){
        let rect=e.target.getBoundingClientRect();
        let x=e.clientX-rect.left;
        let len=this.getBoundingClientRect().right-this.getBoundingClientRect().left;
        let lenper=(x/len)*100;
        let newCurrentTime=(song.duration/100)*lenper;
        song.currentTime=newCurrentTime;
    });
    if(song.ended){
        next();

    }
});

function convertTime(seconds){
    var min=Math.floor(seconds/60);
    var sec=seconds%60
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    document.getElementById("currentTime").innerHTML=min+":"+sec;
    totalTime(Math.round(song.duration));
}
function totalTime(seconds){
    var min=Math.floor(seconds/60);
    var sec=seconds%60
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    document.getElementById("currentTime").innerHTML+="/"+min+":"+sec;
}
function decVol(){
    if(song.volume>0){
        song.volume-=0.20;
    }
}
function incVol(){
    if(song.volume<1){
        song.volume+=0.20;
    }
}