// KEY PRESS METHOS WIH INPUT HTML ELEMENT
$("input").keypress(function(event){
    $("h1").text(event.key);
    $("h1").addClass("big-title");
});


// ON METHOD
$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
});

// WE CAN ADD HTML ELEMENTS WITH CODE 
$("h1").append("<button> Append.</button>");
$("h1").before("<button> Before. </button>");
$("h1").after("<button> After. </button>");
$("h1").prepend("<button> Prepend. </button>");

// HIDE METHOD
$("button").on("click",function(){
    //$("h1").hide();
    $("h1").fadeToggle();
});