var _msbuild = require('../../../msbuild');
var msbuild = new _msbuild(function(){});

msbuild.sourcePath = 'src/webexample1.sln';
msbuild.configuration = 'debug';
msbuild.publishProfile = 'local';
msbuild.publish(); 