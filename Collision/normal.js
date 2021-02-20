const NormalCollision = {
  rect: (s1, s2) => {
    return !(s1.x > s2.x + s2.w || s1.x + s1.w < s2.x || s1.y > s2.y + s2.h || s1.y + s1.h < s2.y);
  },
  
  line: (l1, l2) => {
    let x1 = l1.x1,
        x2 = l1.x2,
        x3 = l2.x1,
        x4 = l2.x2;
        
    let y1 = l1.y1,
        y2 = l1.y2,
        y3 = l2.y1,
        y4 = l2.y2;
        
    let uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1)),
        uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
        
    return (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1);
  },
  
  circ: (c1, c2) => {
    let dx = c2.x - c1.x;
    let dy = c2.y - c1.y;
    let distance = START.findPointDistance(START.createPoint(c1.x, c1.y), START.createPoint(c2.x, c2.y));
    
    return distance < c1.r + c2.r;
  },
};

export default NormalCollision;