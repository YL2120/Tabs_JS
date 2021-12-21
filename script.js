const onglets = Array.from(document.querySelectorAll('.onglets')); // on transforme une nodelist en tableau
const contenus = Array.from(document.querySelectorAll('.contenus'));

onglets.forEach(onglet =>{
    onglet.addEventListener("click",(e) => {
        for(let i =0; i < onglets.length; i++){
            if(onglets[i] === e.target){ //e.target : bouton surlequel on va cliquer
                    onglets[i].classList.add("active-onglets"); //classlist permet d'utiliser des méthodes avec les classes
            }
            else{
                onglets[i].classList.remove("active-onglets");
            }
        }

        // onglets.indexOf(e.target) : on va avoir l'index sur ce sur quoi on vient de cliquer

        for(let i =0; i < contenus.length; i++){ //on itère à travers le contenu
            if(i === onglets.indexOf(e.target)){ //e.target : bouton surlequel on va cliquer
                    contenus[i].classList.add("active-contenu"); //classlist permet d'utiliser des méthodes avec les classes
            }
            else{
                contenus[i].classList.remove("active-contenu");
            }
        }
    })
})

