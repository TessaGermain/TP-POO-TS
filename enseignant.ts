import { Adresse } from "./adresse";
import { Personne } from "./personne";
export class Enseignant extends Personne{
    private _specialite : string;
    private _statut : string;

    constructor(nom: string, prenom : string, adresse : Adresse, specialite : string, statut: string){
        super(nom, prenom, adresse);
        this._specialite = specialite;
        this._statut = statut;
    }

    public getSpecialite(): string{
        return this._specialite;
    }

    public getStatut(): string{
        return this._statut;
    }

    public getFullInfos(): string {
        return `${super.getFullInfos()}, spécialité : ${this._specialite}, statut : ${this._statut}`;
    }

    public setSpec(spec: string): any{
        this._specialite = spec;
    }

    public setStatut(stat : string) : any {
        this._statut = stat;
    }

}