let token="USGs2tusKf3EGlj56MPH3lB2h9VYi3NlcI";


let presentation= function(data){
    console.log("données api", data);
    let presentation = document.getElementById("presentation");
    presentation.innerHTML = "<div class='conteneur1'><img style='height: 100px' src="+"https://render-eu.worldofwarcraft.com/character/"+data.thumbnail+">"+ 
    "<h1>" + data.name + "</h1>";
  
    if(data.name=="Akia"&&data.realm=="Ysondre"){
        presentation.innerHTML+="<p>je suis une moniale</p> ";
    }else if(data.name=="Akiæ"){
        presentation.innerHTML+="<p>Je suis une chasseresse </p>";
    }
    presentation.innerHTML +=
    "<p> mon royaume est " + data.realm + "</p>" + 
    "<p> mon niveau est " + data.level + "</p>" + 
    "<p> j'ai tué " + data.totalHonorableKills + " personnes de l'alliance</p>";
 

    if(data.faction=="1"){
        presentation.innerHTML+='<img style="height: 10vh; margin-left: 80%" src="image/horde.png"></div>';
    }else{
        presentation.innerHTML+='<img src="image/alliance.png"></div>';
    }
  
 

}

let reputation= function(data){
    console.log("données api", data);
    let element = document.getElementById("resultats");
   let classic = document.getElementById("classic");
   let cartel = document.getElementById("cartel");
   let horde = document.getElementById("horde");
   let burning = document.getElementById("burning");
   let shattrath = document.getElementById("shattrath");
   let lich = document.getElementById("lich");
   let expeHorde = document.getElementById("expeHorde");
   let cataclysme = document.getElementById("cataclysme");
   let autre =document.getElementById("autre");
   let pandarie = document.getElementById("pandarie");
   let draenor = document.getElementById("draenor");
   let legion = document.getElementById("legion");
   let bfa = document.getElementById("bfa");

  
    // for(i=0; i<data.reputations.length; i++){
    //     console.log(data.reputations);
       
    //     element.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
    //      '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
    
        
    //     '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';
    //     if ($('p')=="Amical"){
    //         $('p').css('color', 'red');
    //    }
    // }

  

  
    for(i=0; i<data.reputations.length; i++){
    
      //  réputation bfa
      if(data.reputations[i].faction.name == "Accord d’Uldum"||data.reputations[i].faction.name == "Affranchis"||data.reputations[i].faction.name == "Brigade de l’Honneur"||data.reputations[i].faction.name == "Champions d’Azeroth"||data.reputations[i].faction.name == "Chercheurs tortollans"||data.reputations[i].faction.name == "Empire zandalari"||data.reputations[i].faction.name == "Expédition de Talanji"||data.reputations[i].faction.name == "Rajani"||data.reputations[i].faction.name == "Volduni"){
        bfa.innerHTML +='<div class="row"><span class="col-md-4"><strong>'+ data.reputations[i].faction.name+"</span></strong>"+
        '<span class="col-md-4">'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</span>'+
        '<span class="col-md-4 ">'+data.reputations[i].standing.name+'</span></div>';


    // réputation Légion
      }else if(data.reputations[i].faction.name == "Cour de Farondis"||data.reputations[i].faction.name == "Gardiennes"||data.reputations[i].faction.name == "Tisse-Rêves"||data.reputations[i].faction.name == "Tribu de Haut-Roc"){
        legion.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';

      // réputations Draénor
    }else if(data.reputations[i].faction.name == "Orcs loups-de-givre"||data.reputations[i].faction.name == "Parias arakkoa"){
        draenor.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';
       
      // réputation Mists of pandaria
      }else if(data.reputations[i].faction.name == "Hozen des forêts"||data.reputations[i].faction.name == "Pandashan" ||data.reputations[i].faction.name == "Prince noir"){
        pandarie.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';

      //réputation Cataclysm

      }else if(data.reputations[i].faction.name == "Clan Gueule-de-dragon"||data.reputations[i].faction.name == "Ramkahen" ){
        cataclysme.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';



        //réputation lich king


    }else if(data.reputations[i].faction.name == "Accord du Repos du ver"||data.reputations[i].faction.name == "Croisade d'argent" ||data.reputations[i].faction.name == "Kalu'aks"||data.reputations[i].faction.name == "Kirin Tor"){
        lich.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';



      }else if(data.reputations[i].faction.name == "Main de la vengeance"||data.reputations[i].faction.name == "Offensive chanteguerre"||data.reputations[i].faction.name == "Saccage-Soleil"||data.reputations[i].faction.name == "Taunkas" ||data.reputations[i].faction.name == "Expédition de la Horde"){
        expeHorde.innerHTML += '<div class="row" style="margin-left:20px"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';
        
      // réputation burning crusade
      }else if(data.reputations[i].faction.name == "Consortium"||data.reputations[i].faction.name == "Expédition cénarienne" ||data.reputations[i].faction.name == "Gardiens du Temps"||data.reputations[i].faction.name == "Mag'har"){
        burning.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';

      }else if(data.reputations[i].faction.name == "Sha'tar"||data.reputations[i].faction.name == "Ville basse" ){
        shattrath.innerHTML += '<div class="row" style="margin-left:20px"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';
        
      
        // réputations classique
      }else if(data.reputations[i].faction.name == "Cercle cénarien"){
        classic.innerHTML += '<div class="row"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';

      }else if(data.reputations[i].faction.name == "Baie-du-Butin"||data.reputations[i].faction.name == "Cabestan" ||data.reputations[i].faction.name == "Gadgetzan"||data.reputations[i].faction.name == "Long-Guet"){
        cartel.innerHTML += '<div class="row" style="margin-left:20px"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4"><p>'+data.reputations[i].standing.name+'</p></div></div>';

      }else if(data.reputations[i].faction.name == "Cartel Baille-Fonds"||data.reputations[i].faction.name == "Fossoyeuse"||data.reputations[i].faction.name == "Lune-d’Argent"||data.reputations[i].faction.name == "Orgrimmar"||data.reputations[i].faction.name == "Pandarens huojin"||data.reputations[i].faction.name == "Pitons-du-Tonnerre"||data.reputations[i].faction.name == "Trolls sombrelances"){

        horde.innerHTML += '<div class="row" style="margin-left:20px"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4 "><span>'+data.reputations[i].standing.name+'</span></div></div>';
      
    }else{
      autre.innerHTML += '<div class="row" style="margin-left:20px"><div class="col-md-4"><p><strong>'+ data.reputations[i].faction.name+"</p></strong></div>"+
        '<div class="col-md-4"><p>'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p></div>'+
        '<div class="col-md-4 "><span>'+data.reputations[i].standing.name+'</span></div></div>';
    }
   
   
}

}

let tri= function(data){
    console.log("données api", data);
    //classement des réputations honoré  
    let honore = document.getElementById("honore")
    let exalte = document.getElementById("exalte")
    let revere = document.getElementById("revere") 
    for(i=0; i<data.reputations.length; i++)
    if(data.reputations[i].standing.name=="Exalté"){
      exalte.innerHTML += '<div class="row"><span class="col-md-6"><strong>'+ data.reputations[i].faction.name+"</span></strong>"+
 
      '<span class="col-md-6 ">'+data.reputations[i].standing.name+'</span></div>';
   }else if(data.reputations[i].standing.name=="Révéré"){
    revere.innerHTML += '<div class="row"><p class="col-md-4"><strong>'+ data.reputations[i].faction.name+"</p></strong>"+
      '<p class="col-md-4">'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</p>'+
      '<p class="col-md-4 ">'+data.reputations[i].standing.name+'</div>';
   }else if(data.reputations[i].standing.name=="Honoré"){
    honore.innerHTML += '<div class="row"><span class="col-md-4"><strong>'+ data.reputations[i].faction.name+"</span></strong>"+
      '<span class="col-md-4">'+ data.reputations[i].standing.value + ' / '+data.reputations[i].standing.max + '</span>'+
      '<span class="col-md-4 ">'+data.reputations[i].standing.name+'</span></div>';
   }
}


function buttonAkiaYsondreMoine(){
  
    // let urlPresentation = "https://eu.api.blizzard.com/wow/character/ysondre/akia?locale=fr_FR&access_token="+token;
    let urlPresentation = "json/akiaYsondre/presentation.json";
    // let urlReputation = "https://eu.api.blizzard.com/profile/wow/character/ysondre/akia/reputations?namespace=profile-eu&locale=fr_Fr&access_token="+token
    let urlReputation = "json/akiaYsondre/reputation.json";
    $.get(urlPresentation, presentation).done(function(){

    })
    .fail (function(){
        alert("error");
    })
    .always(function(){

    });

    $.get(urlReputation, reputation).done(function(){

    })
    .fail (function(){
        alert("error");
    })
    .always(function(){

    });
    $.get(urlReputation, tri).done(function(){

    })
    .fail (function(){
        alert("error");
    })
    .always(function(){

    });
 
}

function buttonAkiaYsondreChassou(){
  
    // let urlPresentation = "https://eu.api.blizzard.com/wow/character/ysondre/akiæ?locale=fr_FR&access_token="+token;
    let urlPresentation = "json/chassouYsondre/presentation.json";
    // let urlReputation = "https://eu.api.blizzard.com/profile/wow/character/ysondre/aki%C3%A6/reputations?namespace=profile-eu&locale=fr_Fr&access_token="+token;
    let urlReputation = "json/chassouYsondre/reputation.json";

    $.get(urlPresentation, presentation).done(function(){

    })
    .fail (function(){
        alert("error");
    })
    .always(function(){

    });

    
    $.get(urlReputation, reputation).done(function(){

    })
    .fail (function(){
        alert("error");
    })
    .always(function(){

    });
    $.get(urlReputation, tri).done(function(){

    })
    .fail (function(){
        alert("error");
    })
    .always(function(){

    });
}