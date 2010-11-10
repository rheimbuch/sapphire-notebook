define ["showdown", "multifn/multifn"], (Showdown, Multi) ->
  formatter = Multi();
  
  formatter.implement [{format:'plaintext', text:String}], (obj) -> obj.text || ''
  
  markdownConvertor = new Showdown.converter()
  formatter.implement [{format:'markdown', text:String}], (obj) ->
    text = obj.text;
    text && markdownConvertor.makeHtml(text)
  
  formatter