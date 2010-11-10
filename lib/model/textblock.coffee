define ["backbone", "text/formatter"], (Backbone, Format) ->
  Textblock = Backbone.Model.extend {
      toString: () -> Format(this.toJSON);
    },
    {
      formatter: Format
    }
