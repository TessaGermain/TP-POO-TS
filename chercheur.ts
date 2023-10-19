import { Adresse } from "./adresse";
import { Enseignant } from "./enseignant";

export class Chercheur extends Enseignant{
    private _universite : string;

    constructor(nom : string, prenom : string, adresse : Adresse, specialite : string, statut : string, univ: string){
        super(nom, prenom, adresse, specialite, statut);
        this._universite = univ;
    }

    public getUniversite():string{
        return this._universite;
    }
    public setUniversite(univ : string){
        this._universite = univ;
    }

    public getFullInfos(): string {
        return `${super.getFullInfos()}, université : ${this._universite}`;
    }
}