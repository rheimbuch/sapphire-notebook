
define ["stream/protocol", "matchjs", "underscore"], (Stream, Match, underscore) ->
  
  _ = underscore._
  
  DomElement = 
    __compare__: (obj) ->
      if !_.isElement(obj) 
        throw Match.NO_MATCH
      else
        [obj]
  
  
  Stream.writeElement.implement [DomElement, String], (el, str) ->
    content  = el.innerHTML
    el.innerHTML = content + str
  
  Stream.write.implement [DomElement, String], (el, str) ->
    node = document.createElement('div')
    node.innerHTML = str
    el.appendChild(node)
  
  
  Stream.write.implement [DomElement, Array], (el, array) ->
    _.each array, (item) -> Stream.write(el, item)
  
});