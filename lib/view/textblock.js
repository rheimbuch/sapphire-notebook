define(['backbone', 'underscore'], function(Backbone, underscore){
  var _ = underscore._;
  
  var Textblock = Backbone.View.extend({
    tagName: "div",
    className: "text-block",
    
    events: {
      "click": "edit"
    },
    
    initialize: function() {
      _.bindAll(this, "render");
      this.model.bind("change", this.render);
    },
    
    render: function() {
      $(this.el).html(this.model.toString());
    },
    
    edit: function() {
      alert("Clicked a text-block");
    }
  });
  
  
  return Textblock;
});