define(['text/showdown','core/multifn'], function(Showdown, Multi){
  var formatter = Multi();
  
  formatter.implement([{format:'plaintext', text:String}], function(obj){
    var text = obj.text;
    return text || '';
  })
  
  var markdownConvertor = new Showdown.converter();
  formatter.implement([{format:'markdown', text:String}], function(obj){
    var text = obj.text;
    return text && markdownConvertor.makeHtml(text);
  })
  
  return formatter;
});