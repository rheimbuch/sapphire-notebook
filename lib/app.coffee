_ = require('underscore')._
print = require('promised-io/process').print
Static = require("pintura/jsgi/static").Static
Cascade = require("pintura/jsgi/cascade").Cascade
Transporter = require("transporter/jsgi/transporter").Transporter
Backbone = require('backbone')
require('showdown')

print("Starting Sappire Server");

CompiledLoader = require('util/loader')

jsgi = require('jsgi-node').start(
  Cascade [
    Static 
      urls:[""]
      root: "public"
      directoryListing: true,
    Transporter
      loader: CompiledLoader.compiledModuleSource
      resolveDeps: false
  ]
)

