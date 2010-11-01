
define(['match', 'underscore'], function(Match, _){
  var root = this;
  
  var DefMulti = function(dispatcher){
    
    var matchers = [];
    
    var dispatcher = dispatcher || function(){return Array.prototype.slice.call(arguments)};
    
    var multi = function(){
      var args = Array.prototype.slice.call(arguments);
      
      var target = (this == root) ? args.shift() : this ;
      args.unshift(target);
      
      var toMatch = dispatcher.apply(null, args);
      
      var matchArgs = [];
      _.each(matchers, function(pair){
        matchArgs.push(pair[0]);
        matchArgs.push(pair[1]);
      });
      
      var matcher = Match.apply(null, matchArgs);
      
      return matcher(toMatch);
    };
    
    multi.addMethod = function(match, func) {
      matchers.push([match, func]);
    };
    
    multi.removeMethod = function(match) {
      // TODO: implement method removal
    };
    
    
    multi.implement = function(match, func) {
      multi.addMethod(match, func);
      return multi;
    };
    
    multi.__matchers__ = matchers;
    
    return multi;
  };
  
  return DefMulti;
})