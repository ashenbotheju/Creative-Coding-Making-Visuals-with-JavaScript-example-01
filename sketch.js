const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]  //change demension
};

const sketch = ({ context, width, height }) => {
  const agent = [];

  for(let i = 0; i < 100; i++){
    const x = random.range(0, width);
    const y = random.range(0, height);

    agent.push(new Agent(x, y));
  };

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    agent.forEach(agent => {
      agent.drow(context);
    });
    
  };
};

canvasSketch(sketch, settings);

//using class for multiple output
class Point{
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
  };
};

class  Agent {
  constructor(x, y){
    this.pos = new Point(x, y);
    this.radius = 10;
  };

  drow(context){
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();
  };
};