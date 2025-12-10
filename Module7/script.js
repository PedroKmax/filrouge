/*************************************************
 * EXERCICE 3 - Nombres, calculs & TVA
 * Notions : opérations mathématiques, incrémentation
 *************************************************/

/* --- Correction Exercice 1 & 2 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

/* --- Nouveautés Exercice 3 --- */

// Prix d'exemple et TVA


let examplePriceHT = 20;
const TVA = 0.2;

let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

console.log("Prix HT exemple :", examplePriceHT);
console.log("Prix TTC exemple :", examplePriceTTC);

// Compteur de ventes
let salesCount = 0;
salesCount++;
salesCount++;

console.log("Nombre de ventes :", salesCount);















/* --- Rendu visuel Exo 3 --- */

const cartTotalHeader = document.getElementById("cart-total");
const cartTotalAside = document.getElementById("cart-total-aside");

if (cartTotalHeader) {
  cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
}
if (cartTotalAside) {
  cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
}

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Exemple de prix TTC affiché dans le panier (exercice 3).";
}

console.log("Exercice 3 chargé ✅");


// nouveauté 4

function CalculatePriceTTC(priceHT) {
    return priceHT + priceHT * TVA;
}

console.log (CalculatePriceTTC);

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

console.log(formatPrice(20.889));


// nouveaté exo 5


// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
let featuredProductName = "Belt"
let featuredProductPriceHT = 17.999;
let featuredProductDescription = "centuire"
let featuredProductImage = "https://images.unsplash.com/photo-1664285612706-b32633c95820?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)
let products= document.getElementById("product-list");

// - Définir une fonction (createFeaturedProductCard()) qui :
//     • crée un conteneur pour la carte  
//       (indice : il existe une méthode du DOM pour créer un élément HTML)

function createFeaturedProductCard() {
  const article = document.createElement("article");
 


//     • crée une image :
//         - lui donner la source de l'image
//       (indice : pensez aux propriétés des balises <img>)

let image = document.createElement("img");
image.src = featuredProductImage;
image.alt = featuredProductName;
article.appendChild(image);


//     • crée un titre et lui mettre le nom du produit  
//       (indice : une propriété permet d’écrire du texte dans un élément)

let title = document.createElement("h3");
title.textContent = featuredProductName;
article.appendChild(title);

//     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
//       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
//     • formate ce prix TTC avec la fonction prévue pour ça
//     • crée un paragraphe pour afficher le prix TTC
//     • crée un autre paragraphe pour la description
//     • assemble tous les éléments dans le conteneur
//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
//     • retourne ce conteneur
let paragraphe = document.createElement("p");
let prixTTC = CalculatePriceTTC(featuredProductPriceHT);
console.log(prixTTC);
let formate = formatPrice(prixTTC);
paragraphe.textContent = formate;
article.appendChild(paragraphe);
products.appendChild(article);

let paragraphe2 = document.createElement("p2");
paragraphe2.textContent = featuredProductDescription;
article.appendChild(paragraphe2);
return article;
}

createFeaturedProductCard();
createFeaturedProductCard();

// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)

// - Appeler la fonction pour créer la carte

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)


// nouveauté exo 6
// - créer tableau (productNames)
let productNames = ["sneakers", "t-shirt","sweats"];
// - créer tableau (productPricesHT)
let productPricesHT = [120, 39, 70];
// - afficher dans la console la longueur du tableau (le nombre d'éléments à l'intérieur)
productNames.length;
console.log("nombresdeproduit", productNames.length);
// - définir fonction (afficherProduitsConsole()):
function afficherProduitsConsole() {
  productNames.forEach( names => {
    console.log();
  }

  );

  productPricesHT();
};
//   - `Pour chaque nom dans mon tableau productNames:`
//     (indice : il faudra récupérer l'index de chaque nom en plus. Donc on doit récupérer 2 informations.)
//       - récupérer prix HT via `prixHT[index]`
//       - calculer le prix TTC (avec une fonction créée plus tôt dans nos exercices)
//       - formatter prix (avec une fonction créée plus tôt dans nos exercices)
//       - afficher dans la console la phrase : "Produit : Nom — Prix : XX,XX €"
function displayProductsConsole() {
  productNames.forEach((name, index) => {
    const priceHT = productPricesHT[index];
    const priceTTC = CalculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);

     console.log(index + " "+name + ":" + formattedPrice);
  });
};
// - appeler la fonction

displayProductsConsole();