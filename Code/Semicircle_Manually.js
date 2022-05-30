Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

g.clear();

var n=0;
function drawSlice(from,to) {
  var a, res = 30;
  var x = 88, y = 176, r1 = 56, r2 = 58;
  var poly = [];
  for (var i=from*res;i<to*res;i++) {
    a = i*Math.PI*2/res;
    poly.push(x+r2*Math.sin(a), y+r2*Math.cos(a));
    poly.unshift(x+r1*Math.sin(a), y+r1*Math.cos(a));
  }
  a = to*Math.PI*2;
  poly.push(x+r2*Math.sin(a), y+r2*Math.cos(a));
  poly.unshift(x+r1*Math.sin(a), y+r1*Math.cos(a));
  g.fillPoly(poly);
}
function draw() {
  n += 0.01;
  if (n>=1) n=0;
  g.setColor(0,0,0);
  drawSlice(n,1);

}

draw();
