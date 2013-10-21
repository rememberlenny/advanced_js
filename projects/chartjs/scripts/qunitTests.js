

test("When request is made, JSON is returned", 1, function(){
  stop();
  url = '/scripts/sample.json';
  chartjsApp.getRequestContent(url);
  setTimeout(
    function(){  
      ok(typeof(chartjsApp.returnedData) === "object", 
        "Object is retrieved from getRequestContent()");
      start();
      chartjsApp.storedKeywords = [];
    }, 1000
  );
});

test("Make sure responses are stored", function(){
  stop();
  url = '/scripts/sample.json';
  chartjsApp.getRequestContent(url);
  setTimeout(
    function(){
      ok( chartjsApp.storedKeywords.length === 18, 
        "Array is being iterated and stored." );
      start();
      chartjsApp.storedKeywords = [];
    }, 1000
  );
});

test("Count keywords in iterateThroughArray", function(){
  stop();
  url = '/scripts/sample.json';
  chartjsApp.getRequestContent(url);
  setTimeout(
    function(){
      ok( typeof(chartjsApp.keywordTracker) === "object", 
        "Array is being iterated and stored." );
      start();
      chartjsApp.storedKeywords = [];
    }, 1000
  );
});



