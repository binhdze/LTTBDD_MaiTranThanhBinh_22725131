"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        console.log(this.width * this.height);
    }
    calculatePerimeter() {
        console.log(2 * (this.width + this.height));
    }
}
exports.Rectangle = Rectangle;
