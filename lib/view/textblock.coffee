define ['backbone', 'underscore'], (Backbone, underscore) ->
  _ = underscore._
  
  Textblock = Backbone.View.extend
    tagName: "div"
    className: "text-block"
    
    events:
      "click": "edit"
    
    initialize: () ->
      _.bindAll(this, "render")
      this.model.bind("change", this.render)
    
    render: () ->
      $(this.el).html(this.model.toString())
    
    edit: () ->
      alert("Clicked a text-block")
