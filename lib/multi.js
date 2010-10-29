
// var write_stream = Multi();
// 
// // specialize 'write_stream' on [PanelStream, String] arguments
// multifn(write_stream, [PanelStream, String], function(panel, string){
//   
// });

define(['match', 'underscore'], function(Match, underscore){
  var MultiFn = function(multi, match, func) {
    var matchers = multi.__matchers__;
    matchers.push([match, func]);
    return multi;
  };
  
  var MultiDef = function(docString){
    var matchers = [];
    var default_match = function(obj) {
      throw "No implementation for: " + obj;
    };
    
    var dispatcher = function(){
      var args = Array.prototype.slice.call(arguments);
      
      var match = Match.apply(this, underscore.flatten([matchers, default_match]));
      return match.apply(this, args);
    };
    
    dispatcher.__matchers__ = matchers;
    dispatcher.__docString__ = docString;
    dispatcher.implement = function(match, func){
      MultiFn(dispatcher, match, func);
    };
    
    return dispatcher;
  };
  

  
  return MultiDef;
})