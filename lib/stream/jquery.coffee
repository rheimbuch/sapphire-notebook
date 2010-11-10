
define ['stream/protocol', 'matchjs', 'underscore'], (Stream, Match, underscore) ->
  
  _ = underscore._
  
  jQueryElement = 
    __compare__: (obj) ->
      if !(obj instanceof jQuery)
        throw Match.NO_MATCH
      else 
        [obj]
  
  Stream.write.implement [jQueryElement, String], (el, str) ->
    _.each el.get(), (domEl) -> Stream.write(domEl, str)
  
});