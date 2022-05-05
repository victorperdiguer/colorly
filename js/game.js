class Game{
  constructor(context) {
    this.ctx = context;
  }

  _update() {
    console.log('Updating')
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
  }
}