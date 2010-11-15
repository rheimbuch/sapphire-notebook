define(["js/form/inputex-form.js",
        "stream/protocol",
        "client/stream/dom",
        "underscore",
        "matchjs"], function(inputexForm, Stream, strdom, underscore, matchjs){

  console.log("required form/dom-stream.js");
  StreamProtocol = Stream;
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
  
  Stream.write.implement([DomElement, {type:"string"}], function(el, def){
    var options = _.clone(def);
    options['parentEl'] = el;
    console.log("writing inputex string field");
    new inputEx.StringField(options);
  });
  
  Stream.write.implement([DomElement, {fields:Array}], function(el, def){
    var options = _.clone(def)
    options['parentEl'] = el;
    
    new inputEx.Form(options);
  });
  
  
});