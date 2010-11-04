
define(['core/multifn', 'underscore', 'core/match'], function(Multi, underscore, Match){
  
  var root = this;
  var _ = underscore._;
  
  var Protocol = function(definitions) {
    var self = this == root ? {} : this;
    
    self.__ignore_object__ = true;
    
    _.each(definitions, function(doc, name){
      self[name] = Multi();
      self[name].__docString__ = doc;
    });
          
    if(self !== this)
      return self;
  };
  return Protocol;
});