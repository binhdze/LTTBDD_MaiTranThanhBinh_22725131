import { Person } from "./Bai1";
import { Student1 } from "./Bai2";
import { Car1 } from "./Bai3";
import { Rectangle } from "./Bai4";
import { BankAccount } from "./Bai5";
import { Book } from "./Bai6";
import { User } from "./Bai7";
import { Product, products, expensiveProducts } from "./Bai8";
import { Animal } from "./Bai9";
import { Account } from "./Bai10";
import { Animal as Animal11, Dog, Cat } from "./Bai11";
import { Bird, Fish } from "./Bai12";
import { Square, Circle } from "./Bai13";
import { Manager, Developer } from "./Bai14";
import { Library } from "./Bai15";
import { Box } from "./Bai16";
import { Logger } from "./Bai17";
import { MathUtil } from "./Bai18";
import { DogPoly, CatPoly } from "./Bai19";
import { Car, Bike } from "./Bai20";
import { Repository } from "./Bai21";
import { Stack } from "./Bai22";
import { CashPayment, CardPayment } from "./Bai23";
import { Fan, AirConditioner } from "./Bai24";
import { ShapeStatic } from "./Bai25";
import { Order } from "./Bai26";
import { Teacher } from "./Bai27";
import { DogProt, CatProt } from "./Bai28";
import { CarMov, Robot } from "./Bai29";
import { Student, School } from "./Bai30";

var person = new Person('Binh', 10);
var student1 = new Student1('Binh', 20, 10);
var car1 = new Car1('Toyota', 'Camry', 2024);
var rectangle = new Rectangle(10,5);
//Bai1
console.log(person);

//Bai2
console.log(student1);

//Bai3
console.log(car1);

//Bai4
console.log('Area' + rectangle.calculateArea());
console.log('Perimeter' + rectangle.calculatePerimeter());

// Bài 5
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log("BankAccount balance:", account.getBalance());

// Bài 6
const book = new Book("Sapiens", "Yuval Noah Harari", 2011);
console.log(book);

// Bài 7
const user = new User("Alice");
console.log(user.name);

// Bài 8
console.log(products);
console.log("Expensive products:", expensiveProducts);

// Bài 10
const acc = new Account(1, "Bob", 1000);
console.log(acc);

// Bài 11
const dog = new Dog("Rex");
console.log(dog.bark());
const cat = new Cat("Kitty");
console.log(cat.meow());

// Bài 12
const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim();

// Bài 13
const square = new Square(4);
const circle = new Circle(3);
console.log("Square area:", square.area());
console.log("Circle area:", circle.area());

// Bài 14
const manager = new Manager("Anna");
console.log(manager.manage());
const dev = new Developer("Tom");
console.log(dev.code());

// Bài 15
const library = new Library();
library.addBook(book);
library.addUser(user);
console.log(library);

// Bài 16
const box = new Box<number>(123);
console.log(box.value);

// Bài 17
const logger = Logger.getInstance();
logger.log("Hello from Logger!");

// Bài 18
console.log(MathUtil.add(2, 3));
console.log(MathUtil.divide(10, 2));

// Bài 19
const animals: any[] = [new DogPoly(), new CatPoly()];
animals.forEach(a => console.log(a.sound()));

// Bài 20
const car = new Car();
car.drive();
const bike = new Bike();
bike.drive();

// Bài 21
const repo = new Repository<string>();
repo.add("item1");
repo.add("item2");
console.log(repo.getAll());

// Bài 22
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());

// Bài 23
const cash = new CashPayment();
cash.pay(100);
const card = new CardPayment();
card.pay(200);

// Bài 24
const fan = new Fan();
fan.turnOn();
const ac = new AirConditioner();
ac.turnOn();

// Bài 25
ShapeStatic.describe();

// Bài 26
const order = new Order();
order.addProduct(new Product("Pen", 10));
order.addProduct(new Product("Book", 50));
console.log("Order total:", order.totalPrice());

// Bài 27
const teacher = new Teacher("Mr. John", "Math");
teacher.introduce();

// Bài 28
const dogProt = new DogProt();
dogProt.callSound();
const catProt = new CatProt();
catProt.callSound();

// Bài 29
const carMov = new CarMov();
carMov.move();
const robot = new Robot();
robot.move();

// Bài 30
const school = new School();
school.addStudent(new Student("Nam"));
school.addTeacher(teacher);
school.displayInfo();