// Primitives:

let age: number;

age = 12.1;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// Complex types:

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32,
};

// An array of objects:

let peopleArray: {
  name: string;
  age: number;
};
[];

// Any type (the default type):

let anything: any;

anything = 'Something';

// Union types:

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Type aliases (starts with a capital letter!):

type PersonType = {
  name: string;
  age: number;
};

let person2: PersonType;

let peopleArray2: PersonType[];

// Functions & types:
// (in this case, the return type is already inferred by TypeScript, but you can also explicitly set it)
// A function that never returns a value returns a type of "void"

function add(a: number, b: number): number {
  return a + b;
}

// Generics:

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // ['d', 'a', 'b', 'c']