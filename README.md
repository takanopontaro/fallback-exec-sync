# fallback-exec-sync

Fall back to shelljs if execSync cannot be installed. On Windows, execSync hards to be installed sometimes because of requirement for installation of node-gyp. Shelljs also has synchronous exec but a little slower than execSync. So one of solutions is that try to install execSync first and if failed, install shelljs.


## Install

```shell
npm install fallback-exec-sync
```


## Usage

```js
var sh = require('fallback-exec-sync');

code = sh.run('echo 1');
console.log(code); //=> 0

// Note that a little difference from execSync.
// "stdout" is replaced to "output".
res = sh.exec('echo 1');
console.log(res.code); //=> 0
console.log(res.output); //=> 1\n
```


## Test

```shell
npm test
```


## License

Licensed under the MIT license.


## Special thanks to

* [Keiko Kitagawa](http://official.stardust.co.jp/keiko/)
