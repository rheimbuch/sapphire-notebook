
define([
        'stream/protocol', 
        'core/match', 
        'support/underscore'
       ],function(Stream, Match, _){
          
  var DomElement = {
    __compare__: function(obj){
      if(!_.isElement(obj)) throw Match.NO_MATCH;
      return [obj];
    }
  };
  
  var FormDefinition = function(obj){
    if(obj.__form__ == 'inputEx' || _.isArray(obj.fields)) {
      return [obj];
    }
    else {
      throw Match.NO_MATCH;
    }
  };
  
  Stream.writeElement.implement([DomElement, String], function(el, str){
    var content  = el.innerHTML;
    el.innerHTML = content + str;
  });
  
  Stream.write.implement([DomElement, String], function(el, str){
    var node = document.createElement('div');
    node.innerHTML = str;
    el.appendChild(node);
  });
  
  // Stream.write.implement([DomElement, FormDefinition], function(el, formDef){
  //   
  // })
  
  Stream.write.implement([DomElement, Array], function(el, array){
    _.each(array, function(item){
      Stream.write(el, item);
    })
  });
  
});