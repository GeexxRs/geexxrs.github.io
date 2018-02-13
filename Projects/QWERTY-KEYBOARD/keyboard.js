var osc;
var env;
var slider;
var vol = 0;

function setup(){
    createCanvas((windowWidth - 16), 460);
    background(75);
    
    slider = createSlider(0, 100, 50, 5);
    slider.position(1000, 250);
    slider.style('width', '100px');
    
    env = new p5.Env();
    env.setADSR(0.01, 0.2, 0.5, 0.7);
    osc = new p5.Oscillator();
    osc.amp(env);
    osc.setType("triangle");
    osc.start();
    
}


//------------------------------------------------
var val = 75;

function draw(){
    fill(val);
    ellipse(1040, 310, 90, 90);
    
    vol = slider.value();
    console.log(vol);
    masterVolume(vol/100);

}


//------------------------------------------------
function keyPressed(){
    console.log("Pressed " + key);
    
    var color = "blue"
    var fr = 0;
    
    switch(key){
            
        case "Q":
            fr = 261.626;
            val = color;
            break;
        
        case "2":
            fr = 277.183;
            val = color;
            break;
            
        case "W":
            fr = 293.665;
            val = color;
            break;
        
        case "3":
            fr = 311.127;
            val = color;
            break;
            
        case "E":
            fr = 329.628;
            val = color;
            break;
        
        case "R":
            fr = 349.228;
            val = color;
            break;
            
        case "5":
            fr = 369.994;
            val = color;
            break;
        
        case "T":
            fr = 391.995;
            val = color;
            break;
            
        case "6":
            fr = 415.305;
            val = color;
            break;
        
        case "Y":
            fr = 440;
            val = color;
            break;
            
        case "7":
            fr = 466.164;
            val = color;
            break;
        
        case "U":
            fr = 493.883;
            val = color;
            break;
        
        case "Z":
        case "I":
            fr = 523.251;
            val = color;
            break;
            
        case "S":
        case "9":
            fr = 554.365;
            val = color;
            break;
        
        case "X":
        case "O":
            fr = 587.330;
            val = color;
            break;
            
        case "D":
        case "0":
            fr = 622.254;
            val = color;
            break;
        
        case "C":
        case "P":
            fr = 659.255;
            val = color;
            break;
            
        case "V":
            fr = 698.456;
            val = color;
            break;
        
        case "G":
            fr = 739.989;
            val = color;
            break;
            
        case "B":
            fr = 783.991;
            val = color;
            break;
        
        case "H":
            fr = 830.609;
            val = color;
            break;
            
        case "N":
            fr = 880;
            val = color;
            break;
        
        case "J":
            fr = 932.328;
            val = color;
            break;
            
        case "M":
            fr = 987.767;
            val = color;
            break;
        
        case "¼":
            fr = 1046.50;
            val = color;
            break;
            
        case "L":
            fr = 1108.73;
            val = color;
            break;
        
        case "¾":
            fr = 1174.66;
            val = color;
            break;
            
        case "º":
            fr = 1244.51;
            val = color;
            break;
        
        case "½":
            fr = 1318.51;
            val = color;
            break;
                        
    }
    
    osc.freq(fr);
    env.triggerAttack();
}


//------------------------------------------------
function keyReleased(){
    console.log("released " + key);
    env.triggerRelease();
    
val = 75;
    
}

