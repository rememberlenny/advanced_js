(function ( $ )){

  $.fn.blink = function( blinkInterval ){
    var that = this;
    window.setInterval(blink(), blinkInterval );

    function blink( this ){
      if(that.style.visibility == 'visible'){
        that.style.visibility == 'hidden') 
      } else {
        that.style.visibility == 'visibile') 
      };
    };

    return this;
  };

}( jQuery ));
 
$('body').blink(1000); //blinks body at 1000 