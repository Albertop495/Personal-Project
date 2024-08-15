function mash(){
    console.log("You will live in a " + getHome() + ", travel to " + getTravelCount() + " countries, have a pet " + getPet() + ", go to " + futureCollege() + ", and be married to " + futureSpouseName() + ".");
    
}

function randNumGenerator( highestNum ) {
let randNumGenerator = Math.floor(Math.random()* highestNum);

 return randNumGenerator;
}
let randNum = randNumGenerator(10);
console.log(randNum)

function getHome () {
    let userInput = process.argv[3];
    
    let arrayWords = ["Mansion", "Castle", "Shack", "House"]
    arrayWords.push(userInput);
    let i = randNumGenerator(4);
     arrayWords[i];
     return arrayWords[i];

     
}

mash();

function getTravelCount () {
let countriesTraveled = randNumGenerator(100)
    return countriesTraveled;
}

function getPet() {
    let userInput2 = process.argv[4]; 
    {if (randNumGenerator < 5)
     console.log(randomPets())}
    {if (randNumGenerator > 5) 
        console.log(userInput2)}
    let randomPets = ["Monkey", "Dog", "Cat", "Tiger", "Elephant", "Hippo", "Alligator", "Mewto", "Pikachu", "Soccer ball"];
    let i = randNumGenerator(10)
    randomPets[i];
    return randomPets[i];
}


function futureCollege() {

    let futureCollege = ["Univeristy of Chicago", "New York University", "Syracuse University", "Playstation University"]
    let i = randNumGenerator(4)
    futureCollege[i];
    return futureCollege[i];
}
function futureSpouseName() {
         let wifeyName = ["Michelle Oboma", "Princess Elizabeth", "Scarlett Johanson", "Sam Larusso", "Becky G", "SZA"]
         let i = randNumGenerator(5)
         wifeyName[i];
         return wifeyName[i];
}

// sorry Esam I actually worked really hard on this but after step 7 and 8 
// I had so much trouble and I just couldnt figure it out. As you can see 
//from my code i tried to make it work but i dont think i have full understanding 
//yet on how to make if statements and user inputs to work within a function. If 
//you can give me some suggestions I would greatly apprectiate them and I would 
//be happy to come back and fix them with your help so I can say I fully completed my first milestone project. 

