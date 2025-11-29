let board;
let boardWidth;
let boardHeight;
let context;

let birdWidth = 34;
let birdHeight = 24;
let birdImg;

let bird = {
    x : 0,
    y : 0,
    width : birdWidth,
    height : birdHeight
};

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//game physics
let velocityX = -2; //pipes moving left speed
let velocityY =0; //bird jump speed
let gravity = 0.4; //bird fallind down speed

let gameOver = false;
let score = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.width = window.innerWidth;
    board.height = window.innerHeight;
    boardHeight = board.height;
    boardWidth = board.width;
    
    context = board.getContext("2d");

    bird.x = boardWidth / 8;
    bird.y = boardHeight / 2;
    pipeX = boardWidth;

    context.fillStyle = "skyblue";
    context.fillRect(0, 0, boardWidth, boardHeight);
//load bird images
    birdImg = new Image();
    birdImg.src = "./flappybird2.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    }
    topPipeImg = new Image();
    topPipeImg.src = "./toptube.png";
    
    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottomtube.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); //1.5 seconds
    document.addEventListener("keydown", moveBird);

    window.addEventListener('resize', () => {
        board.width = window.innerWidth;
        board.height = window.innerHeight;
        boardWidth = board.width;
        boardHeight = board.height;

        bird.x = boardWidth / 8;
        bird.y = boardHeight / 2;
        pipeX = boardWidth;
    });
}

function update() {
requestAnimationFrame(update);
    if (gameOver) return;
    
    context.clearRect(0, 0, board.width, board.height);

    //bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0); //apply gravity to current bird.y or limit the bird to the top of the board
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if (bird.y > board.height) gameOver = true;

    //pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);


        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score+= 0.5; // since there are 2 pipes, 2 * 0.5 = 1
            pipe.passed = true
        }
        if (detectCollision(bird, pipe)) gameOver = true;
    
    }
    // clear the pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); //remove the first element from the array
    }
    
    //score
    context.fillStyle = "pink"; // to display score
    context.font = Math.floor(boardWidth / 15) + "px sans-serif";
    context.fillText(score, 5, 45);
    if (gameOver) {
        context.fillText("GAME OVER, try again", 5, Math.floor(boardHeight / 7))
    }
}

//(0-1) * pipeHeigth/2
//0 -> -128 (pipeHeight/4)
// 1 -> -128 - 256 (pipeHeight/4 - pipeHeight/2) = -3/4 pipeHeight
function placePipes() {
    if (gameOver) return;
    
    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2); 
    let openingSpace = boardHeight/4;
    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    };
    pipeArray.push(topPipe); //pipe added to array
    
    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    };
     pipeArray.push(bottomPipe); //pipe has been added to the array   

    
}

function moveBird(e) {
   if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        //jump
        velocityY = -6;
        // reset the game
        if (gameOver) {
            bird.y = boardHeight / 2;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

function detectCollision(a, b) {
return a.x < b.x + b.width &&
       a.x + a.width > b.x &&
       a.y < b.y + b.height &&
       a.y + a.height > b.y;
    //checks collision
}




// this is the greatest game ever made, name one game better than this
// I'll wait
// still waiting
// guess no one can name a better game
// haha
// I know, I'm so funny










// coding is so fun bro like i never knew this before 


// what else can I add to this game hmmmm
// there are so many opyions hmmmm

















//I wonder what the highest score in flappy bird is
// like the real flappy bird not this one
// maybe like 999 or something
// or maybe even higher also what if someone made a bot to play flappy bird
// that bot would probably have the highest score ever crazu to think about it
// anyway whats your high scorein flappy bird 
// mine is probably like 20 or maybe even 30
// not that good but hey at least i made this game right, thats better than what most people can do 
// I'm adding way too many comments aren't I
// oh well
// who's your favorite Basketball player, Mine is Derrick Rose 
// I hope you enjoyed playing this game as much as I enjoyed making it
// what else should I yap about hmmmm
// oh yea I can talk about NBA or the NFL or La liga or the Premier League or even F1
// I watch a variety of sports
// honestly I hope the golden stae warriors win the NBA finals this year
// I really like steph curry and klay thompson  
// I also like the Atlanta Hawks but man my favorite team is the Seattle SuperSonics 
// I wish they were still around
// I miss them so much its crazy
// anyway I should stop Yapping so much, these comments are turning into a whole essay
// Okay see you later alligator 
// p.s I hope yoy get a high score in this game bye bye now
// okay i'm back baby lets do this
// guess whos back
// back agaim
// flappys back
// tell a friend
// guess whos back
// guess whos back




























//wow so much space
// I wonder how many lines of comments this is
// probably like 100 or something



















































// guess whos

// okay so 
// this is the end, for real this time
