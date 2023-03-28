class Calculatrice {
    constructor() {
        this.calc = "";
    }

    ajouter(n) {
        this.calc += n;
        this.afficher();
    }

    afficher() {
        document.getElementById("afficher_calc").textContent = this.calc;
    }

    afficher_result() {
        document.getElementById("afficher_result").textContent = eval(this.calc);
    }

    effacer() {
        this.calc = document.getElementById("afficher_calc").textContent.slice(0, -1);
        this.afficher();
        this.effacer_result();
    }

    effacer_result() {
        document.getElementById("afficher_result").textContent = "";
    }
}
let calcul = new Calculatrice();
