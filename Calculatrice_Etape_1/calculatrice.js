function ajouter(n) {
    afficher(document.getElementById("afficher_calc").textContent+n)
}

function afficher(calcul) {
    document.getElementById("afficher_calc").textContent = calcul;
    if (calcul != "") {
        document.getElementById("afficher_result").textContent = "=" + eval(calcul);
    }
    else {
        document.getElementById("afficher_result").textContent = "";
    }
    
}

function effacer() {
    var calc = document.getElementById("afficher_calc").textContent.slice(0,-1);
    afficher(calc);
}

function effacer_all() {
    afficher("");
}