import { Adresse } from "./adresse";
import { Chercheur } from "./chercheur";
import { Enseignant } from "./enseignant";
import { Personne } from "./personne";

let adresse1 = new Adresse("38 rue des cordeliers", "77100", "Meaux");
let adresse2 = new Adresse("2 place de l'église", "60330", "Le-Plessis-Belleville");
let adresse3 = new Adresse("11 rue de lourmel", "75015", "Paris");
let adresses : Adresse[] = [adresse1, adresse2, adresse3];

let personne1 = new Personne("Germain", "Tessa", adresse1);
let personne2 = new Personne("François", "Titouan", adresse2);
let personnes : Personne[] = [personne1, personne2];

// let i = 1;
// for(let personne of personnes){
//     console.log(`Personne ${i}`)
//     console.log(`info personne : ${personne.getFullInfos()}`);
//     console.log(`nom : ${personne.getNom()}`);
//     console.log(`prénom : ${personne.getPrenom()}`);
//     console.log(`adresse : ${personne.getAdresse()}`);
//     i++
// }

personne1.setAdresse(adresse3);

// i=1;
// for(let personne of personnes){
//     console.log(`Personne ${i}`);
//     console.log(`info personne : ${personne.getFullInfos()}`);
//     console.log(`nom : ${personne.getNom()}`);
//     console.log(`prénom : ${personne.getPrenom()}`);
//     console.log(`adresse : ${personne.getAdresse()}`);
//     i++;
// }

// i=1;
// for(let adresse of adresses){
//     console.log(`Adresse ${i}`);
//     console.log(`adresse entière : ${adresse.getFullAdresse()}`);
//     console.log(`rue : ${adresse.getRue()}`);
//     console.log(`cp : ${adresse.getCp()}`);
//     console.log(`ville : ${adresse.getVille()}`);
//     i++;
// }

adresse1.setRue("2 rue de l'église");
adresse1.setCp("75012");
adresse1.setVille("Paris");

// i=1;
// for(let adresse of adresses){
//     console.log(`Adresse ${i}`);
//     console.log(`adresse entière : ${adresse.getFullAdresse()}`);
//     console.log(`rue : ${adresse.getRue()}`);
//     console.log(`cp : ${adresse.getCp()}`);
//     console.log(`ville : ${adresse.getVille()}`);
//     i++;
// }

let enseignant1 = new Enseignant("germain", "olivier", adresse1, "maths", "prof");
console.log(enseignant1.getFullInfos());

let chercheur1 = new Chercheur("françois", "titouan", adresse2, "design", "prof", "marioland");
console.log(chercheur1.getFullInfos());