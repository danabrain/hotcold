$(document).ready(function(){

  /*--- Display information modal box Event handlers: we need .what to be available and the HTML to be understood by the browser before we select .what---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    /*--creates random number when page loads--*/
    function randomNumber() {
      return Math.floor(Math.random()*(100-1)) +1;
    }

    /*--- function newGame(); *will call other functions when user clicks "New Game" ---*/
      var newGame = function() {
      /*--resets guessCount and guessList when newGame is invoked--*/
      var guessCount = 0
      $("#count").html("0");
      $("#guessList").html("");
      $("#feedback").html("Make your Guess!");

      var ranNum = randomNumber();
      console.log(ranNum);

      /*--listens for submit and captures userGuess--*/
      $("form").off().on('submit', function(event) {
          event.preventDefault();
          var numberGuess = parseInt($("#userGuess").val());

          /*--resets input field--*/
          $("#userGuess").val("");

          /*--compares userGuess to random number--*/
          if(isNaN(numberGuess)) {
            $("#feedback").html("Please enter a number 1-100");
            return;
          } else {
            if(numberGuess < 1 || numberGuess > 100) {
              $("#feedback").html("Please enter a number 1-100");
              return;
            }
          }

        /*--populates guessList with new <li>--*/
        $("#guessList").append($("<li>", {"text": numberGuess}));

        /*--gives feedback--*/
        if(numberGuess === ranNum) {
          $("#feedback").html("That's It!");
        } else {
            if(numberGuess < ranNum-50 || numberGuess > ranNum + 50) {
              $("#feedback").html("Ice Cold!");
            } else {
              if(numberGuess < ranNum-20 || numberGuess > ranNum + 20) {
                $("#feedback").html("Cold!");
              } else {
                if(numberGuess < ranNum-10 || numberGuess > ranNum + 10) {
                  $("#feedback").html("WARM!");
                } else {
              $("#feedback").html("RED HOT!");
            }
          }
        }
      }

        /*--increments guess count--*/
        guessCount = guessCount + 1
        $("#count").html(guessCount);

      });
    }

      /*--calls newGame function when page loads--*/
      newGame();

      /*--calls newGame function when New button is clicked--*/
      var buttonPress = function() {
       $("a.new").on('click', function(e) {
        e.preventDefault();
        newGame();
      });
     }

     buttonPress();

});

