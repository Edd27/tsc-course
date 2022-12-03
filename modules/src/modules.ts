// Variable
/* export */ const PI = 3.1416;

// Interface
/* export */ interface IPerson {
  id: number;
  name: string;
  age: number;
}

// Function
/* export */ function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100);
}

export { PI, IPerson, generateRandomNumber };
