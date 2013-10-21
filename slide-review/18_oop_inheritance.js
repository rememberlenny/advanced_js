<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
  
<style>
  ul{ -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; -o-user-select: none; }
  li{ list-style: none; font-size: 1em; float:left; width: 30px; height: 30px; }
  li:nth-child(6){ clear:right; }
  li:nth-child(6n+7){ clear:left; }
</style>

<body>
  <ul></ul>
  <script>
  var Game = function(){
    var cards       : [],
        clickCount  : 0,
        $this       : null, // Used to store click target
        $firstClickElement : null;

    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    for(var k = 0; k < 2; k++){
      for (var i = 1; i < 19; i++){
        cards.push(i);
        shuffle(cards);
      }
    }

    for (i=0; i < cards.length; i++) {
      $('ul').append('<li class="' + cards[i] + '">' + 'X' + '</li>');
    }

    $('li').click( function() {
      if(clickCount   ===  2 )  { return false; }
      $this = $(this);
      if($this.html() === 'X'){ clickCount++; $this.html( $this.attr('class') ); }
      if(clickCount   ===  1 ){ $firstClickElement = $this; }
      if(clickCount   ===  2 ){
        window.setTimeout( function(){
          if( $this.html() === $firstClickElement.html()){
            $firstClickElement.css('visibility', 'hidden');
            $this.css('visibility', 'hidden'); 
          } else {
            $('li').html('X');
          };
          clickCount = 0;
        }, 1500);
      }

    });
  };
      
  var memoryGame = new Game();
  </script>
</body>
</html>