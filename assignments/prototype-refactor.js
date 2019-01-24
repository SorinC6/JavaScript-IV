/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// function GameObject(gameAtributes) {
//     this.createdAt = gameAtributes.createdAt;
//     this.dimensions = gameAtributes.dimensions;
//   }

//   GameObject.prototype.destroy = function() {
//     return `Object was removed from the game`;
//   };

class GameObj {
	constructor(gameAttributes) {
		this.createdAt = gameAttributes.createdAt;
		this.dimensions = gameAttributes.dimensions;
	}
	destroy() {
		return "Object was removed from the game.";
	}
}

const gameObj = new GameObj({
	createdAt: "12.23.2014",
	dimensions: 23
});

console.log(gameObj);

/*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

// function CharacterStats(characterAtributes) {
//      GameObject.call(this, characterAtributes);
//      this.healthPoints = characterAtributes.healthPoints;
//      this.name = characterAtributes.name;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//      return `${this.name} took damage.`;
// };

class CharacterStats extends GameObj {
	constructor(characterAtributes) {
		super(characterAtributes);
		this.healthPoints = characterAtributes.healthPoints;
		this.name = characterAtributes.name;
	}

	takeDamage() {
		return `${this.name} took damage.`;
	}
}

const ch = new CharacterStats({
	healthPoints: 5,
	name: "Ion"
});
/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
// function Humanoid(humanoidAtributes) {
// 	CharacterStats.call(this, humanoidAtributes);
// 	this.team = humanoidAtributes.team;
// 	this.weapons = humanoidAtributes.weapons;
// 	this.language = humanoidAtributes.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
// 	return `${this.name} offers a greeting in ${this.language}`;
// };

// Humanoid.prototype.damage = function(name) {
// 	if (this.healthPoints > 1) {
// 		this.healthPoints--;
// 		console.log(
// 			`${this.name} from team ${this.team} has ${this.healthPoints} left`
// 		);
// 	} else {
// 		console.log(`${this.name} is dead`);
// 		console.log(`GAME OVER`);
// 	}
// };

class Humanoid extends CharacterStats {
	constructor(humanoidAtributes) {
		super(humanoidAtributes);
		this.team = humanoidAtributes.team;
		this.weapons = humanoidAtributes.weapons;
		this.language = humanoidAtributes.language;
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}`;
	}

	damage(name) {
		if (this.healthPoints > 1) {
			this.healthPoints--;
			console.log(
				`${this.name} from team ${this.team} has ${
					this.healthPoints
				} left`
			);
		} else {
			console.log(`${this.name} is dead`);
			console.log(`GAME OVER`);
		}
	}
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1
	},
	healthPoints: 5,
	name: "Bruce",
	team: "Mage Guild",
	weapons: ["Staff of Shamalama"],
	language: "Common Tongue"
});

const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2
	},
	healthPoints: 15,
	name: "Sir Mustachio",
	team: "The Round Table",
	weapons: ["Giant Sword", "Shield"],
	language: "Common Tongue"
});

const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4
	},
	healthPoints: 10,
	name: "Lilith",
	team: "Forest Kingdom",
	weapons: ["Bow", "Dagger"],
	language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log('All good for now');

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// function Villan(villanAtributes) {
// 	Humanoid.call(this, villanAtributes);
// 	this.rank = villanAtributes.rank;
// 	this.planet = villanAtributes.planet;
// }

// Villan.prototype = Object.create(Humanoid.prototype);
// Villan.prototype.attack = function(oponent) {
// 	oponent.damage();
// };

// function Hero(heroAtributes) {
// 	Humanoid.call(this, heroAtributes);
// 	this.rank = heroAtributes.rank;
// 	this.planet = heroAtributes.planet;
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.attack = function(oponent) {
// 	oponent.damage();
// };

// const hero = new Hero({
// 	name: "Obi-Wan Kenobi",
// 	rank: "jedi master",
// 	planet: "Tatooine",
// 	healthPoints: 5,
// 	weapons: ["ligth saber", "force"],
// 	team: "Master Yoda team"
// });

// const villan = new Villan({
// 	name: "Darth Vader",
// 	rank: "sith master",
// 	planet: "Tatooine",
// 	healthPoints: "5",
// 	weapons: ["light saber", "dark side of the force"],
// 	team: "Empire Team"
// });

// hero.attack(villan);
// hero.attack(villan);
// hero.attack(villan);
// villan.attack(hero);
// villan.attack(hero);
// villan.attack(hero);
// villan.attack(hero);
// villan.attack(hero);
