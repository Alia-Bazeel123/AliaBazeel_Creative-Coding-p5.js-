// Variable to hold the table data
let table;

// Preload function to load the CSV file before the sketch starts
function preload() {
    table = loadTable("HoursOfSunshine.csv", "csv", "header");
}

// Setup function to initialize the canvas and draw static elements
function setup() {
    createCanvas(800, 400);
    background(204, 255, 255);  // Light teal background
    noStroke();
    
    // Draw the title
    textSize(18);
    textStyle(BOLD);
    text('Average Daily Sunshine Hours', 50, 50);
    
    // Draw the bar chart
    drawChart();
}

// Function to draw the bar chart
function drawChart() {
    // Move the origin to the bottom left corner
    translate(0, 350);
    
    // Extract the data from the table
    let data = table.getRow(0).arr;
    let numCols = table.getColumnCount();
    let barWidth = 50;
    let spacing = (width - 100) / numCols;

    // Iterate through the data to draw each bar
    for (let i = 0; i < numCols; i++) {
        let sunshine = parseFloat(data[i]);
        let rectHeight = map(sunshine, 0, 12, 0, 250);
        let lerpAm = map(sunshine, 0, 12, 0, 1);
        let lerpCol = lerpColor(color(135, 206, 250), color(25, 25, 112), lerpAm);
        
        // Set the fill color for the bar
        fill(lerpCol);
        textAlign(CENTER);
        
        // Calculate the x position for the bar
        let x = 50 + i * spacing;
        
        // Draw the bar
        rect(x, 0, barWidth, -rectHeight);
        
        // Draw the sunshine hours label above the bar
        text(sunshine.toFixed(1) + " hrs", x + barWidth / 2, -rectHeight - 10);
        
        // Set the fill color for the text
        fill(0);
        
        // Draw the month label below the bar
        text(table.columns[i], x + barWidth / 2, 20);
    }
}

//The preload function loads the CSV file and specifies it has a header.

//Setup Function: Sets up the canvas and background, then calls drawChart to create the chart.

//Translate: Translates the origin to the bottom left to make the chart drawing easier.

//Data Processing: Extracts data from the CSV file, maps sunshine hours to bar heights, and calculates colors based on sunshine hours.

//Drawing Bars: Iterates through the data, draws bars, and labels them with sunshine hours and month names.
