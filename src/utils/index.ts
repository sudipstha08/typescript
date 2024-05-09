interface Person2 {
	name: string;
	age: number;
}

const person5: Readonly<Person2> = {
	name: "Dylan",
	age: 35,
};
person5.name = "Israel";

// https://www.w3schools.com/typescript/typescript_utility_types.php
