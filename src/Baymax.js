class Canvas {
  constructor({width, height}) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width   || 800;
    this.canvas.height = height || 600;
    this.append();
  }
  append() {
    document.body.appendChild(this.canvas);
  }
}

class Baymax{
  constructor(options) {
    this.version = '0.0.0';
    this.width = options.width;
    this.height = options.height;
    this.game = new Canvas({width: options.width, height: options.height});
    this.loaded();
  }
  loaded() {
    new Log().info('Baymax v'+this.version+' Loaded');
  }
}

class Game{}


