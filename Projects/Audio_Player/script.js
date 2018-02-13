var slider;
var vol = 0;
var analyzer;
var song1, song2, song3;
var audio = 0;

function preload(){
    soundFormats('ogg', 'mp3');
    song1 = loadSound('songs/02 Thats What You Get.mp3');
    song2 = loadSound('songs/04 Misery Business.mp3');
    song3 = loadSound('songs/08 Crushcrushcrush.mp3');
    
    var arrSong = [song1, song2, song3];
    currentSong = arrSong[0];
}

function setup(){
    
    song1.play();
    song2.play();
    song3.play();
    
    createCanvas(1300,700);
    background(40);
    
    slider = createSlider(0, 100, 100, 0);
    slider.position(width/4, 620);
    slider.style('width', '600px');
    
    
    analyzer = new p5.Amplitude();
        
}

function draw(){
    
    
    if (selection.value === 'Choose a song!! :)'){
        song1.pause();
        song2.pause();
        song3.pause();
    }
    
    else if (selection.value === "Paramore - That's What You Get"){
        song1.setVolume(1);
        
        song2.setVolume(0);
        song2.pause();
        
        song3.setVolume(0);
        song3.pause();
        
        
        audio = song1;
        
        if (button3.state == true && song1.isPaused()){
            audio.play();
            analyzer.setInput(audio);
        }
        
        else if(button3.state == false && song1.isPlaying()){
            audio.pause();
        }
    }
    
    else if (selection.value === 'Paramore - Misery Business'){
        song1.setVolume(0);
        song1.pause();
        
        song2.setVolume(1);
        
        song3.setVolume(0);
        song3.pause();
        
        audio = song2;
        
        if (button3.state == true && song2.isPaused()){
            audio.play();
            analyzer.setInput(audio);
        }
        
        else if(button3.state == false && song2.isPlaying()){
            audio.pause();
        }
    }
    
    else if (selection.value === 'Paramore - Crushcrushcrush'){
        song1.setVolume(0);
        song1.pause();
        song2.setVolume(0);
        song2.pause();
        
        
        song3.setVolume(1);
        audio = song3;
        
        if (button3.state == true && song3.isPaused()){
            audio.play();
            analyzer.setInput(audio);
        }
        
        else if(button3.state == false && song3.isPlaying()){
            audio.pause();
        }
    }

    
    
    background(40);
    var rms = analyzer.getLevel();
    fill('blue');
    stroke(0);
    ellipse(width/2, 200, 10+rms*450, 10+rms*450);
    
    vol = slider.value();
    masterVolume(vol/100);
    //console.log(selection.value);
}

