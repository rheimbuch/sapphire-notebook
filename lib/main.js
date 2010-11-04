require(
  ["core/multifn", "core/match", "core/protocol", "stream/protocol", "stream/dom"], 
  function(multifn, match, protocol, stream, dom_stream) {
  // scripts/modules will be loaded by the time this is executed
  
  require.ready(function() {
    // dom and all scripts/modules are ready
    Multi = multifn;
    Match = match;
    Protocol = protocol;
    Stream = stream;
    
    
  })
})