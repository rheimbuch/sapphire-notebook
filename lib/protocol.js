
define(['multi', 'underscore', 'match'], function(Multi, _, Match){
  
  
  var Protocol = function(definitions) {
    
    var protocol = {};
    
    _.each(definitions, function(doc, name){
      protocol[name] = Multi(doc);
    });
          
    return protocol;
  };
  
  Protocol.implemented = function(protocol, obj){
    var method_matchers = {};
    
    _(protocol).chain()
     .functions()
     .each(function(f){
        method_matchers[f] = _(protocol[f].__matchers__).chain()
                               .map(function(matcher){return Match.apply(this,[matcher[0], true])})
                               .value()
      });
    console.log(method_matchers);
    // return method_matchers;
    return _.all(method_matchers, function(method_matches){return _.any(method_matches, function(match){return match(obj)})});
  };
  
  return Protocol;
});