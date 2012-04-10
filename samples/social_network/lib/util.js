(function() {
  var fs, vm;

  fs = require('fs');

  vm = require('vm');

  exports.includeInThisContext = function(path) {
    var code;
    code = fs.readFileSync(path);
    return vm.runInThisContext(code, path);
  };

}).call(this);
