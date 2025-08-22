var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerHeight*4/3;
var playerx = 0;
var playery = 0;
var tileset = document.getElementById("tileset");
var tileSize = 16;
var aT = 0;//animation tick
var map = "\
GqGwgxgcGs\
GaGsGsGsGs\
GzGxGxgwge\
dqdwdwdeGz\
dzdxdxdxdc\
EqEwEwEwEe\
EaEsEsEsEd";
var mapHeight = 7;
var mapWidth = 5;

function printTile(xtile, ytile, printx, printy) {
  ctx.drawImage(tileset,xtile*tileSize,ytile*tileSize,tileSize,tileSize,printx*canvas.width/12,printy*canvas.height/9,canvas.width/12,canvas.height/9);
}
function getTile(tile, j, i) {
  //G is grass,dirt; S is sand,sandstone; D is dirt,sand; E is water,dirt; B is water,sand;
  const tileMap = {
    'Gq': [0, 0], 'Gw': [1, 0], 'Ge': [2, 0], 'gq': [3, 0], 'gw': [4, 0], 'ge': [5, 0],
    'Ga': [0, 1], 'Gs': [1, 1], 'Gd': [2, 1], 'ga': [3, 1], 'gs': [4, 1], 'gd': [5, 1],
    'Gz': [0, 2], 'Gx': [1, 2], 'Gc': [2, 2], 'gz': [3, 2], 'gx': [4, 2], 'gc': [5, 2],
    'Sq': [0, 3], 'Sw': [1, 3], 'Se': [2, 3], 'sq': [3, 3], 'sw': [4, 3], 'se': [5, 3], 'Dq': [6, 3], 'Dw': [7, 3], 'De': [8, 3], 'dq': [9, 3], 'dw': [10, 3], 'de': [11, 3],
    'Sa': [0, 4], 'Ss': [1, 4], 'Sd': [2, 4], 'sa': [3, 4], 'ss': [4, 4], 'sd': [5, 4], 'Da': [6, 4], 'Ds': [7, 4], 'Dd': [8, 4], 'da': [9, 4], 'ds': [10, 4], 'dd': [11, 4],
    'Sz': [0, 5], 'Sx': [1, 5], 'Sc': [2, 5], 'sz': [3, 5], 'sx': [4, 5], 'sc': [5, 5], 'Dz': [6, 5], 'Dx': [7, 5], 'Dc': [8, 5], 'dz': [9, 5], 'dx': [10, 5], 'dc': [11, 5], 
    'Eq': [aT*3, 6], 'Ew': [aT*3+1, 6], 'Ee': [aT*3+2, 6],
    'Ea': [aT*3, 7], 'Es': [aT*3+1, 7], 'Ed': [aT*3+2, 7],
    'Ez': [aT*3, 8], 'Ex': [aT*3+1, 8], 'Ec': [aT*3+2, 8],
    'Bq': [aT*3, 9], 'Bw': [aT*3+1, 9], 'Be': [aT*3+2, 9],
    'Ba': [aT*3,10], 'Bs': [aT*3+1,10], 'Bd': [aT*3+2,10],
    'Bz': [aT*3,11], 'Bx': [aT*3+1,11], 'Bc': [aT*3+2,11]
  };
  if (tile in tileMap) {
    const [x, y] = tileMap[tile];
    printTile(x, y, j, i);
  }
}
function printMap() {
  for (let i=0; i<mapHeight; i++) {
    for (let j=0; j<mapWidth; j++) {
      let tile=map[i*mapWidth*2+j*2]+map[i*mapWidth*2+j*2+1];
      getTile(tile, j, i, tileset);
    }
  }
  if (aT == 3) {aT = 0;} else {aT = aT + 1;}
}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

tileset.onload = function() {
  setInterval(printMap, 200);
};
