require(
  {
    baseUrl: "/lib/"
  },
  [
  "client/model/document",
  "client/model/document_collection",
  "js/form/dom-stream.js"
  ],
  function(documentModel, documentCollection){
    DocumentModel = documentModel;
    DocumentCollection = documentCollection;
    
    sampleDocs = new DocumentCollection();
    sampleDocs.url = "/documents/sample1";
    sampleDocs.fetch();
  }
)