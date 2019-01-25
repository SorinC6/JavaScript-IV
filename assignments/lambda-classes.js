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
	}
	speak() {
		return `Hello my name is ${this.name}, I'm from ${this.location}`;
	}
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
	gradeAdjust(student) {
		let p = Math.round(Math.random() * 30);
		if (student.grade > 70) {
			//console.log(`if ${student.name} will decress with ${p}`)
			student.grade -= p;
			return `${p} are subtracted from ${student.name} now his grade is ${student.grade}`;
		} else {
            student.grade += p;
            return `${p} points are added to ${student.name} now his grade is ${student.grade}`;
		}
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

//console.log(fred.demo("redux"));

class Student extends Person {
	constructor(studentAtributes) {
		super(studentAtributes);
		this.previousBackground = studentAtributes.previousBackground;
		this.className = studentAtributes.className;
		this.favSubjects = studentAtributes.favSubjects;
		this.grade = this.getRandomInt(100);
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
	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	};
	graduate() {
        console.log(`${this.name}'s grade id: ${this.grade}`);
		if (this.grade > 70) {
			return `BRAVO! ${
				this.name
			} graduated succesfully Lambda with a grade of ${this.grade}`;
			//
		} else {
			let d = 70 - this.grade;
			return `Sorry, you need ${d} points to graduate, study hard!`;
		}
	};
}

const st = new Student({
	name: "Ion",
	favSubjects: ["javascript", "css", "react", "node"]
});

console.log(st.graduate());
console.log(fred.gradeAdjust(st));


// console.log(st.PRAssignment('rom'));

class PM extends Instructor {
	constructor(pmAtributes) {
		super(pmAtributes);
		this.gradClassName = pmAtributes.gradClassName;
		this.favInstructor = pmAtributes.favInstructor;
	};
	// it shoud take a paramter for channel ?
	standUp(channel) {
		console.log(
			`${this.name} announces to ${channel}, @channel standy times!​​​​​`
		)
	};
	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	};
}

// const pm=new PM({
//     name: 'Luk',
// })

// pm.standUp('web');
// pm.debugsCode(st,'react');
