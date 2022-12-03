// Generics
interface IPerson {
  id: number;
  name: string;
}

interface IEmployee extends IPerson {
  role: string;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface Data<T> {
  addItem(newitem: T): void;
}

class DataCollection<T extends { id: number; name: string }>
  implements Data<T>
{
  private items: T[] = [];

  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  getItems(): void {
    console.log(`Items: ${JSON.stringify(this.items)}`);
  }

  getNames(): string[] {
    return this.items.map(item => item.name);
  }

  getItemById(id: number): T | undefined {
    return this.items.find((item: T) => item.id === id);
  }
}

const people = new DataCollection<IPerson>();
people.addItem({
  id: 1,
  name: 'John'
});
people.addItem({
  id: 2,
  name: 'Jane'
});
people.getItems();
console.log(JSON.stringify(people.getItemById(1)));

const products = new DataCollection<IProduct>();
products.addItem({
  id: 1,
  name: 'Apple',
  price: 1.99
});
products.addItem({
  id: 2,
  name: 'Orange',
  price: 2.99
});
products.getItems();
console.log(JSON.stringify(products.getItemById(2)));
