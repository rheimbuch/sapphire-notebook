define ["backbone", "multifn/multifn", "showdown"], (Backbone, Multi, showdown) ->
  markdownConvertor = new showdown.Showdown.convertor()
  formatter = Multi()
    

  
  formatter.implement [{attributes: {type:"text", content_type:"text/plain", content:String}}], (element) ->
    element.get('content')
  
  formatter.implement [{attributes: {type:"text", content_type:"text/markdown", content:String}}], (element) ->
    markdownConvertor.toHTML(element.get('content'))
  
  Element = Backbone.Model.extend {
      content: () -> this.get('content')
      format: formatter
    },
    {
      format: formatter
    }
  
  return Element
  
