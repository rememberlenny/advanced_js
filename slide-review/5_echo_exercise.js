JS Bin

Link http://jsbin.com/AgUgINI/1/edit?html,console


Code

    function echo(){
      for(i=0; i < arguments.length; i++){
         console.log(arguments[i]);
      }
    }
    
    echo();
    echo('bla');


    echo('foo', 'bar', 'baz');

Console

"bla"
"foo"
"bar"
"baz"