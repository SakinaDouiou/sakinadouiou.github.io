var diaporama = 1;
affichage(diaporama);

function boutons(n) {
  affichage(diaporama += n);
}

function actifIndic(n) {
  affichage(diaporama = n);
}

function affichage(n) {
  var i;
  var diapoImg = document.getElementsByClassName("diapo");
  var indic = document.getElementsByClassName("demo");
  if (n > diapoImg.length) {diaporama = 1} 
  if (n < 1)    {diaporama = diapoImg.length}
  for (i = 0; i < diapoImg.length; i++) {
     
   diapoImg[i].style.opacity = "0";
  }

  diapoImg[diaporama-1].style.opacity = "1";    
}





// var compteur = 1;
// affichage(compteur);



//  $("#numerotation").text(compteur);
//          $(document).on("click",".fonddiapo", function(){

//            compteur = compteur + 1;
//             $("#numerotation").text(compteur);
//          });


