define ["backbone", "client/model/element"], (Backbone, Element) ->
  ElementCollection = Backbone.Collection.extend
    model: Element