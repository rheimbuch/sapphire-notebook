define ["backbone", "multifn/multifn"], (Backbone, Multi) ->
  Element = Backbone.Model.extend {
      content: () -> this.get('content')
    },
    {
      build: Multi()
    }
  
  Element.build.implement [{type:String}], (obj) -> new Element(obj)
  
  return Element
    
