// Dom Vars
let heroHealth = document.getElementById("hero_health");
const hero1AttackButton = document.getElementById("heroAtk");
const secondWindButton = document.getElementById("second_wind"); 
const doubleHitButton = document.getElementById("double_hit");
let mageHealth = document.getElementById("mage_health");
let mageMana = document.getElementById("mana_mage")
const mageAtteckButton = document.getElementById("mageAtk")
const fireballButton = document.getElementById("fireball");
const iceBoltButton = document.getElementById("ice");
const magicboltButton = document.getElementById("Magicbolt");
const heroUi = document.getElementById("hero");
const mageUi = document.getElementById("mage");
const cLog = document.getElementById('log');
//score
let killList = 0;
let heroprotect = false
// Number gens
const ran = () => {
    
    return Math.random() * 100 ;
}
const randomNumber = (num) => {
    return Math.floor(Math.random() * num); }
    
    function getNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }    

const appendMassage = (massage) => {
    let mas = document.createElement('p')
    mas.innerText = massage
    cLog.appendChild(mas)
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
            target.hitpoint -= this.attack * 2;
             appendMassage(this.name + ' Masstive hit dealt ' + (this.attack * 2));
        }
        else if (this.baseHitChance > Math.random()) {
            target.hitpoint += this.attack;
            appendMassage(this.name + ' Hit ' + this.attack) ; 
        } else{
            appendMassage(this.name + ' Missed')
        }
    }
}

class Fighter extends Heros {
    constructor (name, hitpoint){
        super(name, hitpoint)
        this.baseCritChance = 30
        this.attack = 50
        this.mana = 50
    }

    doubleHit(target){
        if(this.mana > 10){
        this.basicPlayerAttack(target)
        this.basicPlayerAttack(target)
        this.mana -= 10
        } else {
            appendMassage('need more mana' )
        }
    }

    secondWind(target){
        if (this.hitpoint <= 500 % 2){
            this.hitpoint = 500 
        } else {
            appendMassage("Not ready yet, so using basic attack")
            this.basicPlayerAttack(target)
        }
   }

   
    
}

class Mage extends Heros {
    constructor (name, hitpoint){
        super(name, hitpoint)
        
        this.attack = 10
        this.mana = 150
    }
    fireBall(target) {
        let dam = 100
        if( this.mana >= 10 && target.weakness ===  'fire'){
            target.hitpoint -= dam * 2;
            this.mana -= 10; 
            appendMassage('Super effected ' + 200 + "Damage!" )
        }else if (this.mana >= 10 && target.res === 'fire'){
            target.hitpoint -= dam % 2
            appendMassage("Doesn't seem to be doing much" + 50)
        } 
        else if (this.mana >= 10 ){
            this.mana -= 10; 
            target.hitpoint -= dam
            appendMassage("Does " + dam)
        }
        else {
            appendMassage('Not enough mana')
        }
    }
    iceBolt(target) {
       let dam = 100
        if( this.mana >= 10 && target.weakness ===  'ice'){
            this.mana -= 10; 
            target.hitpoint -= dam * 2;
            appendMassage('Super effected ' + 200 + "Damage!" )
        }else if (this.mana >= 10 && target.res === 'ice'){
            target.hitpoint -= dam % 2
            appendMassage("Doesn't seem to be doing much" + 50)
        } 
        else if (this.mana >= 10 ){
            target.hitpoint -= dam
            this.mana -= 10;
            appendMassage('Spell does ' + dam + ' damage' ) 
        }
        else {
            appendMassage('Not enough mana')
        }
    }
    Magicbolt(target) {
        let dam = 150
        if( this.mana <= 10){
            this.mana -= 10; 
            target.hitpoint -= dam; 
        } else {
            appendMassage('Not enough mana')

        }
    }



} 



// ATk, HP, maybe magic stats  
// make def that will reduce defence  (if i have enought time)
const hero1 = new Fighter('James', 500)

const mage = new Mage('Nia',300)


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
        this.res = "none"
    }     

    genMonster(){
        let monster = new Monsters(this.name = monsterNames[randomNumber(monsterNames.length - 1)], 
        this.hitpoint = getNumberBetween (250, 800),
        this.attack = getNumberBetween(25, 80)); 
        monsterWave.push(monster);
        appendMassage("A new foe has showed itself")
    }
    basicMonsterAttack(target){
        if (this.baseHitChance > ran() && ran() + this.baseCritChance > 100 ) {
            target.hitpoint -= this.attack * 1.5;
            appendMassage('Masstive hit!! ' + target.name + this.attack * 1.5 );
        }
        else if (this.baseHitChance > Math.random()) {
            target.hitpoint -= this.attack;
            appendMassage('hit ' + target.name + this.attack); 
        } else{
            appendMassage('miss')
        }
    }
    defeated(){
        if(this.hitpoint <= 0){
            let killList =+ 1;

        }
    }

}

class Spider extends Monsters {
    constructor (name, hitpoint, attack) {
        super(name,hitpoint,attack)
    this.weakness = "fire"
    this.res = "ice"
    }
    poison (target){
        let hits = getNumberBetween(0,2)
        if ( hits === 0) {
            appendMassage('Monster miss')
        } else if (hits === 1) {
          heroStatusPoison = true
          HerosetStaus = 3
          appendMassage("James is Poisoned")
             } else{
                mageStatusPoison = true
                mageSetStaus =3
                appendMassage("Nia is Poisoned!")
             }

    }    

}
monsterclasses = [Spider, Monsters, Spider, Monsters, Monsters]

 const genMonster = () => {
    let monster1 = new monsterclasses[getNumberBetween(0,4)](this.name = monsterNames[randomNumber(monsterNames.length - 1)],
        this.hitpoint = getNumberBetween (250, 500),
        this.attack = getNumberBetween(25, 80)); 
        monsterWave.push(monster1);
 }

const testMonster1 = new Monsters('ah', 500, 5)
// make an array of monster for the story and random 
// same stats but different funchtions


console.log(monsterWave)
const monster1 = new Monsters("Onto", 500, 10)

// turn
let heroStatusPoison = false
let HerosetStaus = 0
let mageSetStaus = 0
let mageStatusPoison = false
let heroTurn = true;
let playturn = true;
let gamerun = true ;
let mageTurn = false;
const passHeroTurn = () => {
    //make mage button appears , and make heros buttons disappear
    heroUi.style.visibility = "hidden";
    mageUi.style.visibility = "visible";
}
const passMageTurn = () => {
    // make Mage buttons disappear and start monster's turn
    mageTurn = false;
    mageUi.style.visibility = "hidden"
    monsterAct()   
}

const heroAtk = () => {
    hero1.basicPlayerAttack(monsterWave[0])
    heroTurn = false
    passHeroTurn()
    mageTurn =true 
    console.log("I work")
}
const heroSec = () => {
    hero1.secondWind(monsterWave[0]);
    passHeroTurn();
}
const heroDouble =() => {
    hero1.doubleHit(monsterWave[0]);
    passHeroTurn();
}
const mageAtk = () => {
    mage.basicPlayerAttack(monsterWave[0]);
    passMageTurn();
}
const mageFireball = () => {
    mage.fireBall(monsterWave[0])
    passMageTurn();
}
const mageIce = () => {
    mage.iceBolt(monsterWave[0]);
    passMageTurn();
}
const mageBolt = () => {
    mage.Magicbolt(monsterWave[0]);
    passMageTurn()
}



const monsterAct = () => {
     if( monsterWave[0].hitpoint >= 0){
            if (getNumberBetween(1,2) === 1){
            monsterWave[0].basicMonsterAttack(hero1)
            
        } else{ 
            monster1.basicMonsterAttack(mage)
            
        }
    } else{
        monsterWave.shift()
        genMonster()
        killList += 1
        mage.hitpoint = 300;
        hero1.hitpoint = 500;
        mage.mana = 150
        appendMassage("Another Foe Has Shown Itself")
    }
    heroTurn =true
    mageHealth.value = mage.hitpoint;
    heroHealth.value = hero1.hitpoint;
    // mageMana.value = mage.mana;
    playerAlive()
    
}
const playerAlive = () => {
    if (heroStatusPoison === true && HerosetStaus > 0){
        hero1.hitpoint -= 10
        appendMassage ("You are poison");
        heroUi.style.visibility = "visible";
    }else if (mageSetStaus < 0 && mageStatusPoison === true){
        mage.hitpoint -=10
        appendMassage ("Mage is poison")
        heroUi.style.visibility = "visible";
    }else if (hero1.hitpoint >= 0 && mage.hitpoint >= 0 ) {

        heroUi.style.visibility = "visible"
    } else { 
        if (killList >= 5) {
            alert("Rest at easy! You might be dead, but you have pushed back monsters for many years to come.")

        } else{
            alert("You have failed to push the monsters far enough!")
        } 
    }

}

genMonster()
//check player is still alive 
// if no, end game and reset
// if yes start round 

// Event listioners
// Hero 
hero1AttackButton.addEventListener("click", heroAtk)
secondWindButton.addEventListener('click', heroSec)
doubleHitButton.addEventListener('click', heroDouble)
//Mage
mageAtteckButton.addEventListener("click", mageAtk)
fireballButton.addEventListener('click', mageFireball)
iceBoltButton.addEventListener('click', mageIce)
magicboltButton.addEventListener('click', mageBolt)