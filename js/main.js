$(document).ready(function(){



// --------------PERSO--------------------------

  function VisibleBanlieues(){
        $("#PhotoBanlieues").css('visibility','visible');
        };
      function InvisibleBanlieues(){
        $("#PhotoBanlieues").css('visibility','hidden');
        };
      
      $(document).on("mouseenter", "#Banlieues", VisibleBanlieues);
      $(document).on("mouseleave", "#Banlieues", InvisibleBanlieues);




  function VisibleWhite(){
        $("#PhotoWhite").css('visibility','visible');
        };
      function InvisibleWhite(){
        $("#PhotoWhite").css('visibility','hidden');
        };
      
      $(document).on("mouseenter", "#White", VisibleWhite);
      $(document).on("mouseleave", "#White", InvisibleWhite);




	function VisibleEnnui(){
       	$("#PhotoEnnui").css('visibility','visible');
        };
    function InvisibleEnnui(){
        $("#PhotoEnnui").css('visibility','hidden');
        };
      
      $(document).on("mouseenter", "#Ennui", VisibleEnnui);
      $(document).on("mouseleave", "#Ennui", InvisibleEnnui);




      function VisibleBoys(){
        $("#PhotoBoys").css('visibility','visible');
        };
    function InvisibleBoys(){
        $("#PhotoBoys").css('visibility','hidden');
        };
      
      $(document).on("mouseenter", "#Boys", VisibleBoys);
      $(document).on("mouseleave", "#Boys", InvisibleBoys);






// --------------AUTRE--------------------------

    var vidInsomnie = document.getElementById("ImgInsomnie");

    function playVidInsomnie() {
        vidInsomnie.play();
    }

    function pauseVidInsomnie() {
        vidInsomnie.pause();
    }

    function VisibleInsomnie(){
            $("#BlocInsomnie").css('visibility','visible');
            };
    function InvisibleInsomnie(){
            $("#BlocInsomnie").css('visibility','hidden');
            };

    $(document).on("mouseenter", "#Insomnie",  playVidInsomnie);
    $(document).on("mouseleave", "#Insomnie", pauseVidInsomnie);

    $(document).on("mouseenter", "#Insomnie", VisibleInsomnie);
    $(document).on("mouseleave", "#Insomnie", InvisibleInsomnie);





    var vidAngele = document.getElementById("ImgFlouAngele");

    function playVidAngele() {
        vidAngele.play();
    }

    function pauseVidAngele() {
        vidAngele.pause();
    }

    function VisibleFlouAngele(){
            $("#BlocFlouAngele").css('visibility','visible');
            };
    function InvisibleFlouAngele(){
            $("#BlocFlouAngele").css('visibility','hidden');
            };

    $(document).on("mouseenter", "#FlouAngele",  playVidAngele);
    $(document).on("mouseleave", "#FlouAngele", pauseVidAngele);

    $(document).on("mouseenter", "#FlouAngele", VisibleFlouAngele);
    $(document).on("mouseleave", "#FlouAngele", InvisibleFlouAngele);




    var vidMifasol = document.getElementById("ImgMifasol");

    function playVidMifasol() {
        vidMifasol.play();
    }

    function pauseVidMifasol() {
        vidMifasol.pause();
    }

    function VisibleMifasol(){
            $("#BlocMifasol").css('visibility','visible');
            };
    function InvisibleMifasol(){
            $("#BlocMifasol").css('visibility','hidden');
            };

    $(document).on("mouseenter", "#Mifasol",  playVidMifasol);
    $(document).on("mouseleave", "#Mifasol", pauseVidMifasol);

    $(document).on("mouseenter", "#Mifasol", VisibleMifasol);
    $(document).on("mouseleave", "#Mifasol", InvisibleMifasol);




var vidDeclaringIndependence = document.getElementById("ImgDeclaringIndependence");

    function playVidDeclaringIndependence() {
        vidDeclaringIndependence.play();
    }

    function pauseVidDeclaringIndependence() {
        vidDeclaringIndependence.pause();
    }

    function VisibleDeclaringIndependence(){
            $("#BlocDeclaringIndependence").css('visibility','visible');
            };
    function InvisibleDeclaringIndependence(){
            $("#BlocDeclaringIndependence").css('visibility','hidden');
            };

    $(document).on("mouseenter", "#DeclaringIndependence",  playVidDeclaringIndependence);
    $(document).on("mouseleave", "#DeclaringIndependence", pauseVidDeclaringIndependence);

    $(document).on("mouseenter", "#DeclaringIndependence", VisibleDeclaringIndependence);
    $(document).on("mouseleave", "#DeclaringIndependence", InvisibleDeclaringIndependence);




    var vidFindColor = document.getElementById("ImgFindColor");

    function playVidFindColor() {
        vidFindColor.play();
    }

    function pauseVidFindColor() {
        vidFindColor.pause();
    }

    function VisibleFindColor(){
            $("#BlocFindColor").css('visibility','visible');
            };
    function InvisibleFindColor(){
            $("#BlocFindColor").css('visibility','hidden');
            };

    $(document).on("mouseenter", "#FindColor",  playVidFindColor);
    $(document).on("mouseleave", "#FindColor", pauseVidFindColor);

    $(document).on("mouseenter", "#FindColor", VisibleFindColor);
    $(document).on("mouseleave", "#FindColor", InvisibleFindColor);




    var vidInesLongevial = document.getElementById("ImgInesLongevial");

    function playVidInesLongevial() {
        vidInesLongevial.play();
    }

    function pauseVidInesLongevial() {
        vidInesLongevial.pause();
    }

    function VisibleInesLongevial(){
            $("#BlocInesLongevial").css('visibility','visible');
            };
    function InvisibleInesLongevial(){
            $("#BlocInesLongevial").css('visibility','hidden');
            };

    $(document).on("mouseenter", "#InesLongevial",  playVidInesLongevial);
    $(document).on("mouseleave", "#InesLongevial", pauseVidInesLongevial);

    $(document).on("mouseenter", "#InesLongevial", VisibleInesLongevial);
    $(document).on("mouseleave", "#InesLongevial", InvisibleInesLongevial);

      






      })