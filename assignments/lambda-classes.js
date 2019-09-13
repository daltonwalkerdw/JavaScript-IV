// CODE here for your Lambda Classes

// Class setup
class Person {
    constructor(personattr){
        this.name = personattr.name,
        this.location = personattr.location,
        this.age = personattr.age;
    }

speak(){
    return `Hello my name is ${this.name}, i am from ${this.location}`
}

}

class Instructor extends Person{
    constructor(instrucattr){
        super(instrucattr)
        this.specialty = instrucattr.specialty,
        this.favLanguage = instrucattr.favLanguage,
        this.catchPhrase = instrucattr.catchPhrase;
    }
    demo(subject){
      return `Today we are learning about ${subject}`
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    };
};

class Student extends Person{
    constructor(studentattr){
        super(studentattr),
        this.previousBackground = studentattr.previousBackground,
        this.className = studentattr.className,
        this.favSubjects = studentattr.favSubjects;
    };
    listsSubjects(){
        let fav = this.favSubjects
         fav.forEach(function(hello){
           console.log(hello)
        })
        
        }
    
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmatr){
      super(pmatr),
      this.gradClassName = pmatr.gradClassName,
      this.favInstructor = pmatr.favInstructor;
    }
    standUP(slack){
      return `${this.name} announces to ${slack}, @channel standy times!`
    }
    debugsCode(subject,student){
      return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}
// End class construction

// Person objects
const bob = new Person({
    name: "Bob",
    location: "Greenland",
    age: 20
});

const jerry = new Person({
    name: "Jerry",
    location: "Georgia",
    age: 28
});

console.log(bob.speak())
console.log(jerry.speak())

// Instructor objects
const kratos = new Instructor({
    name: "Kratos",
    location: "Sparta",
    age: 160,
    specialty: "Killing gods, React",
    favLanguage: "JavaScript",
    catchPhrase: "Boi"
});

const jimmy = new Instructor({
    name: "Jimmy",
    location: "Retroville",
    age: 13,
    specialty: "React",
    favLanguage: "C#",
    catchPhrase: "Gotta blast!"
});

console.log(kratos.demo("Godslaying"))
console.log(jimmy)

// Student objects
const ryan = new Student({
    name: "Ryan",
    location: "Africa",
    age: 32,
    previousBackground: "Lion tamer",
    className: "webpt6",
    favSubjects: ["HTML", "Javascript"]
})

const hank = new Student({
    name: "Hank",
    location: "Arlen",
    age: 46,
    previousBackground: "Propane and propane accessories",
    className: "webpt8",
    favSubjects: ["HTML", "Python"]
})

console.log(hank.PRAssignment("Propane"))
console.log(ryan.sprintChallenge("JS sprint"))

//PM objects
const beth = new ProjectManager({
    name: "Beth",
    location: "Orlando",
    age: 31,
    specialty: "Front-end",
    favLanguage: "C++",
    catchPhrase: "Fill your minds!",
    gradClassName: "CS1",
    favInstructor: "Kratos"
})

const rick = new ProjectManager({
    name: "rick",
    location: "Earth",
    age: 70,
    specialty: "Back-end",
    favLanguage: "Python",
    catchPhrase: "I'm Pickle Rick!",
    gradClassName: "CS2",
    favInstructor: "Jimmy"
})

console.log(rick.standUP("Webpt23"))
console.log(beth.debugsCode("JavaScript", hank))