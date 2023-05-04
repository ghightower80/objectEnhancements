//createInstructor
function createInstructor (firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  //computed Property Names
  let favoriteNumber = 42;
  const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

  //Object Methods
  const instructor2 = {
    firstName: "Colt",
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + "Says bye";
    }
  }

  //createAnimal
const d = createAnimal("dog", "bark", "Woof")
d.bark()  

const s = createAnimal("sheep", "bleet", "baaaa")
s.bleet()

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}