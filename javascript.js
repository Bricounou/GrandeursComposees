
var nom = ['Boubou', 'Rosimond', 'Luzette', 'Gudule', 'Fridolin', 'Oglorine', 'Throphyrme'];


function P(max) {
    return Math.floor(Math.random() * max);
}
var p = P(6)
var vitesse = (P(13)+1)*10;
var temps = [];
temps.heures = P(3)+1;
temps.minutes = P(20)*3;
temps.secondes = P(7)*9;
var unité = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

var énoncé = document.getElementById('énoncé');
var parent = document.body;

var nouvelÉnoncé = document.createElement('p');
nouvelÉnoncé.id = 'énoncé';
nouvelÉnoncé.innerHTML = nom[p] +' roule à '+ vitesse + ' km/h pendant ' + temps.heures +'h' + temps.minutes + 'min' + temps.secondes + 's. Quelle distance, en '+ unité[P(6)] + ', a pourcouru ' + nom[p] + ' ?';

parent.replaceChild(nouvelÉnoncé, énoncé);


function f1() {
    var calc = document.getElementById('calcul1').value;
    if(calc.match(new RegExp('^[0-9-/*+.,()\\s]+$', 'g'))) {
        try {
            eval('var resultat = ' + calc + ';');
        } catch(e) {
            alert('Calcul incompréhensible !');
        }
    } else {
        alert('Caractères invalide dans le calcul !');
    }
    
    document.getElementById('calcul1').value = Math.round(10000*resultat)/10000;
}



function f2() {
    var calc = document.getElementById('calcul2').value;
    if(calc.match(new RegExp('^[0-9-/*+.,()\\s]+$', 'g'))) {
        try {
            eval('var resultat = ' + calc + ';');
        } catch(e) {
            alert('Calcul incompréhensible !');
        }
    } else {
        alert('Caractères invalide dans le calcul !');
    }
    
    document.getElementById('calcul2').value = Math.round(10000*resultat)/10000;
}