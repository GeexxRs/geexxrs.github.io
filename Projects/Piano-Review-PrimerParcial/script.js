var osc;

function setup(){
    
    osc = new p5.Oscillator();
    osc.amp(1);
    osc.setType("sine");
}
    

function keyPressed(note){
    console.log(note.note);
    
    var fr = midiToFreq(note.note);
    
    if (note.state == true){
        osc.freq(fr);
        osc.start();
    }
    
    else {
        osc.stop();
    }
}