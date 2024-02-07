

// On récupère l'élément #board
const board = document.querySelector(".board");

const boxCitation = document.createElement("div")
boxCitation.classList.add("boxCitation")

quotes.forEach((quote) => {
    const newBox = boxCitation.cloneNode(); // Clone des divs
    let text = `<h1>${quote.title}</h1>
        <p class='author'>${quote.content}</p>
        <p>${quote.author}</p>
        <i id="coeur" class="fa-solid fa-heart"></i>`
         
    newBox.innerHTML = text
    board.appendChild(newBox);

})


    // let i = 0;

    // if (localStorage.getItem() != null) {
    //     coeur.classList.add(localStorage.getItem(coeur[i]))
    // }
    
    // coeur.addEventListener("click", function() {

    //     if (localStorage.getItem() != null) {

    //         coeur.classList.remove("clicked")

    //     } 
        
    //     else {
    //         localStorage.setItem(, "clicked")
    //         coeur.classList.add("clicked")
    //     }