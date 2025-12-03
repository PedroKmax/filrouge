// - Créer une variable pour le nom de la boutique
const shopName = "Js";
// - Créer une variable pour la ville
let ville = "chambery";
// - Créer une variable booléenne pour savoir si la boutique est ouverte
boolean = "true";
// - Créer une variable pour le nombre de produits
let nombredeproduits = 3;
// - Créer une variable pour le slogan
let slogan = "Jeunesse sportif"
// - Afficher un message de bienvenue dans la console
string = "Bienvenue"
//   (indice : concaténer texte + variables)
console.log(string)
// - Afficher le slogan dans la console
console.log(slogan)
// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)


// nouveauté exo 2


// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let message1 = "Webster";
console.log("Bienvenue"+"message1+");
// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
let message2 = "Jacks"
console.log(`Bienvenue ${message2}`);
// - Calculer la longueur du slogan
console.log(slogan.length);
// - Créer une version en majuscules du slogan
let slogan2 = "Jeunesse sportif";
let sloganMaj = slogan2.toUpperCase();
console.log(sloganMaj);
// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
let slogan3 = "Jeunesse sportif"
let modif = slogan3.replace("sportif","Endormie");
console.log(slogan3)
// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
