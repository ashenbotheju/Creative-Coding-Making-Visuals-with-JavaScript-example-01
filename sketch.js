const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]  //change demension
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const agentA = new Agent(800, 500);
    const agentB = new Agent(700, 300);

    agentA.drow(context);
    agentB.drow(context);
    
  };
};

canvasSketch(sketch, settings);

//using class for multiple output
class Point{
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
  }
}

class  Agent {
  constructor(x, y){
    this.pos = new Point(x, y);
    this.radius = 10;
  }

  drow(context){
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();
  }
}