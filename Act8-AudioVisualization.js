// Variables to hold the microphone input and FFT analysis
let mic, fft;
let angle = 0;

function setup() {
    // Create a canvas that fills the entire window
    createCanvas(windowWidth, windowHeight);
    
    // Initialize the microphone input
    mic = new p5.AudioIn();
    mic.start();
    
    // Initialize the FFT (Fast Fourier Transform) for audio analysis
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    // Get the amplitude (volume level) of the microphone input
    let amp = mic.getLevel();

    // Create a background with a repeated speaker emoji
    background(30); // Dark background
    textSize(50); // Size of the emoji
    textAlign(CENTER, CENTER); // Center the emoji text
    fill(255, 255, 255, 100); // Semi-transparent white color
    
    // Choose an emoji based on the amplitude level
    let emoji = amp > 0.01 ? "🔊" : "🔈"; // Loudspeaker if sound is detected, otherwise softspeaker
    
    // Draw the emoji repeatedly to create a background pattern
    for (let y = 25; y < height; y += 50) {
        for (let x = 25; x < width; x += 50) {
            text(emoji, x, y);
        }
    }

    // Get the waveform data from the FFT analysis
    let waveform = fft.waveform();

    // Draw the waveform with dynamic colors and animation
    beginShape();
    strokeWeight(3); // Thickness of the waveform lines
    
    // Iterate through the waveform data points
    for (let i = 0; i < waveform.length; i += 5) {
        // Map the waveform data to x and y coordinates
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        
        // Map the data to RGB colors
        let r = map(i, 0, waveform.length, 0, 255);
        let g = map(y, 0, height, 0, 255);
        let b = map(y, height, 0, 0, 255);
        
        // Set the stroke color for the waveform
        stroke(r, g, b);
        
        // Calculate animated positions for the waveform lines
        let r1 = y + cos(angle) * 50;
        let r2 = y + sin(angle) * 50;
        
        // Draw the line segment of the waveform
        line(x, r1, x + 5, r2);
    }
    endShape();

    // Update the angle for the animation
    angle += 0.1;
}
