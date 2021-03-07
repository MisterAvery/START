# START
A library for doing mundane JavaScript tasks when working with HTML Canvas. This library includes functions for drawing shapes, collision detection, and useful math.

## Status: in progress(Useable)
- Can be delivered from https://cdn.jsdelivr.net/gh/MisterAvery/START@v1.0/main.js

## Can be used with this HTML boiler-plate
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
    <script src="https://cdn.jsdelivr.net/gh/MisterAvery/START@v1.0/main.js" type="module"></script>
  </head>
  <body>
    <script type="module">
      import START from './main.js';
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

