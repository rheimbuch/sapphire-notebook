
define(['core/protocol'], function(Protocol){
  return Protocol({
    readElement: "Reads a single element from a stream.",
    read: "Reads a sequence of elements from a stream.",
    writeElement: "Writes an element to a stream.",
    write: "Writes a sequence of elements to a stream."
  });
});