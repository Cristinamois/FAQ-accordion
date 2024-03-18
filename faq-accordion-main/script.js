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
        if (texteCache.style.display === "none") {
            texteCache.style.display = "block";
        } else {
            texteCache.style.display = "none";
        }
    }

    document.getElementById("bouton-afficher3").addEventListener("click", toggleTexte);
});


