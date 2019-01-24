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
		this.gender = personAtributes.gender;
	};
	speak() {
		return `Hello my name is ${this.name}, I'm from ${this.location}`;
	};
}

// const fred = new Person({
// 	name: "Fred",
// 	age: 37,
// 	location: "Bedrock"
// });

//console.log(fred.speak());

class Instructor extends Person {
	constructor(instructorAtributes) {
		super(instructorAtributes);
		this.specialty = instructorAtributes.specialty;
		this.favLanguage = instructorAtributes.favLanguage;
		this.catchPhrase = instructorAtributes.catchPhrase;
	};
	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	};
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	};
}

const fred = new Instructor({
	name: "Fred",
	location: "Bedrock",
	age: 37,
	gender: "male",
	favLanguage: "JavaScript",
	specialty: "Front-end",
	catchPhrase: `Don't forget the homies`
});

console.log(fred.demo("redux"));

class Student extends Person {
	constructor(studentAtributes) {
		super(studentAtributes);
		this.previousBackground = studentAtributes.previousBackground;
		this.className = studentAtributes.className;
		this.favSubjects = studentAtributes.favSubjects;
	};
	listsSubjects() {
		return this.favSubjects;
	};
	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	};
	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	};
}

const st=new Student({
    name:'Ion',
    favSubjects: ['sss','sdsdsds'],
})

// console.log(st.PRAssignment('rom'));

class PM extends Instructor {
	constructor(pmAtributes) {
		super(pmAtributes);
        this.gradClassName = pmAtributes.gradClassName;
        this.favInstructor= pmAtributes.favInstructor;
    };
    // it shoud take a paramter for channel ?
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    };
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// const pm=new PM({
//     name: 'Luk',
// })

// pm.standUp('web');
// pm.debugsCode(st,'react');
