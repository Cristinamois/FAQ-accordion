document.addEventListener("DOMContentLoaded", function() {
    function toggleTexte() {
        var texteCache = document.getElementById("texte-cache");
        if (texteCache.style.display === "none") {
            texteCache.style.display = "block";
        } else {
            texteCache.style.display = "none";
        }
    }

    document.getElementById("bouton-afficher").addEventListener("click", toggleTexte);
});

document.addEventListener("DOMContentLoaded", function() {
    function toggleTexte() {
        var texteCache = document.getElementById("texte-cache2");
        if (texteCache.style.display === "none") {
            texteCache.style.display = "block";
        } else {
            texteCache.style.display = "none";
        }
    }

    document.getElementById("bouton-afficher2").addEventListener("click", toggleTexte);
});


document.addEventListener("DOMContentLoaded", function() {
    function toggleTexte() {
        var texteCache = document.getElementById("texte-cache3");
        var image = document.getElementById('image-a-changer')
        if (texteCache.style.display === "none") {
            console.log("test");
            if (image.src.endsWith('./assets/images/icon-plus.svg')) {
                console.log("test");
                image.src = './assets/images/icon-minus.svg';
            }
            texteCache.style.display = "block";
        } else {
            image.src = './assets/images/icon-plus.svg';
            texteCache.style.display = "none";
        }
    }

    document.getElementById("bouton-afficher3").addEventListener("click", toggleTexte);
});


// document.getElementById('bouton-afficher').addEventListener('click', function() {
//     var image = document.getElementById('image-a-changer');
//     if (image.src.endsWith('./assets/images/icon-plus.svg')) {
//         image.src = './assets/images/icon-minus.svg';
//     } else {
//         image.src = './assets/images/icon-plus.svg';
//     }
// });

// document.addEventListener("DOMContentLoaded", function() { 
//     var image = document.getElementById('image-a-changer');
//     if (image.src.endsWith('./assets/images/icon-plus.svg')) {
//         image.src = './assets/images/icon-minus.svg';
//     } else {
//         image.src = './assets/images/icon-plus.svg';
//     }

//     document.getElementById("bouton-afficher").addEventListener("click", toggleTexte);
// });


