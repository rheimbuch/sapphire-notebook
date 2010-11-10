Path = require('path')
print = require('promised-io/process').print
nodules = require('nodules')
local = nodules.forBrowser().useLocal()
compile = require(local.compiler.module)[local.compiler.function || "compile"]

CompiledModuleSource = (id) ->
  path = local.getCachePath(id)
  
  source = local.getModuleSource(id)
  
  if source && Path.extname(path) == local.extension && local.compiler
    print("compiling: " + path)
    
    try
      compile(source)
    catch err
      print(err);
      print("error compiling: " + path)
      source
  else
    print("non-compiled: " + path)
    source


exports.compiledModuleSource = CompiledModuleSource