// declaration merging

interface Car {
	brand: string;
}

interface Car {
	model: string;
}

const CarA: Car = { brand: "fsdf", model: "" };

// Extensibilty
interface Animal {
	name: string;
}

interface Dog extends Animal {
	breed: string;
}

const husky: Animal = { name: "jack" };

const retriever: Dog = { name: "jack", breed: "gold" };
