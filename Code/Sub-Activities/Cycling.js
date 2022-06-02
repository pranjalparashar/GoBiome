Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

g.clear();



var cycling = [
  {fill: "#ffffff", points: [47.784,52.09,53.657,53.765,57.792,58.193,59.385,64.6,57.807,70.562,53.642,75.027,47.794,76.692,41.944,75.032,37.759,70.541,36.208,64.397,37.197,59.416,39.687,55.606,43.428,52.994,47.784,52.09]},
  {fill: "#ffffff", points: [40.864,41.849,46.445,44.156,48.181,46.741,47.446,48.814,46.224,49.657,44.472,49.54,37.896,46.82,34.928,42.343,28.134,47.728,30.241,49.66,31.666,52.655,31.92,67.927,31.432,69.325,30.061,70.024,26.147,69.576,25.346,54.038,17.738,46.296,17.138,43.903,18.307,41.392,30.497,31.694,33.348,30.999,35.604,32.498,40.869,41.849]},
  {fill: "#ffce00", points: [41.429,23.933,43.842,24.604,45.583,26.414,46.29,28.821,45.634,31.684,43.938,33.525,41.56,34.254,39.144,33.657,37.223,31.677,36.571,29.093,38.021,25.416,41.429,23.933]},
  {fill: "#ffffff", points: [11.585,52.09,17.457,53.77,21.588,58.201,23.177,64.61,21.595,70.57,17.427,75.031,11.577,76.692,5.728,75.027,1.547,70.533,0,64.397,0.989,59.413,3.481,55.602,7.225,52.991,11.585,52.09]}
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
tick(cycling,60,-15);
g.setFont("Vector",20);
g.setColor(1,1,1);
//g.drawString("WALKING",80,50);
g.setFont("Vector",14);
g.drawString("CYCLING!",50,80);
g.drawString("STOP",130,130);
g.drawString("START",15,130);
var play=require("Storage").read("play.png");
g.drawImage(play,20,145);
var pause=require("Storage").read("pause.png");
g.drawImage(pause,35,145);
var stop=require("Storage").read("stop.png");
g.drawImage(stop,140,145);
