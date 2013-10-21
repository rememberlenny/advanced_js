Prototype 

the instances can be manipulated without affecting other instances or the prototype 
The prototype saves memory because you dont have to create multiple instaces 


var Tile = function(val){
  this.value = val;
  this.$el = $('<div>' + val + '</div>');
  // Encapsulation issue
  // $('body').append(this.$el);
  this.$el.on('click', function(){
    // Doesnt have a flip function    
    // this.flip;
    this.$el.on('click', this.flip.bind(this));
  });
}

Tile.prototype.flip = function(){
  alert('flipped ' + this.value');
};

var myTile = new Tile('foo');

$('div').click(function(){
