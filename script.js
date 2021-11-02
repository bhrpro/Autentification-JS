var login = "terence";
var mdp = "passer123";
var prenom = "Terance"; 


function demande_mdp(){
    var demande_mot_de_passe1 = window.prompt("Veuillez entrez votre mot de passe 🔐🔐:");
    if (demande_mot_de_passe1 != mdp) {
        demande_mot_de_passe2 = window.prompt("Veuillez tapez le bon mot de passe 🔐🔐🔐:");
        if(demande_mot_de_passe2 != mdp){
            demande_mot_de_passe3 = window.prompt("Veuillez tapez le bon mot de passe 👿👿:");
            if(demande_mot_de_passe3 != mdp){
                alert("Vous avez dépasser les limites d'essai ⌚⌚⌚⌚⏳");
                document.write("<h1><center>💬💬💤💤💬💬💤💤</center></h1>");
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
    alert("vérification du prénom de l'internaute......🔰🌏🔰🌏.");
    if(ask_firt_name != prenom){
        alert("Prenom  ' "+ ask_firt_name + "❌❌❌❌ ' Incorrect 🚨🚨🚨🚨");
        demande_prenom();
    }else{
        document.write("<h1><center>Bienvenue mon cher "+ ask_firt_name + "🥤🥤 👋👋</center></h1>");
    }
}

function demande_user(){
    var demande_login = window.prompt("Veuillez entrez votre Login :");
    if(demande_login != login){
        demande_user();
    }else{
        demande_mdp();
        //document.write("<h1><center>Bienvenue mon cher "+ demande_login + "</center></h1>");
    }    
}

demande_user();