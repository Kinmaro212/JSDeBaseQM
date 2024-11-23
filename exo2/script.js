const carre1 = document.querySelector(".carre1");
// Ajoute un écouteur d'événements qui s'active au clic sur l'élément 'carre' 
//et récupère toute les information du fichier css q'uon a établit dans notre fichier JS

const carre2 = document.querySelector(".carre2");
// Ajoute un écouteur d'événements qui s'active au clic sur l'élément 'carre' 
//et récupère toute les information du fichier css q'uon a établit dans notre fichier JS

const carre3 = document.querySelector(".carre3");
// Ajoute un écouteur d'événements qui s'active au clic sur l'élément 'carre' 
//et récupère toute les information du fichier css q'uon a établit dans notre fichier JS

const carre4 = document.querySelector(".carre4");
// Ajoute un écouteur d'événements qui s'active au clic sur l'élément 'carre' 
//et récupère toute les information du fichier css q'uon a établit dans notre fichier JS

const carreInfo = document.querySelector(".carreInfo");
    


carre1.addEventListener("click", () => {

    // Récupérer les styles de l'élément carre1
    const styles = window.getComputedStyle(carre1);
    const couleurFond = styles.backgroundColor;
    // Appliquer la couleur récupérée au carreInfo
    carreInfo.style.backgroundColor = couleurFond;
    // Incorporer la couleur dans le contenu de carreInfo
    carreInfo.textContent = `${couleurFond}`;
});


carre2.addEventListener("click", () =>{

 // Récupérer les styles de l'élément carre1
 const styles = window.getComputedStyle(carre2);
 const couleurFond = styles.backgroundColor;
 // Appliquer la couleur récupérée au carreInfo
 carreInfo.style.backgroundColor = couleurFond;
 // Incorporer la couleur dans le contenu de carreInfo
 carreInfo.textContent = `${couleurFond}`;});


carre3.addEventListener("click", () =>{

 // Récupére les styles de l'élément carre1
 const styles = window.getComputedStyle(carre3);
 const couleurFond = styles.backgroundColor;
 // Applique la couleur récupérée au carreInfo
 carreInfo.style.backgroundColor = couleurFond;
 // Incorpore la couleur dans le contenu de carreInfo
 carreInfo.textContent = `${couleurFond}`;});


carre4.addEventListener("click", () =>{

 // Récupére les styles de l'élément carre1
 const styles = window.getComputedStyle(carre4);
 const couleurFond = styles.backgroundColor;
 // Applique la couleur récupérée au carreInfo
 carreInfo.style.backgroundColor = couleurFond;
 // Incorpore la couleur dans le contenu de carreInfo
 carreInfo.textContent = `${couleurFond}`;});









