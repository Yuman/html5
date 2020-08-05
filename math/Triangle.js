class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}
/*
https://mathworld.wolfram.com/Triangle.html#:~:text=Every%20triangle%20has%20three%20sides,triangles%20are%20convex%20and%20bicentric.

This captures knowledge on triangles.

For ease of drawing an arbitrary triangle, we lay it on its long side. That is, the long side is its base.

*/
class Triangle {
  constructor(a, b, c) {
    // The three parameters, a,b,and c, are the length of three sides. They may come in any order.
    let sides = [a, b, c].sort();
    this.longSide = sides[2];
    this.midSide = sides[1];
    this.shortSide = sides[0];
    this.perimeter = this.longSide + this.midSide + this.shortSide;
    let s = this.perimeter / 2;
    this.area = Math.sqrt(s * (s - this.longSide) * (s - this.midSide) * (s - this.shortSide));
    this.height = 2 * this.area / this.longSide;
  }

  getPerimeter() {
    return this.perimeter;
  }

  getArea() {
    return this.area;
  }

  getHeight() {
    return this.height;
  }

  getPoints() {
    let origin = { x: 0, y: 0 };
    let flatFar = { x: this.longSide, y: 0 };
    let apex = { x: Math.sqrt((this.shortSide) ** 2 - (this.getHeight()) ** 2), y: this.getHeight() };
    return [origin, flatFar, apex];
  }

  getApexPoint(){
    return new Point(Math.sqrt((this.shortSide) ** 2 - (this.getHeight()) ** 2), this.getHeight());
  }

  getLeftBasePoint(){
    return new Point(0, 0);
  }

  getRightBasePoint(){
    return new Point(this.longSide, 0);
  }
}