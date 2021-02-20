const JointCollision = {
  rectLineCollision: (r, l) => {
    let sides = [
      {
        x1: r.x,
        y1: r.y,
        x2: r.x + r.w,
        y2: r.y
      },
      {
        x1: r.x + r.w,
        y1: r.y,
        x2: r.x + r.w,
        y2: r.y + r.h
      },
      {
        x1: r.x + r.w,
        y1: r.y + r.h,
        x2: r.x,
        y2: r.y + r.h
      },
      {
        x1: r.x,
        y1: r.y + r.h,
        x2: r.x,
        y2: r.y
      }
    ];
    
    for(let side of sides) {
      if(START.lineCollision(side, l)) return true;
    }
    
    return false;
  },
  
  linePointCollision: (l, p) => {
    let d1 = START.findPointDistance(p, START.createPoint(l.x1, l.y1)),
        d2 = START.findPointDistance(p, START.createPoint(l.x2, l.y2));
    let buffer = 0.1;
    
    return (d1 + d2 >= l.length - buffer && d1 + d2 <= l.length + buffer);
  },
  
  circLineCollision: (c, l) => {
    let center = START.createPoint(c.x, c.y);
    let p1 = START.createPoint(l.x1, l.y1),
        p2 = START.createPoint(l.x2, l.y2);

    if(START.findPointDistance(center, p1) <= c.r || START.findPointDistance(center, p2)<= c.r) return true;
    
    let dot = (((center.x - p1.x) * (p2.x - p1.x)) + ((center.y - p1.y) * (p2.y - p1.y))) / Math.pow(l.length, 2);
    
    let closestX = Math.floor(p1.x + (dot * (p2.x - p1.x))),
        closestY = Math.floor(p1.y + (dot * (p2.y - p1.y)));
    let closest = START.createPoint(closestX, closestY);
    
    if(!START.linePointCollision(l, closest)) return false;
    
    return (START.findPointDistance(closest, center) <= c.r);
  },
  
  circRectCollision: (c, r) => {
    let sides = [
      {
        x1: r.x,
        y1: r.y,
        x2: r.x + r.w,
        y2: r.y,
        length: START.findPointDistance(START.createPoint(r.x, r.y), START.createPoint(r.x + r.w, r.y))
      },
      {
        x1: r.x + r.w,
        y1: r.y,
        x2: r.x + r.w,
        y2: r.y + r.h,
        length: START.findPointDistance(START.createPoint(r.x + r.w, r.y), START.createPoint(r.x + r.w, r.y + r.h))
      },
      {
        x1: r.x + r.w,
        y1: r.y + r.h,
        x2: r.x,
        y2: r.y + r.h,
        length: START.findPointDistance(START.createPoint(r.x + r.w, r.y + r.h), START.createPoint(r.x, r.y + r.h))
      },
      {
        x1: r.x,
        y1: r.y + r.h,
        x2: r.x,
        y2: r.y,
        length: START.findPointDistance(START.createPoint(r.x, r.y + r.h), START.createPoint(r.x, r.y))
      }
    ];
    
    for(let side of sides) {
      if(START.circLineCollision(c, side)) return true;
    }
    
    return false;
  }
};

export default JointCollision;