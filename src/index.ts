/**
 * Types
 */

// String
let myTypeString: string = 'Hello world';

// Number
let myTyoeNumber: number = 33;

// Boolean
let myTypeBoolean: boolean = true;

// Array of numbers
let arrNumber: number[] = [1, 2, 3];
let arrNumber2: Array<number> = [1, 2, 3];

// Array of strings
let arrString: string[] = ['a', 'b', 'c'];
let arrString2: Array<string> = ['a', 'b', 'c'];

// Array of any values
let arrAny: any[] = [1, 'a', true];
let arrAny2: Array<any> = [1, 'a', true];

// Tuple
let tuplePlayers: [string, number, boolean] = ['Messi', 10, true];

// Array of tuples
let players: [number, string][];
players = [
  [10, 'Messi'],
  [9, 'Cristiano'],
  [7, 'Neymar']
];

// Inference
let a; // any
let b: string; // string
let c = 'Hola mundo'; // string

// Union
let union: string | number | null;
union = 'Hello world';

/**
 * Enum
 */
enum Roles {
  User = 'USER',
  Admin = 'ADMIN',
  Superadmin = 'SUPERADMIN'
}

/**
 * Object
 */
const roles = {
  User: 'USER',
  Admin: 'ADMIN',
  superadmin: 'SUPERADMIN'
};

/**
 * Assertion
 */
let channel: any = 'Codevolution';
let channelString = <string>channel;
let channelString2 = channel as string;
// const myCanvas = document.getElementById('main') as HTMLCanvasElement; // Example
// const myCanvas2 = <HTMLCanvasElement>document.getElementById('main'); // Example

/**
 * Function
 */
// Void function
function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()}`);
}
function greet2(name: string): void {
  console.log(`Hello, ${name.toUpperCase()}`);
}
// Function with return value
function getNumber() {
  return Math.floor(Math.random() * 100);
}
function getNumber2(): number {
  return Math.floor(Math.random() * 100);
}

// Function with optional parameter
function printPosition(position: { lat: number; long?: number }) {
  console.log(`Position: ${position.lat}, ${position.long || 0}`);
}
// Function with union parameter
function printPosition2(position: { lat: number; long?: number | string }) {
  console.log(`Position 2: ${position.lat}, ${position.long || 0}`);
}

/**
 * Interfaces
 */
interface Book {
  id: number;
  title: string;
  author: string;
  coauthor?: string;
  isLoan?: (id: number) => void;
}

const book: Book = {
  id: 1,
  title: 'Clean Code',
  author: 'Robert C. Martin'
};

const books: Book[] = [];

function getBook(): Book {
  return {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin'
  };
}

function createBook(book: Book): Book {
  return book;
}

createBook({
  id: 1,
  title: 'Clean Code',
  author: 'Robert C. Martin'
});

// Extends
interface Person1 {
  id: number;
  name: string;
}
interface Employee1 extends Person1 {
  dept: string;
}

interface Customer extends Person1 {
  country: string;
}

// Implements
interface Animal {
  name: string;
  getDogs: () => void;
  getcats?: () => void;
}
class Zoo implements Animal {
  name: string = '';
  getDogs(): void {
    console.log('Dogs');
  }
  getcats(): void {
    console.log('Cats');
  }
}

// Class
/**
 * --- Access control keywords ---
 * public: Accessible from everywhere
 * private: Accessible only from the class
 * protected: Accessible from the class and its subclasses
 */

class Person {
  public zone: string = 'Earth';
  protected city: string = 'Bogotá';
  private country: string = 'Colombia';
  constructor() {}

  greet(): void {
    console.log('Hello world');
  }
}

class Employee extends Person {
  // Properties
  // private id: number;
  // private name: string;
  // private department: string;

  // Constructor
  constructor(
    private readonly id: number,
    private name: string,
    private department: string
  ) {
    // this.id = id;
    // this.name = name;
    // this.department = department;
    super();
    this.showInfo();
  }

  // Methods
  private showInfo(): void {
    console.log(`Employee: ${this.name} - ${this.department}`);
  }
}

const emp = new Employee(1, 'Edgar', 'Sales');
