var randomResult;
var lost = 0;
var win = 0;
var previous = 0;


var resetandStart = function(){

    $('.crystals').empty();

    

    randomResult = Math.floor(Math.random() * 90) + 19;
    console.log(randomResult);

$("#result").html(randomResult);


for(var i = 0; i < 4; i++){
   var random = Math.floor(Math.random() * 11) + 1;
//    console.log(random)

   var crystal = $("<div>")
       crystal.attr({
           "class": 'crystal', 
           "data-random": random
       });
   $(".crystals").append(crystal);

   
   $("#start").hide();
   $("#together").show();
   $("#random-num").show();
    }
}



$('#start').on('click' , function(){
    resetandStart();
})


$("#curent").html(previous);

$("#together").hide();

$("#random-num").hide();

$(document).on('click' , ".crystal" , function(){

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    if (previous > randomResult){
        lost++;

        $('#lost').html( + lost);

        $("#text").html("You Lost");

        previous = 0

        $("#alert").show("fast");

        $("#alert").unbind();
        setTimeout(function(){
            show();
            reset();
        }, 1500);

        $("#curent").empty();

       

    }
    else if (previous === randomResult){
        win++;

        $('#win').html(+ win);

        $("#text").html("You Win")

        previous = 0;

        $("#alert").show("fast");

        $("#alert").unbind();
        setTimeout(function(){
            show();
            reset();
        }, 1500);

        $("#curent").empty();
       
    }

var show = function(){

   $('#alert').on('click' , function(){
       off();
       
   })
}  
  var off = function () {
   $('#alert').hide();
    $("reset-text").empty();
    }


    var reset = function(){
        $("#reset-text").html("Click to Play Again")
        resetandStart();
    }

    $("#curent").append(" "+ previous)
   
    console.log(previous)
})