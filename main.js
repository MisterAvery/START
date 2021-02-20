import NormalCollision from './Collision/normal.js';
import JointCollision from './Collision/joint.js';
import Shapes from './shapes.js';

const START = {
  //initalize the canvas and setup
  init: (w, h) => {
    this.canvas = document.createElement('canvas');
    this.width = canvas.width = w;
    this.height = canvas.height = h;
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
  },
  
  executeParams: params => {
    if(params.fill) this.ctx.fillStyle = params.fill;
    if(params.strokeWidth) this.ctx.lineWidth = params.strokeWidth;
    if(params.stroke) this.ctx.strokeStyle = params.stroke;
    
    if(params.fill) this.ctx.fill();
    if(params.stroke) this.ctx.stroke();
  },
  
  createPoint: (x, y) => {
    return {
      x: x,
      y: y
    };
  },
  
  //Shapes
  shapes: Shapes,
  
  //Collision
  collisionNormal: NormalCollision,
  collisionJoint: JointCollision,
  
  //math
  findPointDistance: (p1, p2) => {
    let dx = Math.abs(p2.x - p1.x);
    let dy = Math.abs(p2.y - p1.y);
    return Math.sqrt(dx * dx + dy * dy);
  }
};

Object.freeze(START);