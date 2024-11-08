# Union:

A union one of the type of TypeScript that allows a variable to be one of several types. This is useful when you want to specify that a value can be of multiple types but only one at a time.

Ex: type TypeName = Type1 | Type2 | Type3;
type Friends = 'Sabuz' | 'Tareq' | 'Akash'

# intersection : An intersection is a type of Typescript allows to combine multiple common and uncommon types into one. This means the resulting type will require all of the properties and methods of the intersected types. The variable or object must satisfy all of the types involved.

type TypeName = Type1 & Type2 & Type3;

interface Person {
name: string;
age: number;
}

interface Employee {
name: string;
role: string;
}

type EmployeePerson = Person & Employee;
