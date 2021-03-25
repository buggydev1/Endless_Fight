//score
let killList = 0;

// Number gens
const ran = () => {
    
    return Math.random() * 100 ;
}
const randomNumber = (num) => {
    return Math.floor(Math.random() * num); }
    
    function getNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }    
    
    // classes for heros
class Heros {
    constructor (name, hitpoint, attack, mana){
        this.name = name
        this.hitpoint = hitpoint
        this.attack = attack
        this.def = 25
        this.baseHitChance = 75
        this.baseCritChance = 10
        this.mana = mana 
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
        if(this.mana > 10){
        this.basicPlayerAttack(target)
        this.basicPlayerAttack(target)
        this.mana -= 10
        } else {
            console.log('need more mana')
        }
    }

    secondWind(){
        if (this.hitpoint === 80 % 2){
            this.hitpoint = 80 
        } else {
            return console.log("Not ready yet")
        }
   }

   
    
}

class Mage extends Heros {
    constructor (){
        this.attack = 10
    }
    fireBall(target) {
        dam = 100
        if( this.mana <= 10 && target.weakness ===  fire){
            target.hitpoint -= dam * 2;
            this.mana -= 10; 
        }else if (this.mana <= 10 && target.res === fire){
            target.hitpoint -= dam % 2
            console.log("Doesn't seem to be doing")
        } 
        else if (this.mana <= 10 ){
            this.mana -= 10; 
            target.hitpoint -= dam
        }
        else {
            console.log('Not enough mana')
        }
    }
    iceBolt(target) {
        dam = 100
        if( this.mana <= 10 && target.weakness ===  ice){
            this.mana -= 10; 
            target.hitpoint -= dam * 2;
        }else if (this.mana <= 10 && target.res === ice){
            target.hitpoint -= dam % 2
            console.log("Doesn't seem to be doing")
        } 
        else if (this.mana <= 10 ){
            target.hitpoint -= dam
            this.mana -= 10; 
        }
        else {
            console.log('Not enough mana')
        }
    }
    Magicbolt(target) {
        dam = 150
        if( this.mana <= 10){
            this.mana -= 10; 
            target.hitpoint -= dam; 
        } else {
            console.log ('Not enough mana')

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
const storyMons = []
//class for monsters
class Monsters {
    constructor(name, hitpoint, attack){
        this.name = name
        this.hitpoint = hitpoint
        this.attack = attack
        this.baseHitChance = 50
        this.def = 10
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
    defeated(){
        if(this.hitpoint <= 0){
            let killList =+ 1;

        }
    }

}

class Spider extends Monsters {
    constructor () {
    this.weakness = fire
    this.res = ice
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
const monster1 = new Monsters("Onto", 500, 10)

