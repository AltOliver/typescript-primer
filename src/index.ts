export class Person {
  
  //declare property types
  firstName: string;
  lastName: string;
  gender: string;
  height: number;
  hobbies: string[];
  birthday: Date;
  isAlive: boolean;

  constructor(firstName: string, lastName: string, gender: string, height: number = -1,
    hobbies: string[] = [], birthday: Date, isAlive: boolean = true) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.height = height;
    this.hobbies = hobbies;
    this.birthday = birthday;
    this.isAlive = isAlive;
  }
};


//Accessing object properties
let firstName = "Pius";
let lastName = "Onobhayedo";
let gender = "male";
let height = 1.7;
let hobbies = ['Tennis', 'Programming'];
let birthday = new Date(1900, 4, 5);
let isAlive = true;
let person1 = new Person(firstName, lastName, gender, height,
  hobbies, birthday, isAlive)
console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is $ {person1.birthday.toLocaleDateString()}`); 