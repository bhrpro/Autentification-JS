var login = "bhrpro";
var mdp = "passer123";
var prenom = "Bhrpro";

function demande_user(){
    var demande_login = window.prompt("Veuillez entrez votre Login :");
    if(demande_login != login && demande_login != null){
        demande_user();
    }else{
        document.write("<h1><center>Bienvenue mon cher "+ demande_login + "</center></h1>");
    }    
}

demande_user();