
define(['core/match', 'underscore'], function(Match, underscore){
  var root = this;
  var _ = underscore._;
  
  var DefMulti = function(){
    var args = Array.prototype.slice.call(arguments);
    
    var matchers = [];
    
    var defaultDispatcher = function() {
      var args = Array.prototype.slice.call(arguments);
      return args;
    };
        
    var multi = function(){
      var args = Array.prototype.slice.call(arguments);
      
      var target = (this == root || this.__ignore_object__) ? args.shift() : this ;
      args.unshift(target);
      
      var matchArgs = [];
      _.each(matchers, function(pair){
        var pattern = pair[0];
        var func = pair[1];
        var funcWrapper = function(){
          var args = Array.prototype.slice.call(arguments);
          // console.log("current arguments:");
          // console.log(arguments);
          // console.log("popping arguments:");
          var orig = args.pop();
          // console.log(args);
          return func.apply(null, orig);
        }
        
        matchArgs.push(pattern);
        matchArgs.push(funcWrapper);
      });
      
      // console.log("matchArgs = ");
      // console.log(matchArgs);
      lastMatchArgs = matchArgs;
      var matcher = Match.apply(null, matchArgs);
      
      // console.log(args);
      return matcher(args);
      
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