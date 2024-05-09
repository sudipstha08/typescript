interface Printable {
	name: string;
	print(): void;
}

class Documents {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	print() {
		console.log(`Printing document ${this.name}...`);
	}
}

const doc = new Documents("MyDocument");
doc.print(); // Output: Printing document MyDocument...
