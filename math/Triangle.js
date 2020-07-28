class Triangle {
  constructor(a, b, c) {
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
}