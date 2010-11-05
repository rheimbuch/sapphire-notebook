define(['backbone','text/formatter'], function(Backbone, Format){
  
  var Textblock = Backbone.Model.extend({
    toString: function(){
      return Format(this.toJSON());
    }
  },
  {
    formatter: Format
  });
  
  
  return Textblock;
});