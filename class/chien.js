
export class Chien {
    static idCounter = 0; 

    constructor(nom, age, race) {
        this.id = Chien.idCounter++;
        this.nom = nom;
        this.age = age;
        this.race = race;
    }
}
