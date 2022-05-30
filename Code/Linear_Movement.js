Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

g.clear();
require("Storage").read("good-biome.png");
require("Storage").read("bad-biome.png");
var bad_biome=require("Storage").read("bad-biome.png");
var good_biome=require("Storage").read("good-biome.png");

var bad_biome_initial_loc=136;
function move_left(){
  g.clear();
  if(bad_biome_initial_loc<40)
  {
    return g.drawImage(good_biome,0,68),g.drawImage(bad_biome,40,68);
  }

  else
  {   g.drawImage(good_biome,0,68);
   
      g.drawImage(bad_biome,bad_biome_initial_loc,68);
      bad_biome_initial_loc--;
  }

}
setInterval(move_left,200);


