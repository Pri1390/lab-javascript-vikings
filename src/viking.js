// Soldier
class Soldier {
    constructor ( health,strength ){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;

    }
}

// Viking
class Viking extends Soldier{
    constructor (name,health, strength){
        super(health,strength);
        this.name = name;
    }


    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }        

        }

    battleCry(){
        return `Odin Owns You All!`;
    }

    }



// Saxon
class Saxon extends Soldier { 
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return `A Saxon has died in combat`
        }

    }
 }



// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.unshift(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.unshift(saxon);
    }


    vikingAttack(){
        let vi = Math.floor(this.vikingArmy.length * Math.random());
        let si = Math.floor(this.saxonArmy.length * Math.random());
        let saxon = this.saxonArmy[si];
        let viking = this.vikingArmy[vi];
        let result = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
          this.saxonArmy.splice(si, 1);
        }
        return result;
    }

    saxonAttack(){
        let vi = Math.floor(this.vikingArmy.length * Math.random());
        let si = Math.floor(this.saxonArmy.length * Math.random());
        let saxon = this.saxonArmy[si];
        let viking = this.vikingArmy[vi];
        let result = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0) {
          this.vikingArmy.splice(vi, 1);
        }
        return result;
    }

    showStatus(){
        if(!this.saxonArmy.length){
            return`Vikings have won the war of the century!`;
        }

        else if(!this.vikingArmy.length){
            return`Saxons have fought for their lives and survived another day...`;            
        }

        else {
            return `Vikings and Saxons are still in the thick of battle.`;

        }

    }

}
