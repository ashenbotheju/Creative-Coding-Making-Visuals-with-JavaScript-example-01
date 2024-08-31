const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]  //change demension
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const agentA = new Agent(800, 400, 10)   //create object
    const agentB = new Agent(700, 500, 10)   //create object

    agentA.drow(context);
    agentB.drow(context);

  };
};

canvasSketch(sketch, settings);

//using class for multiple output
class Point{
  constructor(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

class Agent{
  constructor(x, y) {
    this.pos = new Point(x, y);
    this.radius = radius;
  };

  drow(context) {
    context.beginPath();
    context.arc(pos.x, pos.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();
  }
};
