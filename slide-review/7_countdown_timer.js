function countdown(seconds){
  for(var i = seconds; i > 0; i--){
    setTimeout(console.log( i + '...' ));
    if ( i == 1 ){
      console.log('Time is up!');
    }
  }
}

countdown(10);