// JavaScript Document
var chartjsApp = chartjsApp || {};

chartjsApp = {
  requestQueryLimit: 50,
  apiKey: 'epjpdcf3wr95y9yj3n4emsak',
  requestVariables: 'http://api.espn.com/v1/fantasy/football/news/?insider=no&limit='+ this.requestQueryLimit +'&apikey='+ this.apiKey,
  request: 'http://api.espn.com/v1/fantasy/football/news/?insider=no&limit=50&apikey=epjpdcf3wr95y9yj3n4emsak',
  returnedData: 0,
  storedKeywords: [],
  keywordTracker: [],
  ctx: 0,
  myNewChart: 0,
  isNotMatch: true,
  colorList: [],
  numberOfKeywords: 0,
  initialize: function(){
    this.returnedData = 0;
    this.storedKeywords = [];
    this.keywordTracker = {};
    var url = this.request;
    this.getRequestContent(url);
  },
  getRequestContent: function(url){
    var that = this;
    $.getJSON(url, function (data) {
      that.returnedData = data;
      console.log( that.returnedData );
      that.iterateThroughResponse(that.returnedData);
    });
  },
  iterateThroughResponse: function(data){
    var that = this;
    $.each(data.headlines, function(i, item){
      that.storeKeywordsInArray(item.keywords);
    });
    this.iterateThroughArray(this.storedKeywords);
  },
  storeKeywordsInArray: function(data){
    var that = this;
    $.each(data, function(i, item){
      that.storedKeywords.push(item);
    });
  },
  iterateThroughArray: function(){
    var that = this;
    $.each(this.storedKeywords, function(i, item){
      if(typeof(that.keywordTracker[item]) === "number" ){
        that.keywordTracker[item] = that.keywordTracker[item]+1;
      }else{
        that.keywordTracker[item] = 1;
      }
    });
    console.log(this.keywordTracker);
    this.convertArrayContentsToObject();
  },
  convertArrayContentsToObject: function(){
    var that = this;
    this.storedKeywords = [];
    _.map(this.keywordTracker, function(value, key){      
      if( value > 1){

      that.storedKeywords.push({ 
        keyword: key,
        value: value,
        color: that.colorList[that.storedKeywords.length]  
      });
      }
    });
    that.storedKeywords = that.storedKeywords.sort(that.dynamicSort('-value'));
    this.generatePieChart(this.storedKeywords);
  },
  dynamicSort: function(property){
    // http://stackoverflow.com/questions/1129216/sorting-objects-in-an-array-by-a-field-value-in-javascript
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  },
  checkObjectValue: function(){
    var that = this;
    this.isNotMatch = true;
    $.each(this.keywordTracker, function(j, item){
      for(i=0; i < that.keywordTracker.length; i++){
        if(item.keyword === that.keywordTracker[i].keyword){
          that.isNotMatch = false;
          return that.isNotMatch;
        }
      }
    });
  },
  printChartedData: function(){
    var that = this;
    $.each(this.storedKeywords, function(i, item){
      var keywordItem = that.storedKeywords[i]['keyword'];
      var valueItem = that.storedKeywords[i]['value'];
    });
    this.generateColors();
  },
  generateColors: function(){
    var that = this;
    this.numberOfKeywords = Object.keys(that.storedKeywords).length; // The dividing number is blck magic magic
    this.frequency=5/this.numberOfKeywords;
    for (var k = 0; k < this.numberOfKeywords; ++k){
      r = Math.floor( Math.sin(this.frequency*k + 0) * (127) + 128);
      g = Math.floor( Math.sin(this.frequency*k + 2) * (127) + 128);
      b = Math.floor( Math.sin(this.frequency*k + 4) * (127) + 128);                
      that.colorList.push('rgb('+r + ','+ g +',' + b+')');
    };
    this.applyColors();
  },
  applyColors: function(){
    var that = this;
    $.each(this.storedKeywords, function(i, item){
      that.storedKeywords[i]['color'] = that.colorList[i];
    });
    this.appendDataList();
  },
  appendDataList: function(){
    var that = this;
    $.each(this.storedKeywords, function(i, item){
      $('.item-listing').append('<li style="color:' + that.storedKeywords[i]['color']+'">' + that.storedKeywords[i]['keyword']+': '+ that.storedKeywords[i]['value'] +'</li>');
    });
  },
  generatePieChart: function(){
    this.ctx = document.getElementById("myChart").getContext("2d");
    this.myNewChart = new Chart(this.ctx).Pie(this.storedKeywords); 
    this.printChartedData();
  },
  generateChartData: function(){
    
  }
};