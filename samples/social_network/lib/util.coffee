fs = require "fs"
vm = require "vm"

exports.includeInThisContext = (path) ->
    # http://stackoverflow.com/a/9946809/464685
    code = fs.readFileSync path
    vm.runInThisContext code, path