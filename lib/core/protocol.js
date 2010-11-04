
define(['core/multifn', 'support/underscore', 'core/match'], function(Multi, _, Match){
  
  var root = this;
  
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