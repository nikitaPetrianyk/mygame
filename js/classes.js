class Circle {
    constructor(moveDotX, moveDotY) {
        this.type = "Circle";
        this.radius = Math.floor(Math.random() * (25 - 10)) + 10;
        this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.x;
        this.y;
        this.moveDotX = moveDotX;
        this.moveDotY = moveDotY;
        this.flag = false;
        this.x = this.radius + 1;
        this.y = this.radius + 1;
    }

    drawCircle() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    changeDirection() {
        this.flag = !this.flag;
    }

    updateDraw() {
        this.drawCircle();
        if (this.x >= canvas.width - this.radius || this.x <= this.radius) {
            this.moveDotX = -this.moveDotX;
        }
        if (this.y >= canvas.height - this.radius || this.y <= this.radius) {
            this.moveDotY = -this.moveDotY;
        }
        if (!this.flag) {
            this.x += this.moveDotX;
            this.y -= this.moveDotY;
        } else {
            this.x += this.moveDotX;
            this.y += this.moveDotY;
        }
    }
    getArea() {
        this.area = Math.floor(Math.PI * Math.pow(this.radius, 2));
        return this.area;
    }
    getInformation() {
        console.log("Color: " + this.color + ", " + "Type of the shape: " + this.type + ", " + "Area of the shape: " + this.area);
    }
}



class Square {
    constructor(moveDotX, moveDotY) {
        this.type = "Square";
        this.side = Math.floor(Math.random() * (30 - 10)) + 10;
        this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.moveDotX = moveDotX;
        this.moveDotY = moveDotY;
        this.flag = false;
        this.x = this.side / 2;
        this.y = this.side / 2;
    }

    drawSquare() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.side, this.side);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    changeDirection() {
        this.flag = !this.flag;
    }

    updateDraw() {
        this.drawSquare();
        if (this.x >= canvas.width - this.side + 2 || this.x <= this.side - this.side) {
            this.moveDotX = -this.moveDotX;
        }
        if (this.y >= canvas.height - this.side + 2 || this.y <= this.side - this.side) {
            this.moveDotY = -this.moveDotY;
        }
        if (!this.flag) {
            this.x += this.moveDotX;
            this.y -= this.moveDotY;
        } else {
            this.x -= this.moveDotX;
            this.y += this.moveDotY;
        }
    }
    getArea() {
        this.area = Math.floor(Math.pow(this.side, 2));
        return this.area;
    }
    getInformation() {
        console.log("Color: " + this.color + ", " + "Type of the shape: " + this.type + ", " + "Area of the shape: " + this.area);
    }
}

class Random {
    constructor(circlesList, squaresList) {
        this.circlesList = circlesList;
        this.squaresList = squaresList;
    }

    makeRandom() {
        this.randomList = [...this.circlesList, ...this.squaresList];
        this.randomList.sort((elem, index) => {
            return Math.random() - 0.5;
        });
        return this.randomList;
    }
}