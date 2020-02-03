
const animation = () => {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        randomList.forEach((element) => {
            element.updateDraw();
            crossSquares();
            crossCircles();
            crossCircleSquare();
        });
    }, 10);
}

animation();

