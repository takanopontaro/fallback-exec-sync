'use strict';
module.exports = new ((function() {
  function _Class() {
    var err, sh, stderr, w, _ref;
    stderr = process.stderr;
    _ref = [stderr.write, null], w = _ref[0], stderr.write = _ref[1];
    try {
      sh = require('execSync');
      this.exec = function(cmd) {
        var res;
        res = sh.exec(cmd);
        res.output = res.stdout;
        delete res.stdout;
        return res;
      };
    } catch (_error) {
      err = _error;
      sh = require('shelljs');
      this.exec = function(cmd) {
        return sh.exec(cmd, {
          silent: true
        });
      };
    }
    stderr.write = w;
  }

  _Class.prototype.run = function(cmd) {
    return this.exec(cmd).code;
  };

  return _Class;

})());

//# sourceMappingURL=main.js.map
