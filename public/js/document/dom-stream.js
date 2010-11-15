define(["stream/protocol",
        "client/stream/dom",
        "underscore",
        "matchjs"], function(Stream, strdom, underscore, matchjs){

  var _ = underscore._;
  var Match = matchjs.Match;
  
  DomElement = {
    __compare__: function(obj){
      if(!_.isElement(obj))
        throw Match.NO_MATCH;
      else
        return [obj];
    }
  };
  
  Stream.write.implement([DomElement, Object], function(el, obj){
    Stream.write(el, JSON.stringify(obj));
  });
  
  
});