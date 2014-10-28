class Log {
  log(text) {
    console.log('%c %c '+text+' %c ', 'background: #6d3f88;', 'background: #be3223; color: #eee;', 'background-color: #6d3f88;');
  }
}

class Canvas {
  constructor(options) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = options.width;
    this.canvas.height = options.height;
    this.append();
  }
  append() {
    document.body.appendChild(this.canvas);
  }
}

class Baymax extends Log{
  constructor(options) {
    this._version = '0.0.0'; //TODO: get from package.json
    this.width = options.width;
    this.height = options.height;
    this.game = new Canvas({width: options.width, height: options.height});
    this.version();
  }
  version() {
    this.log('Baymax v'+this._version+' Loaded');
  }
}


