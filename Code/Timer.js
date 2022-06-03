var clock = 0;
var clockStart = 150; 
var clockInterval;
let drag;
const control = {
  init: 1, 
  start: 2, 
  count: 3,
  countUp: 4, 
  stop: 5 
};

function buttonPressed() {
  switch(state) {
    case control.init:
      initialize();
      break;
    case control.start:
      startTimer();
      break;
    case control.count:
      stopTimer();
      break;
    case control.countUp:
      stopTimer2();
      break;
    case control.stop:
      initialize();
      break;
    default:
      initialize();
      break;
  }
}

var state = control.start;
g.setBgColor(0,0,0);
g.setColor(1,1,1); 

function TimeDisplay(sec) {
    g.setColor(1,1,1); 
  var min = Math.floor(sec / 60);
  var hour= Math.floor(min/60);
  min%=60;
  sec = sec % 60;
  if (sec < 10) sec = "0" + sec;
  if (min < 10) min = "0" + min;
  if (hour < 10) hour= "0" + hour;
  return hour+":"+min + ":" + sec;
}

function initialize() {
  g.setBgColor(0,0,0); 
  clock = clockStart;
  setState(control.start);
  DisplayCount(true);
}

function changeclock(diff) {
    g.setColor(1,1,1); 
  if (state == control.start) {
    if (clock + diff > 0) {
      clock = clock + diff;
      DisplayCount(true);
    }
  }
}

function startTimer() {
    g.setColor(1,1,1); 
  clockStart = clock;
  setState(control.count);
  countDown();
  if (!clockInterval)
    clockInterval = setInterval(countDown, 1000);
}

function DisplayCount(time) {
  g.clear();
  g.setFontAlign(0,0); 
  g.setBgColor(0,0,0);
  g.setColor(0,0,1); // Adjust this for changing the colour of the timer
  g.setFont("Vector",20); 
  g.setColor(1,1,1);
  g.drawString("Timer: " + TimeDisplay(clockStart),80,55);
  g.setFont("Vector",30); 
  g.drawString(TimeDisplay(clock),83,100);
  if (time) {
    g.setFont("Vector",20); 
  }
}

function countDown() {
    g.setColor(1,1,1); 
  clock--;
  if (clock<=0) {
    TimeEnd();
    countUp();
    clockInterval = setInterval(countUp, 1000);
    return;
  }
  DisplayCount(false);
}


function TimeEnd() {
g.setBgColor(0,0,0);
  g.setColor(1,1,1);
  g.clear();
  g.drawString("Time's up!",85,85);
  setState(control.countUp);
  resetTimer();
  Bangle.buzz();
  Bangle.buzz();
}

function countUp() {
  clock++;
  if (clock > 30) {
    TimeEnd();
    return;
  }
    if (clock <=15) {
    Bangle.buzz();
    Bangle.beep();
  }
  g.clear();
  g.setFontAlign(0,0);
  g.setBgColor(0,0,0);
  g.setColor(1,1,1); 
//  g.setFont("Vector",20); 
//  g.drawString("Timer: " + TimeDisplay(clockStart),80,55);
  g.setFont("Vector",30); 
  g.setBgColor(0,0,0);
  g.setColor(1,0,0);
  g.drawString("Time's up!",85,85);
  g.setFont("Vector",30); 
  g.drawString(TimeDisplay(clock),80,130);
}


function resetTimer() {

  clearInterval();
    g.setBgColor(0,0,0);
    g.setColor(1,1,1); 
  clockInterval = undefined;
}

function stopTimer() {
  resetTimer();
  g.clear();
  g.setFont("Vector",20);
  g.setColor(1,1,1);
  g.drawString("Timer stopped!",85,85);
  setState(control.stop);
}


function stopTimer2() {
  resetTimer();
    g.setColor(1,1,1); 
  initialize();
}


function setState(st) {
  state = st;
    g.setColor(1,1,1); 
}

function TouchScreenInitialize() {
  Bangle.on("drag", loc => {
  if (state == control.start) {
    if (!drag) { 
      drag = {x: loc.x, y: loc.y};
    } else if (!loc.b) {
      const dx = loc.x-drag.x, dy = loc.y-drag.y;
      drag = null;
      if (Math.abs(dx)>Math.abs(dy)+10) {
        changeclock(dx>0 ? 15 : -15);
      } else if (Math.abs(dy)>Math.abs(dx)+10) {
        changeclock(dy>0 ? -60 : 60);
      }
    }
  }
});
}

TouchScreenInitialize();
setWatch(buttonPressed, BTN1, {repeat: true});
initialize();
