// INITIAL CODE WHEN THE PAGE IS READY
$(document).ready(function(){
    $(".skill-cards").hide();
});


// ANIMATE THE SWITCH FROM PRESENTATION CARD TO THE PROGRAMMING CARDS
$(".arrow").on("click",function(){
    if ( $(".presentationCard").is(":visible")==true){
        $(".presentationCard").hide(100);
    } else{
        $(".presentationCard").show(100);
    }    
    if ( $(".skill-cards").is(":visible")==true) {
        $(".skill-cards").hide(100);
    } else{
        $(".skill-cards").show(100);
    }
    
});

