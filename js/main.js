

// On récupère l'élément #board
const board = document.querySelector(".board");

// Je crée ma div avec la classe .boxCitation
const boxCitation = document.createElement("div") 
boxCitation.classList.add("boxCitation")

// Je déclare une variable qui recupèrera le contenu de mon localStorage 'favoris' et si il est vide il sera un tableau
let favorisInStorage = JSON.parse(localStorage.getItem('favoris')) // Je recupère ici mes favoris du localStorage
if (favorisInStorage === null) { // Si c'est vide,
    favorisInStorage = []; // alors ça sera un tableau
}


quotes.forEach((quote) => { // Je déclare une boucle pour la création des citations
    const newBox = boxCitation.cloneNode(); // Clone des divs
    let text = `<h1>${quote.title}</h1>
        <p class='author'>${quote.content}</p>
        <p>${quote.author}</p>
        <i id="coeur" class="fa-solid fa-heart"></i>`
         
    newBox.innerHTML = text // J'ajoute l'html a la box
    board.appendChild(newBox);

    let coeur = newBox.querySelector(".fa-heart") // Je récupère les coeurs de la citation

    if (favorisInStorage.some(favori => favori.id === quote.id)) { // Je vérifie si dans le tableau FavorisInStorage je possède des titres qui correspondent au quote
        coeur.classList.add("clicked"); // Si c'est le cas, je leurs donne tout de suite la class clicked. (Permet à l'utilisateur qui à mis en favoris des quotes de revoir tout de suite ses favoris)
    }

    coeur.addEventListener("click", function() { // Je crée un eventlistener au click sur les coeurs de mes citations
        coeur.classList.toggle("clicked"); // au click elles prendront la classe "clicked"

        if(coeur.classList.contains("clicked")) { // Si elles sont cliqués la première fois, alors je les ajoutes dans mon tableau favorisInStorage
            favorisInStorage.push(quote);
        }
        else {
            favorisInStorage = favorisInStorage.filter(q => q.id !== quote.id); // Si elle sont cliqués une deuxieme fois, je les retires du tableau favorisInStorage
        }

        localStorage.setItem('favoris', JSON.stringify(favorisInStorage)) // Puis je rajoute dans le Storage ma clé 'favoris' qui contiendra le tableau 'favorisInStorage'
    })
    })
