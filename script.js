var login = "bhrpro";
var mdp = "passer123";
var prenom = "Bhrpro"; 


function demande_mdp(){
    var demande_mot_de_passe1 = window.prompt("Veuillez entrez votre mot de passe ππ:");
    if (demande_mot_de_passe1 != mdp && demande_mot_de_passe1 != null) {
        demande_mot_de_passe2 = window.prompt("Veuillez tapez le bon mot de passe πππ:");
        if(demande_mot_de_passe2 != mdp && demande_mot_de_passe2 != null){
            demande_mot_de_passe3 = window.prompt("Veuillez tapez le bon mot de passe πΏπΏ:");
            if(demande_mot_de_passe3 != mdp && demande_mot_de_passe3 != null){
                alert("Vous avez dΓ©passer les limites d'essai βββββ³");
                document.write("<h1><center>π¬π¬π€π€π¬π¬π€π€</center></h1>");
            }else{
               demande_prenom();
            }
        }else{
           demande_prenom(); 
        }
    } else {
        demande_prenom();
    }
}

function demande_prenom(){
    var ask_firt_name = window.prompt("votre prenom:");
    alert("vΓ©rification du prΓ©nom de l'internaute......π°ππ°π.");
    if(ask_firt_name != prenom && ask_firt_name != null && ask_firt_name != "null"){
        alert("Prenom  ' "+ ask_firt_name + "ββββ ' Incorrect π¨π¨π¨π¨");
        demande_prenom();
    }else{
        document.write("<h1><center>Bienvenue mon cher "+ ask_firt_name + "π₯€π₯€ ππ</center></h1>");
    }
}

function demande_user(){
    var demande_login = window.prompt("Veuillez entrez votre Login :");
    if(demande_login != login && demande_login !=null){
        demande_user();  
    }else{
        demande_mdp();
        //document.write("<h1><center>Bienvenue mon cher "+ demande_login + "</center></h1>");
    }
}    


demande_user();