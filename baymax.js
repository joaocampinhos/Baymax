var Baymax = {
  version: '0.0.0'
};

Baymax.game = function(width, height, tile, canvas) {
  this.width = width || 800;
  this.height = height || 600;
  this.tile = tile || 32;
  this.canvas = document.createElement('canvas');
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  document.body.appendChild(this.canvas);
  Baymax.log('Game created');
}

Baymax.log = function(text) {
  console.log('%c %c '+text+' %c ', 'background: #6d3f88;', 'background: #be3223; color: #eee;', 'background-color: #6d3f88;');
}

Baymax.log('Baymax v'+Baymax.version+' Loaded');

