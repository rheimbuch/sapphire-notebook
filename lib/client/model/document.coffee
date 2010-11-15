define ["backbone", "underscore", "client/model/element"], (Backbone, underscore, Element) ->
  _ = underscore._
  
  Document = Backbone.Model.extend
    
    initialize: () ->
      this.elements = new Backbone.Collection(this.load_elements())
      this.elements.bind "change", () -> this.set({content: this.elements.toJSON()}, {silent:true})
    
    load_elements: () ->
      self = this
      content = this.get('content')
      _.map content, (raw) -> 
        element = new Element(raw)
        element.document = self
        element
    
    content: () -> this.elements
    
    refresh: () ->
      Backbone.Model.prototype.refresh.apply(this, arguments)
      this.elements.refresh this.load_elements
