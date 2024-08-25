let snake = [{ top: 200, left: 200 }]
let food = null
let score = 0
let highScore = 0
let direction = { key: 'ArrowRight', dx: 20, dy: 0 }
let speed = 75

window.addEventListener('keydown', e => {
    const newDirection = getDirection(e.key)
    const allowChange = Math.abs(direction.dx) !== Math.abs(newDirection.dx)
    if (allowChange) {
        direction = newDirection;
    }
})

function getDirection(key) {
    switch (key) {
        case 'ArrowRight':
        case 'd':
            return { key, dx: 20, dy: 0 };
        case 'ArrowLeft':
        case 'a':
            return { key, dx: -20, dy: 0 };
        case 'ArrowDown':
        case 's':
            return { key, dx: 0, dy: 20 };
        case 'ArrowUp':
        case 'w':
            return { key, dx: 0, dy: -20 };
        default:
            return { key, dx: 0, dy: 0 };
    }
}

function moveSnake() {
    const head = Object.assign({}, snake[0]);
    head.left += direction.dx;
    head.top += direction.dy;
    snake.unshift(head);
    if (snake[0].top < 0) snake[0].top = 380;
    if (snake[0].top > 380) snake[0].top = 0;
    if (snake[0].left < 0) snake[0].left = 380;
    if (snake[0].left > 380) snake[0].left = 0;

    if (!eatFood()) snake.pop();
}

function randomFood() {
    food = {
        top: (Math.floor(Math.random() * 20)) * 20,
        left: (Math.floor(Math.random() * 20)) * 20
    };
}

function eatFood() {
    if (snake[0].top === food.top && snake[0].left === food.left) {
        food = null;
        return true;
    }
    return false;
}

function updateScore() {
    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('high-score').innerText = 'High Score: ' + highScore;
}

function gameOver() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].top === snake[0].top && snake[i].left === snake[0].left) {
            return true;
        }} return false;
           
}

function gameloop() {
    if (gameOver()) {
        alert("Game Over");

        if (score > highScore) {
            highScore = score;
        }
        snake = [{ top: 200, left: 200 }];
        food = null;
        score = 0;
        direction = { key: 'ArrowRight', dx: 20, dy: 0 };
        speed = 75;
        randomFood();
    }
    setTimeout(() => {
        document.getElementById("game-board").innerHTML = "";
        moveSnake();
        if (!food) {
            score = +1;
            randomFood();
            speed = speed - 2;
        }
        if (eatFood()) {
            document.getElementById("score").innerHTML = `Score :${score}`;
        }
        updateScore();
        drawSnake();
        drawFood();
        gameloop();
    }, speed)
}

drawSnake();
randomFood();
gameloop();


function drawSnake() {
    snake.forEach((item, index) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.top = `${item.top}px`;
        snakeElement.style.left = `${item.left}px`;
        snakeElement.classList.add("snake");
        if (index === 0) snakeElement.classList.add("head");
        if (index === snake.length - 1) snakeElement.classList.add("head");
        document.getElementById("game-board").appendChild(snakeElement);
    })
}

function drawFood() {
    const foodElement = document.createElement('div');
    foodElement.style.top = `${food.top}px`;
    foodElement.style.left = `${food.left}px`;
    foodElement.classList.add("food");
    document.getElementById("game-board").appendChild(foodElement);
}