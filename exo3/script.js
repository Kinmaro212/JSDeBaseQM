// Récupère tous les carrés
const carres = document.querySelectorAll('.carre');

// Ajoute un événement pour chaque carré
carres.forEach(carre => {
    carre.addEventListener('click', function() {
        // Bascule la classe 'active' pour l'animation
        carre.classList.toggle('active');// toggle rend la classe active donc ici class list et elle deviennt active et signfie que le css .active s'applique sur la class  
    });
});
