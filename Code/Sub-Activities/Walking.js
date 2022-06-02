Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

g.clear();



var walk = [
  {fill: "#ffffff", points: [41.374,73.1,36.904,91.608,28.151,119.596,28.308,122.067,30.656,123.858,33.611,123.576,35.249,121.517,43.246,95.952,54.448,106.627,57.378,121.505,59.667,123.983,61.66,124.157,63.475,123.311,64.641,120.254,61.519,104.389,60.534,102.604,49.608,92.163,52.915,78.073,55.262,82.954,56.873,84.228,67.476,86.857,69.825,86.281,70.484,84.033,68.8,82.428,59.267,80.036,54.071,69.229,52.46,67.935,43.576,66.91,32.208,72.536,31.007,73.97,28.094,84.338,28.741,86.631,31.04,87.218,32.836,85.588,35.55,76.072]},
  {fill: "#ffce00", points: [57.648,57.508,57.158,59.983,55.427,62.438,52.833,63.976,50.257,64.407,45.144,62.49,43.382,60.044,42.866,57.508,43.356,55.032,45.087,52.578,47.68,51.04,50.257,50.609,55.369,52.526,57.132,54.972,57.648,57.508]}
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
tick(walk,40,-40);
g.setFont("Vector",20);
g.setColor(1,1,1);
//g.drawString("WALKING",80,50);
g.setFont("Vector",14);
g.drawString("WALKING!",50,90);
g.drawString("STOP",130,130);
g.drawString("START",20,130);
var play=require("Storage").read("play.png");
g.drawImage(play,25,145);
var pause=require("Storage").read("pause.png");
g.drawImage(pause,40,145);
var stop=require("Storage").read("stop.png");
g.drawImage(stop,140,145);
