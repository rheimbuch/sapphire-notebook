define ["backbone", "underscore", "client/model/element"], (Backbone, underscore, Element) ->
  _ = underscore._
  
  Document = Backbone.Model.extend
    elements: () ->
      self = this
      content = this.get('content')
      _.map content, (raw) -> 
        element = Element.build(raw)
        element.document = self
        element
    
    content: () -> this.elements()
