class Ponto {
  private _x: number = 0;
  private _y: number = 0;

  constructor(p: { x: number; y: number }) {
    this._x = p.x;
    this._y = p.y;
  }


}

let p1 = new Ponto({ x: 10, y: 20 });
console.log(p1);
 