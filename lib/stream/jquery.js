
define([
        'stream/protocol', 
        'core/match', 
        'underscore'
       ],function(Stream, Match, underscore){
  
  var _ = underscore._;
  
  var jQueryElement = {
    __compare__: function(obj){
      if(!(obj instanceof jQuery)) throw Match.NO_MATCH;
      return [obj];
    }
  };
  

  
  Stream.write.implement([jQueryElement, String], function(el, str){
    _.each(el.get(), function(domEl){
      Stream.write(domEl, str);
    });
  });
  
  
});