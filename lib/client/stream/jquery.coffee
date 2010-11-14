define ['stream/protocol', 'client/stream/dom', 'matchjs', 'underscore'], (Stream, matchjs, underscore) ->
  
  _ = underscore._
  Match = matchjs.Match
  
  jQueryElement = 
    __compare__: (obj) ->
      if !(obj instanceof jQuery)
        throw Match.NO_MATCH
      else 
        [obj]
  
  Stream.write.implement [jQueryElement, String], (el, str) ->
    _.each el.get(), (domEl) -> Stream.write(domEl, str)
