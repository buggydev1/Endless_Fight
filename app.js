// classes for heros

const ran = () => {
    
     return Math.random() * 100 ;
    }
const randomNumber = (num) => {
    return Math.floor(Math.random() * num); }
    
function getNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }    

class Heros {
    constructor (name, hitpoint, attack){
        this.name = name
        this.hitpoint = hitpoint
        this.attack = attack
        this.baseHitChance = 75
        this.baseCritChance = 10
    }

    basicPlayerAttack(target){
        if (this.baseHitChance > ran() && ran() + this.baseCritChance > 100 ) {
            target.hitpoint -= this.attack * 1.5;
            console.log('Masstive hit');
        }
        else if (this.baseHitChance > Math.random()) {
            target.hitpoint -= this.attack;
            console.log('hit'); 
        } else{
            console.log('miss')
        }
    }
}

class Fighter extends Heros {
    constructor (){
        this.baseCritChance = 30
        this.attack = 50
    }

    doubleHit(target){
        this.basicPlayerAttack(target)
        this.basicPlayerAttack(target)
    }

    secondWind(){
        if (this.hitpoint === 80 % 2){
            this.hitpoint = 80 
        } else {
            return console.log("Not ready yet")
        }
   }


    
}
const hero1 = new Heros('James', 80, 50)
// ATk, HP, maybe magic stats  
// make def that will reduce defence  (if i have enought time)

// array of monsters name
const monsterNames = [
    'Lilon','Melrge','Usag','Krubub','Thorios','Pianix','Usag','Droshu','Yerpaast',
    'Cassueps','Calallau','Krolope','Jolssa','Draleisk','Meluchnaz','Sillsaanx','Yylpoan',
    'Jicsharm','Runara','Hoquix','Gnoodrius','Desso','Otaud','Wifal',
    'Pidriu','Jopire','Uapy','Wreberus','Yhippa','Pindi','Pekloast','Linntu','Sarpo',
]

const monsterWave = []

//class for monsters
class Monsters {
    constructor(name, hitpoint, attack){
        this.name = name
        this.hitpoint = hitpoint
        this.attack = attack
        this.baseHitChance = 50
    }     

    genMonster(){
        let monster = new Monsters(this.name = monsterNames[randomNumber(monsterNames.length - 1)], 
        this.hitpoint = getNumberBetween (250, 800),
        this.attack = getNumberBetween(25, 80)); 
        monsterWave.push(monster);
        console.log("A new foe has showed itself")
    }
    basicMonsterAttack(target){
        if (this.baseHitChance > ran() && ran() + this.baseCritChance > 100 ) {
            target.hitpoint -= this.attack * 1.5;
            console.log('Masstive hit');
        }
        else if (this.baseHitChance > Math.random()) {
            target.hitpoint -= this.attack;
            console.log('hit'); 
        } else{
            console.log('miss')
        }
    }

}

const testMonster1 = new Monsters('ah', 500, 5)
// make an array of monster for the story and random 
// same stats but different funchtions

// hero1.basicPlayerAttack(testMonster1)
// testMonster1.basicMonsterAttack(hero1)
// console.log(hero1, testMonster1)
testMonster1.genMonster()
console.log(monsterWave)
