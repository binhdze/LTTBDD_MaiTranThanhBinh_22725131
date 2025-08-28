export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

  calculateArea(){
    console.log(this.width * this.height);
  }
  calculatePerimeter(){
    console.log(2 * (this.width + this.height));
  }


}