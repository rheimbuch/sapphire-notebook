define ["backbone", "client/model/document"], (Backbone, Document) ->
  DocumentCollection = Backbone.Collection.extend
    model: Document,
    url: "/documents"
