'use strict';
import InitNormalCollision from './Collision/normal.js';
import InitJointCollision from './Collision/joint.js';
import InitShapes from './shapes.js';

const START = {
  //initalize the canvas and setup
  init: (w, h) => {
    START.canvas = document.createElement('canvas');
    START.ctx = START.canvas.getContext('2d');

    START.width, START.height;
    START.canvas.width = START.width = w;
    START.canvas.height = START.height = h;
    START.canvas.style = 'border: 5px solid #444;'
    document.body.appendChild(START.canvas);

    Object.freeze(START);
  },

  //usuful functions
  executeParams: params => {
    if(params.fill) START.ctx.fillStyle = params.fill;
    if(params.strokeWidth) START.ctx.lineWidth = params.strokeWidth;
    if(params.stroke) START.ctx.strokeStyle = params.stroke;

    if(params.fill) START.ctx.fill();
    if(params.stroke) START.ctx.stroke();
  },

  //math
  createPoint: (x, y) => {
    return {
      x: x,
      y: y
    };
  },

  findPointDistance: (p1, p2) => {
    let dx = Math.abs(p2.x - p1.x);
    let dy = Math.abs(p2.y - p1.y);
    return Math.sqrt(dx * dx + dy * dy);
  },
};

START.shapes = InitShapes(START);
START.normalCollision = InitNormalCollision(START);
START.jointCollision = InitJointCollision(START);

export default START;
