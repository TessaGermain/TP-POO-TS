export class Adresse {
    private _rue : string;
    private _cp : string;
    private _ville : string;

    constructor(rue: string, cp: string, ville: string){
        this._rue = rue;
        this._cp = cp;
        this._ville = ville;
    }

    public getRue(): string{
        return this._rue;
    }

    public getCp(): string {
        return this._cp;
    }

    public getVille(): string {
        return this._ville;
    }

    public setRue(rue: string) {
        this._rue = rue;
    }

    public setCp(cp : string) {
        this._cp = cp;
    }

    public setVille(ville : string) {
        this._ville = ville;
    }

    public getFullAdresse(): string{
        return `${this._rue} ${this._cp}  ${this._ville}`;
    }
}