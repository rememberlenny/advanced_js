
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
    this.keywordTracker = [];
    $.each(this.storedKeywords, function(i, item){

      if(typeof(that.keywordTracker[item]) === "number" ){ //IF STORED


      }else{ //CREATE STORE
        that.keywordTracker.push(
          {
            keyword: item,
            value: 1,
            color: "" 
          }
        );
      }
    });
    console.log(this.keywordTracker);
    this.generatePieChart();
  },
  checkObjectValue: function(){
    var that = this;
    $.each(this.keywordTracker, function(j, item){
      for(i=0; i < that.keywordTracker.length; i++){
        console.log(item.keyword === that.keywordTracker[i].keyword);

      }
    })
    item === this.keywordTracker[i].keyword
  },
  generateChartData: function(){

  },
  generatePieChart: function(){
    this.ctx = document.getElementById("myChart").getContext("2d");
    this.myNewChart = new Chart(this.ctx).Pie(data); 
  }
};