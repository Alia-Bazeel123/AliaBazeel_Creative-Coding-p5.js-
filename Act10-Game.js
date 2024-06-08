let astronautX, astronautY; // Astronaut position
let astronautSize = 40; // Astronaut size
let bulletX, bulletY; // Bullet position
let bulletSpeed = 5; // Bullet speed
let bulletFired = false; // Flag to check if bullet is fired
let alienX, alienY; // Alien position
let alienSpeed = 2; // Alien speed
let alienSize = 30; // Alien size
let alienBulletX, alienBulletY; // Alien bullet position
let alienBulletSpeed = 3; // Alien bullet speed
let alienBulletFired = false; // Flag to check if alien bullet is fired
let score = 0; // Player's score

let leftPressed = false; // Flag to check if left arrow key is pressed
let rightPressed = false; // Flag to check if right arrow key is pressed
let gameOver = false; // Flag to check if the game is over
let gameStarted = false; // Flag to check if the game has started

let spaceBackground; // Background image

function preload() {
  spaceBackground = loadImage('space.jpg'); // Load your space background image here
}

function setup() {
  createCanvas(600, 400);
  astronautX = width / 2;
  astronautY = height - 100;
  bulletX = astronautX;
  bulletY = astronautY;
  alienX = random(width);
  alienY = 0;
  alienBulletX = alienX;
  alienBulletY = alienY;
}

function draw() {
  // Draw background image
  image(spaceBackground, 0, 0, width, height);

  // Display game description if not started
  if (!gameStarted) {
    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Welcome to the Space Battle!", width / 2, height / 2 - 40);
    textSize(16);
    text("Use the left and right arrow keys to move the astronaut 🧑🏻‍🚀.", width / 2, height / 2);
    text("Press the up arrow key to shoot at the aliens 👽.", width / 2, height / 2 + 20);
    text("Avoid alien bullets 💥. Reach a score of 5 to win.", width / 2, height / 2 + 40);
    text("Press any key to start the game.", width / 2, height / 2 + 80);
    return; // Stop the draw function until the game starts
  }

  // If game is not over
  if (!gameOver) {
    // Update astronaut position based on arrow key flags
    if (leftPressed) {
      astronautX -= 5; // Move astronaut to the left
    }
    if (rightPressed) {
      astronautX += 5; // Move astronaut to the right
    }

    // Draw astronaut
    textSize(astronautSize);
    fill(255);
    text("🧑🏻‍🚀", astronautX - astronautSize / 2, astronautY + astronautSize / 2);

    // Draw bullet
    if (bulletFired) {
      bulletY -= bulletSpeed;
      fill(255);
      text("🔴", bulletX - 5, bulletY);

      // Check collision with alien
      if (dist(bulletX, bulletY, alienX, alienY) < alienSize / 2) {
        score++;
        alienX = random(width);
        alienY = 0;
        bulletFired = false;
      }

      // Reset bullet if it goes out of canvas
      if (bulletY < 0) {
        bulletFired = false;
        bulletX = astronautX;
        bulletY = astronautY;
      }
    }

    // Draw alien
    fill(0, 255, 0);
    textSize(alienSize);
    text("👽", alienX - alienSize / 2, alienY + alienSize / 2);

    // Move alien
    alienY += alienSpeed;
    if (alienY > height) {
      alienX = random(width);
      alienY = 0;
    }

    // Alien shoots bullet
    if (!alienBulletFired && random(1) < 0.01) {
      alienBulletX = alienX;
      alienBulletY = alienY;
      alienBulletFired = true;
    }

    // Draw alien bullet
    if (alienBulletFired) {
      alienBulletY += alienBulletSpeed;
      fill(255, 0, 0);
      text("💥", alienBulletX - 5, alienBulletY);

      // Check collision with astronaut
      if (dist(alienBulletX, alienBulletY, astronautX, astronautY) < astronautSize / 2) {
        gameOver = true; // End the game if astronaut is hit
      }

      // Reset alien bullet if it goes out of canvas
      if (alienBulletY > height) {
        alienBulletFired = false;
      }
    }

    // Display score
    fill(255);
    textSize(20);
    text("Score: " + score, 20, 30);

    // Check if player has won
    if (score >= 5) {
      gameOver = true; // End the game
      // Display "You Won" message
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text("You Won!", width / 2, height / 2);
      textSize(16);
      text("Press 'R' to replay", width / 2, height / 2 + 50);
    }
  }
  // If game is over
  else {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Game Over! Your Score: " + score, width / 2, height / 2);
    textSize(16);
    text("Press 'R' to replay", width / 2, height / 2 + 50);
  }
}

// Define resetGame function
function resetGame() {
  score = 0;
  astronautX = width / 2;
  bulletX = astronautX;
  bulletY = astronautY;
  alienX = random(width);
  alienY = 0;
  alienBulletFired = false;
  gameOver = false;
  gameStarted = true; // Reset the game start flag
}

function keyPressed() {
  if (!gameStarted) {
    gameStarted = true; // Start the game when any key is pressed
    return;
  }

  if (!gameOver) {
    if (keyCode === LEFT_ARROW) {
      leftPressed = true; // Set left arrow key flag to true
    } else if (keyCode === RIGHT_ARROW) {
      rightPressed = true; // Set right arrow key flag to true
    } else if (keyCode === UP_ARROW && !bulletFired) {
      bulletX = astronautX;
      bulletY = astronautY;
      bulletFired = true;
    }
  }
// Replay game if 'R' is pressed
  if (key === 'r' || key === 'R') {
    if (gameOver) {
      resetGame();
    }
  }
}

function keyReleased() {
  if (!gameOver) {
    if (keyCode === LEFT_ARROW) {
      leftPressed = false; // Set left arrow key flag to false
    } else if (keyCode === RIGHT_ARROW) {
      rightPressed = false; // Set right arrow key flag to false
    }
  }
}
