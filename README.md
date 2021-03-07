# START
A library for doing mundane JavaScript tasks when working with HTML Canvas. This library includes functions for drawing shapes, collision detection, and useful math.

## Status: in progress(Useable)
- Can be delivered from https://cdn.jsdelivr.net/gh/MisterAvery/START@v1.0/main.js

## Can be used with this HTML boiler-plate
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
  </head>
  <body>
    <script type="module">
      import START from 'https://cdn.jsdelivr.net/gh/MisterAvery/START@v1.0/main.js';
      START.init(500, 500);

      let params = {
        fill: '#7fb8',
        stroke: '#444',
        strokeWidth: 2
      }

      let c = START.shapes.circ(100, 95, 20, params),
          l = START.shapes.line(175, 200, 20, 50, params);

      console.log(START.jointCollision.circLine(c, l));
    </script>
  </body>
</html>
```
### Notes
- START.init takes two parameters: The width and height of the canvas that START will use
- the "params" variable keeps track of the drawing imformation the library uses and must be passed in at the end of each drawing method
  - instead of passing in the params variable, an object can also be passed in
  - ```
    START.shapes.line(175, 200, 20, 50, {
      fill: '#7fb8',
      stroke: '#444',
      strokeWidth: 2
    })
    ```
- functions that create shapes also return information about that shape
  - Example 1: The circ method will return the x, y, and radius of the object in their respective order
  - Example 2: The line method will return the x1, y1, x2, y2, and length of the line in their respective order
  - Example 3: The rect method will return the x, y, w, and h of the rectangle in their respective order

## Currentley has Functions for:
 - Initalizing a canvas and a context for it 
 - Retectangle to rectalgle collision
 - Line to line collision
 - Circle to circle collision
 - Rectangle to Line collision
 - Line to point collision
 - Circle to line collision
 - Circle to rectangle collision
 - finding diagolal distance between points
 - drawing rectangles
 - drawing circles
 - drawing lines
 - drawing polygons

