var cp, sh;

cp = require('child_process');

sh = require('../lib/main');

describe('All tests', function() {
  it('Setup for all', function() {});
  it('normal #exec', function() {
    var code;
    code = null;
    cp.exec('echo 1', function(err, stdout, stderr) {
      return code = err ? err.code : 0;
    });
    return expect(code).toBeNull();
  });
  it('#run', function() {
    var code;
    code = sh.run('echo 1');
    return expect(code).toBe(0);
  });
  it('#exec', function() {
    var res;
    res = sh.exec('echo 1');
    expect(res.code).toBe(0);
    return expect(res.output.trim()).toBe('1');
  });
  return it('Tear down for all', function() {});
});

//# sourceMappingURL=allSpec.js.map
