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
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject{
    constructor(gameobj){
    this.createdAt = gameobj.createdAt,
    this.name = gameobj.name,
    this.dimensions = gameobj.dimensions
     }
    }
    
    GameObject.prototype.destroy = function () {
      return `${this.name} was removed from the game.`;
    }
    
    
    
    /*
      === CharacterStats ===
      * healthPoints
      * takeDamage() // prototype method -> returns the string '<object name> took damage.'
      * should inherit destroy() from GameObject's prototype
    */
    class CharacterStats extends GameObject{
     constructor(charstats){
      super(charstats),   
      this.healthPoints = charstats.healthPoints
      }
    }
    
    CharacterStats.prototype.takeDamage = function(){
        return `${this.name} took damage`
      }
    
    /*
      === Humanoid (Having an appearance or character resembling that of a human.) ===
      * team
      * weapons
      * language
      * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
      * should inherit destroy() from GameObject through CharacterStats
      * should inherit takeDamage() from CharacterStats
    */
     class Humanoid extends CharacterStats {
         constructor(humantraits){
    super(humantraits)  
    this.team = humantraits.team,
    this.weapons = humantraits.weapons,
    this.language = humantraits.language
     }
    }
    
    Humanoid.prototype = Object.create(CharacterStats.prototype)
    
    Humanoid.prototype.greet = function(){
      return `${this.name} greets you in ${this.language}`
      };
    
    
    
    /*
      * Inheritance chain: GameObject -> CharacterStats -> Humanoid
      * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
      * Instances of CharacterStats should have all of the same properties as GameObject.
    */
    
    // Test you work by un-commenting these 3 objects and the list of console logs below:
    
    // /*
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
    
      const swordsman = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 2,
        },
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
        weapons: [
          'Giant Sword',
          'Shield',
        ],
        language: 'Common Tongue',
      });
    
      const archer = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
          'Bow',
          'Dagger',
        ],
        language: 'Elvish',
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
    
      
    // */
    
      // Stretch task: 
      // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
      // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
      // * Create two new objects, one a villain and one a hero and fight it out with methods!
    
      class Villain extends Humanoid{
        constructor(villainattr){
        super(villainattr);     
        this.weapondamage = villainattr.weapondamage;
        this.attacks = villainattr.attacks;

        this.getshurt = function(){
          return `${this.name} takes ${hero.weapondamage} damage, leaving it with ${this.healthPoints - hero.weapondamage} HP`
        };

        this.attacksback = function(){
          return `${this.name} attacks back at extreme speed getting two hits in, leaving ${hero.name} at ${(hero.healthPoints - this.weapondamage) - this.weapondamage} HP`
        };
        }
      }
    
    
      const villain = new Villain({
        createdAt: new Date(),
        dimensions: {
          length: 3,
          width: 4,
          height: 6,
        },
        healthPoints: 100,
        name: 'Hellspawn',
        team: 'Hell',
        weapons: [
          "Rancid Claws"
        ],
        weapondamage: 28,
        language: 'Sign Language',
      });
    
      class Hero extends Humanoid{
        constructor(heroattr){
              super(heroattr);
              this.weapondamage = heroattr.weapondamage;

         this.attacks = function(){
          return `I, ${this.name} swing mighty ${this.weapons} to rid this world of ${villain.name}!`;
         };

         this.finalmove = function(){
         this.weapons.push(villain.weapons) ; 
         return `${this.name} uses all the flesh absored into ${this.weapons[0]} to do a powerful strike! finsihing off ${villain.name}! ${this.name} has acquired ${villain.weapons}!`
         };

        }
      }
    
      Hero.prototype = Object.create(Humanoid.prototype)
    
      const hero = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 5,
        },
        healthPoints: 75,
        name: 'Yacoatl',
        team: 'Forest Kingdom',
        weapons: [
          "Fleshbane"
        ],
        weapondamage: 45,
        language: 'Elvish',
      });
    
      console.log(hero.attacks())
      console.log(villain.getshurt())
      console.log(villain.attacksback())
      console.log(hero.finalmove())
      console.log(hero.weapons)