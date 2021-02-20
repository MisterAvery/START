const Shapes = {
  rect: (x, y, w, h, drawParams) => {
    this.ctx.beginPath();
    this.ctx.rect(x, y, w, h);
    
    START.executeParams(drawParams);
    
    this.ctx.closePath();
    
    return {
      x: x,
      y: y,
      w: w,
      h: h
    };
  },
  
  circ: (x, y, r, drawParams) => {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2);
    
    START.executeParams(drawParams);
    
    this.ctx.closePath();
    
    return {
      x: x,
      y: y,
      r: r
    };
  },
  
  line: (x1, y1, x2, y2, drawParams) => {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    
    START.executeParams(drawParams);
    
    this.ctx.closePath();
    
    return {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      length: START.findPointDistance(START.createPoint(x1, y1), START.createPoint(x2, y2))
    };
  },
  
  poly: (sX, sY, pRad, pNum, drawParams) => {
    let angleBetweenPoints = 360 / pNum;
    let points = [];
    
    for(let i = 0; i < pNum; i++) {
      points.push({
        x: sX + Math.floor(pRad * Math.cos(angleBetweenPoints * i)),
        y: sY + Math.floor(pRad * Math.sin(angleBetweenPoints * i))
      });
    }
    
    this.ctx.beginPath();
    this.ctx.moveTo(points[0].x, points[0].y);
    
    for(let i = 0; i < pNum - 1; i++) {
      const nextPoint = points[(i + 1) % pNum];
      this.ctx.lineTo(nextPoint.x, nextPoint.y);
    }
    
    START.executeParams(drawParams);
    this.ctx.closePath();
  },
};

export default Shapes;