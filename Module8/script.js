
// nouveauté Exo 1

const shopName = "7X7 shop";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "everything IS LIT 🔥";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
  console.log("La boutique est ouverte.");
} else {
  console.log("La boutique est fermée.");
}

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// nouveauté Exo 2

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

// nouveauté Exo 3

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);


// // nouveauté Exo 4

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

console.log("Test TTC :", formatPrice(calculatePriceTTC(10)));

// // nouveaté exo 5

let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "images/tshirt-code-chill.jpg";

const productList = document.getElementById("product-list");

function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;

  const title = document.createElement("h3");
  title.textContent = featuredProductName;

  const priceElt = document.createElement("p");
  priceElt.textContent = formatPrice(calculatePriceTTC(featuredProductPriceHT));

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

if (productList) {
  productList.innerHTML = "";
  productList.appendChild(createFeaturedProductCard());
}


// // nouveauté exo 6


const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits :", productNames.length);

// 2) Fonction d'affichage console
function displayProductsInConsole() {
  productNames.forEach((name, index) => {
    const priceHT = productPricesHT[index];
    const priceTTC = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);

    console.log(`${index + 1} - ${name} — ${formattedPrice} TTC`);
  });
}

displayProductsInConsole();


// // nouveauté exo 7

const products = [
  {
    id: 1,
    name: "T-shirt",
    priceHT: 24.99,
    description: "Ay, mama told me not to sell work, Seventeen five, same color T-shirt.",
    image: "https://images.unsplash.com/photo-1759572095317-3a96f9a98e2b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Sweet Sweet",
    priceHT: 57.99,
    description: "Cause you Sweet.",
    image: "https://images.unsplash.com/photo-1499971856191-1a420a42b498?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "NC-17",
    priceHT: 109.99,
    description: "Look Mom I can fly.",
    image: "https://images.unsplash.com/photo-1747763209187-0bca7df90d48?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const productListSection = document.getElementById("product-list");

function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = product.name;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

function displayProductsInPage() {
  if (!productListSection) return;

  productListSection.innerHTML = "";

  for (const product of products) {
    const card = createProductCard(product);
    productListSection.appendChild(card);
  }
}

displayProductsInPage();


// noveauté exo 8

// Créer les variables globales du panier :

// Crée une variable cartItemCount initialisée à 0.
// Crée une variable cartTotal initialisée à 0.

let cartItemCount = 0;
let carTotal = 0;

// Récupérer les éléments du DOM :

// Récupère l’élément du header qui affiche le nombre d’articles (id="cart-count") et stocke-le dans cartCountHeader.
// Récupère l’élément du header qui affiche le total (id="cart-total") et stocke-le dans cartTotalHeader.
// Récupère l’élément de l’aside qui affiche le nombre d’articles (id="cart-count-aside") et stocke-le dans cartCountAside.
// Récupère l’élément de l’aside qui affiche le total (id="cart-total-aside") et stocke-le dans cartTotalAside.
// Récupère l’élément qui affichera le message (id="cart-message") et stocke-le dans cartMessage.

const cartCountHeader = document.getElementById("cart-count");
const cartTotalHeader = document.getElementById("cart-total");
const cartCountAside = document.getElementById("cart-count-aside");
const cartTotalAside = document.getElementById("cart-total-aside");
const cartMessage = document.getElementById("cart-message");

// Créer la fonction getCartMessage(total) :

// Cette fonction prend un paramètre total.
// À l’intérieur, utilise une structure :
// si total est égal à 0, retourne un message du type : “Votre panier est vide.”
// sinon, si total est inférieur à 50, retourne un message du type : “Ajoutez encore des produits…”
// sinon, retourne un message du type : “Livraison offerte 🎉 …”
// Utilise des comparateurs (===, <) et un if / else if / else.
// Créer la fonction updateCartDisplay() :

function getCartMessage(total){
  if (total === 0) {
    return "Votre panier est vide"
  } else if (total < 50) {
    return "Ajoutez encore des produits..."
  } else {
    return "Livraison offerte 🎉..."
  };
};

// À l’intérieur, mets à jour :
// le texte de cartCountHeader avec cartItemCount
// le texte de cartTotalHeader avec cartTotal formaté grâce à formatPrice(cartTotal)
// le texte de cartCountAside avec cartItemCount
// le texte de cartTotalAside avec cartTotal formaté
// le texte de cartMessage avec le résultat de getCartMessage(cartTotal)
// Pense à vérifier que chaque élément du DOM existe avant de modifier son textContent (optionnel mais conseillé).

function updateCartDisplay(){

  cartCountHeader.textContent = cartItemCount;
  cartTotalHeader.textContent = formatPrice(cartTotal);
  cartCountAside.textContent = cartItemCount;
  cartTotalAside.textContent = cartTotal;
  cartMessage.textContent = getCartMessage(cartTotal);
}

// Tester plusieurs états du panier (manuellement dans le code) :

// Modifie la valeur de cartItemCount et cartTotal pour simuler un panier vide, un panier sous 50€ et un panier au-dessus de 50€.
// Après chaque modification, appelle updateCartDisplay() pour voir le résultat dans la page.
// Exemple d’ordre de tests :
// cartItemCount = 0; cartTotal = 0;
// cartItemCount = 2; cartTotal = 30;
// cartItemCount = 4; cartTotal = 60;

cartItemCount = 0;
cartTotal = 0;

updateCartDisplay();

cartItemCount = 2;
cartTotal = 30;

updateCartDisplay();

cartItemCount = 4;
cartTotal = 60;

updateCartDisplay();


