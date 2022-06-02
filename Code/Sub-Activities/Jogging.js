Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

g.clear();



var jogging = [
  {fill: "#ffce00", points: [46.681,45.392,44.942,49.468,40.563,51.228,36.394,49.66,34.922,47.645,34.449,45.392,36.188,41.319,40.566,39.556,44.735,41.122,46.208,43.137,46.681,45.392]},
  {fill: "#ffffff", points: [55.048,52.275,52.603,52.103,50.979,53.551,48.224,58.508,41.145,53.554,34.001,51.227,22.211,51.446,19.629,53.025,15.281,60.57,14.929,62.993,16.373,64.621,18.358,64.718,19.899,63.419,23.743,57.018,29.113,57.018,16.402,79.883,3.329,79.883,1.057,80.814,0.003,83.058,1.156,85.197,3.335,85.888,18.297,85.888,21.148,84.31,26.761,75.385,35.244,82.83,34.53,97.932,35.458,100.175,37.794,101.084,40.068,100.146,40.943,98.23,41.732,81.703,40.707,79.378,33.451,71.799,39.687,60.176,47.486,64.641,49.729,65.117,51.459,63.805,55.787,55.909,56.112,53.455,55.039,52.257]}
];

function drawPolyImage(polys, x, y, options) {
  const o = options || {};
  const g = o.graphics || global.g;
  const a = o.rotate || 0;
  const s = o.scale != null ? o.scale : 1;
  const ca = Math.cos(a), sa = Math.sin(a);
  for (let p of polys) {
    const pts = [];
    for (var i = 0; i < p.points.length; i += 2) {
      pts.push(p.points[i]*ca*s - p.points[i+1]*sa*s + x);
      pts.push(p.points[i+1]*ca*s + p.points[i]*sa*s + y);
    }
    if (p.fill) g.setColor(p.fill).fillPoly(pts);
    if (p.stroke) g.setColor(p.stroke).drawPoly(pts);
  }
}

function tick(x,a,b) {
  
  drawPolyImage(x, a, b);

}
g.setColor(0,0,0);
g.fillRect(0,0,176,176);
tick(jogging,60,-25);
g.setFont("Vector",20);
g.setColor(1,1,1);
//g.drawString("WALKING",80,50);
g.setFont("Vector",14);
g.drawString("JOGGING!",50,80);
g.drawString("STOP",130,130);
g.drawString("START",15,130);
var play=require("Storage").read("play.png");
g.drawImage(play,20,145);
var pause=require("Storage").read("pause.png");
g.drawImage(pause,35,145);
var stop=require("Storage").read("stop.png");
g.drawImage(stop,140,145);
