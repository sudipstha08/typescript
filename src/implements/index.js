

class Documents {
	constructor(name) {
		this.name = name;
	}

	print() {
		console.log(`Printing document ${this.name}...`);
	}
}

const doc = new Documents("MyDocument");
doc.print(); // Output: Printing document MyDocument...
