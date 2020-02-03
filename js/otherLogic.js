let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

const addShapesWithDelay = arr => {
    const randomSquaresList = [];
    let counter = 0;
    let interval = setInterval(() => {
        if (counter >= arr.length) {
            clearInterval(interval);
        } else {
            randomSquaresList.push(arr[counter]);
            randomSquaresList[counter].getArea();
            let queueNumber = counter + 1;
            console.log("Queue shape index - " + queueNumber);
            randomSquaresList[counter].getInformation();
            counter++;
        }
    }, 5000);
    return randomSquaresList;
};

const makeRandomShapes = () => {
    const circlesList = [];
    const squaresList = [];
    for (let i = 0; i < 10; i++) {
        circlesList.push(new Circle(2.5, -2.5));
        squaresList.push(new Square(2.5, -2.5));
    }
    const random = new Random(circlesList, squaresList);
    return random.makeRandom();
};

const randomList = addShapesWithDelay(makeRandomShapes());

const changeCircleDistance = (circle1, circle2) => {
    let distance = Math.sqrt((circle1.x - circle2.x) ** 2 + (circle1.y - circle2.y) ** 2);
    distance1 = circle1.radius + circle2.radius;
    if (
        Math.abs(distance) <= distance1
    ) {
        circle1.changeDirection();
    }
}

const crossCircles = () => {
    let circlesList = randomList.filter(x => x instanceof Circle);
    for (let i = 0; i < circlesList.length; i++) {
        for (let j = 0; j < circlesList.length; j++) {
            if (i != j) {
                changeCircleDistance(circlesList[i], circlesList[j]);
            }
        }
    }
}

const changeSquareDistance = (square1, square2) => {
    let distance = square1.side / 2 + square2.side / 2;
    let distance1 = Math.sqrt((square1.x - square2.x) ** 2 + (square1.y - square2.y) ** 2);
    if (
        Math.abs(distance1) <= distance
    ) {
        square1.changeDirection();
    }
}

const crossSquares = () => {
    let squaresList = randomList.filter(x => x instanceof Square);
    for (let i = 0; i < squaresList.length; i++) {
        for (let j = 0; j < squaresList.length; j++) {
            if (i != j) {
                changeSquareDistance(squaresList[i], squaresList[j]);
            }
        }
    }
}

const changeCircleSquareDistance = (circle, square) => {
    let distance = circle.radius + square.side / 2;
    if (Math.abs(circle.x - square.x) <= distance && Math.abs(circle.y - square.y) <= distance) {
        square.changeDirection();
        circle.changeDirection();
    }
}

const crossCircleSquare = () => {
    let circlesList = randomList.filter(x => x instanceof Circle);
    let squaresList = randomList.filter(y => y instanceof Square);
    for (let i = 0; i < circlesList.length; i++) {
        for (let j = 0; j < squaresList.length; j++) {
            changeCircleSquareDistance(circlesList[i], squaresList[j]);
        }
    }
}