var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerHeight*4/3;
var playerx = 0;
var playery = 0;
var tileset = document.getElementById("tileset");
var tileSize = 32;

function printTile(xtile, ytile, printx, printy) {
  ctx.drawImage(tileset,xtile*tileSize,ytile*tileSize,tileSize,tileSize,printx*canvas.width/12,printy*canvas.height/9,canvas.width/12,canvas.height/9);
}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

tileset.onload = function() {
  printTile(0,0,0,0);
};
