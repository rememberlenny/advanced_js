http://jsbin.com/aNUCeg/5/edit?html,js,output

function namespace(path){ 
  var splitPath = path.split('.'),
      context = window;
  if (context[path]){ return false; }
  for(var i = 0; splitPath.length > i; i++){
    context[splitPath[i]] = {};
    context = context[splitPath[i]];
  }
}

test("Window.foo is defined", function(){
  namespace('foo');  
  ok( window.foo , "Passed!");
});

test("Window.foo.lib is defined", function(){
  namespace('foo.lib'); 
  ok( window.foo.lib , "Passed!");
});

test("Window.foo.lib.woo is defined", function(){
  namespace('foo.lib.woo');
  ok( window.foo.lib.woo , "Passed!");
});

test("Window.foo exists, dont overwrite", function(){
  window.foo = 123;
  namespace('foo');  
  ok( window.foo === 123 , "Passed!");
});