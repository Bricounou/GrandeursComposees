/*if(typeof localStorage!='undefined') {
  // Récupération de la valeur dans web storage
  var nbvisites = localStorage.getItem('visites');
  // Vérification de la présence du compteur
  if(nbvisites!=null) {
    // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
    nbvisites = parseInt(nbvisites);
  } else {
    nbvisites = 1;
  }
  // Incrémentation
  nbvisites++;
  // Stockage à nouveau en attendant la prochaine visite...
  localStorage.setItem('visites',nbvisites);
  // Affichage dans la page
  document.getElementById('visites').innerHTML = nbvisites;
} else {
  alert("localStorage n'est pas supporté");
}*/



function P(max) {
    return Math.floor(Math.random() * max);
}

var nom = ['Boubou', 'Rosimond', 'Luzette', 'Gudule', 'Fridolin', 'Oglorine', 'Throphyrme'];
//aléa du nom
var pn = P(7)

var vitesse = (P(13)+1)*10;

var temps = [];
temps.heures = P(3)+1;
temps.minutes = P(20)*3;
temps.secondes = P(7)*9;
temps.total = temps.heures + "h" + temps.minutes + "min" + temps.secondes + "s";

var unitéDistance = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
//aléa de l'unité de distance
var pd = P(7);
var unitéDistanceAlea = unitéDistance[pd];

var unitéTemps =['h','min','s'];
//aléa de l'unité de temps
var pt = P(3);
var unitéTempsAlea = unitéTemps[pt];

var tempsRéponse = Math.round(10000*(temps.heures + temps.minutes/60 + temps.secondes/3600))/10000;
var distanceVitesse = vitesse * Math.pow(10,pd);
var distanceFinale = Math.round(10000*(tempsRéponse*distanceVitesse))/10000;
var tempsFinal = Math.round(10000*tempsRéponse*Math.pow(60,pt))/10000;




//fonction de calcul
function f(i3) {
    var calc = document.getElementById(i3).value;
    if (calc !=""){
        if(calc.match(new RegExp('^[0-9-/*+.,()\\s]+$', 'g'))) {
        try {
            eval('var resultat = ' + calc + ';');
        } catch(e) {
            alert('Calcul incompréhensible !');
        }
        } else {
            alert('Caractères invalide dans le calcul !');
        }
    
        document.getElementById(i3).value = Math.round(10000*resultat)/10000;
    }
}



function fValidation(i1,i2){
    if (document.getElementById(i1).value == i2 ) {
        document.getElementById(i1).style.textDecoration = "none";
        document.getElementById(i1).style.color = "green";
        document.getElementById(i1).setAttribute("disabled","");
    } else{
        if (document.getElementById(i1).value !=""){
            document.getElementById(i1).style.textDecoration = "line-through";     
        }    
    }
}







//change le choix sur le storage
function relance(i4){
    
    
    if(typeof localStorage!='undefined') {
        window.location.reload(false);
        var a;
        a = i4;
        if(a==3){
            a=P(3);
        }
        // Stockage du choix dans le storage
        sessionStorage.setItem('choix',a);
        // Affichage dans la page
    } else {
        alert("sessionStorage n'est pas supporté");
    }
    
      
      console.log(a);
}

//Calcul de distance
if(sessionStorage.getItem('choix')==0){

    document.getElementById('énoncé').innerHTML = nom[pn] +' roule à '+ vitesse + ' km/h pendant ' + temps.heures +'h' + temps.minutes + 'min' + temps.secondes + 's. Quelle distance, en '+ unitéDistanceAlea + ', a pourcouru ' + nom[pn] + ' ?';


    function fCorrection(){
        fValidation('donnéeTemps',temps.total);
        fValidation('calcul1',tempsRéponse);
        fValidation('unitéTemps','h');
        fValidation('donnéeDistance',vitesse + "km");
        fValidation('conversion',distanceVitesse);
        fValidation('unitéDistance',unitéDistanceAlea);
        fValidation('unitéTableau1',unitéDistanceAlea);
        fValidation('nombreTableau11',distanceVitesse);
        fValidation('nombreTableau12',"");
        fValidation('unitéTableau2',"h");
        fValidation('nombreTableau21',1);
        fValidation('nombreTableau22',tempsRéponse);
        fValidation('calcul2',distanceFinale);
        fValidation('unitéFinale',unitéDistanceAlea); 
        if((document.getElementById('phraseRéponse').value.includes(nom[pn]) ||document.getElementById('phraseRéponse').value.includes("Il")|| document.getElementById('phraseRéponse').value.includes("Elle"))&(document.getElementById('phraseRéponse').value.includes(unitéDistanceAlea))&(document.getElementById('phraseRéponse').value.includes(distanceFinale))){
            document.getElementById('phraseRéponse').style.textDecoration = "none";
            document.getElementById('phraseRéponse').style.color = "green";
            document.getElementById('phraseRéponse').setAttribute("disabled","");
        } else{
            if (document.getElementById('phraseRéponse').value !=""){
                document.getElementById('phraseRéponse').style.textDecoration = "line-through";     
            } 
        }
    
    }
}

//Calcul de temps
if(sessionStorage.getItem('choix')==1){

    document.getElementById('énoncé').innerHTML = nom[pn] +' roule à '+ vitesse + ' km/h sur ' + distanceFinale +" "+ unitéDistanceAlea +'. Quel temps, en '+ unitéTempsAlea + ', a mis ' + nom[pn] + ' ?';
    if(unitéTempsAlea=='h'){
        var obj = document.getElementById('conversionTemps');
        if(obj.style.display == "block"){
            obj.style.display = "none";
        }else{
            obj.style.display = "block";
        }
    }else{
        document.getElementById('calcul1').placeholder = "conversion";
    }

    function fCorrection(){
        fValidation('donnéeTemps',1+"h");
        fValidation('calcul1',Math.pow(60,pt));
        fValidation('unitéTemps',unitéTempsAlea);
        if(document.getElementById('donnéeDistance').value==vitesse+"km"){
            fValidation('donnéeDistance',vitesse + "km");
            fValidation('conversion',distanceVitesse);
            fValidation('unitéDistance',unitéDistanceAlea);
            fValidation('unitéTableau1',unitéDistanceAlea);
            fValidation('nombreTableau11',distanceVitesse);
            fValidation('nombreTableau12',distanceFinale);
        }else{
            fValidation('donnéeDistance',distanceFinale+unitéDistanceAlea);
            fValidation('conversion',Math.round(10000000*distanceFinale*Math.pow(10,-pd))/10000000);
            fValidation('unitéDistance',"km");
            fValidation('unitéTableau1','km');
            fValidation('nombreTableau11',vitesse);
            fValidation('nombreTableau12',Math.round(10000000*distanceFinale*Math.pow(10,-pd))/10000000);
        }
        
        fValidation('unitéTableau2',unitéTempsAlea);
        fValidation('nombreTableau21',Math.pow(60,pt));
        fValidation('nombreTableau22',"");
        fValidation('calcul2',tempsFinal);
        fValidation('unitéFinale',unitéTempsAlea); 
        if((document.getElementById('phraseRéponse').value.includes(nom[pn]) ||document.getElementById('phraseRéponse').value.includes("Il")|| document.getElementById('phraseRéponse').value.includes("Elle"))&(document.getElementById('phraseRéponse').value.includes(unitéTempsAlea))&(document.getElementById('phraseRéponse').value.includes(tempsFinal))){
            document.getElementById('phraseRéponse').style.textDecoration = "none";
            document.getElementById('phraseRéponse').style.color = "green";
            document.getElementById('phraseRéponse').setAttribute("disabled","");
        } else{
            if (document.getElementById('phraseRéponse').value !=""){
                document.getElementById('phraseRéponse').style.textDecoration = "line-through";     
            } 
        }
    
    }
}