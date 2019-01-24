// CODE here for your Lambda Classes

// function Person(personAttributes)  {
//     this.name = personAttributes.name;
//     this.age = personAttributes.age;
//     this.location = personAttributes.location;
//   }

class Person {
	constructor(personAtributes) {
		this.name = personAtributes.name;
		this.age = personAtributes.age;
		this.location = personAtributes.location;
	}
}

const fred = new Person({
	name: "Fred",
	age: 37,
	location: "Bedrock"
});

console.log(fred);