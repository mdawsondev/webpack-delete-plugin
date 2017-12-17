function WebpackDelete(options) {
  WebpackDelete.prototype.apply = function(compiler) {
    // Setup callback for accessing a compilation:
    compiler.plugin("emit", function(compilation, callback) {
      setTimeout(function() {
        const del = require('del');
        del(options).then(paths => {
          console.log('Deleted files and folders:\n', paths.join('\n'));
        });
        callback();
      }, 1000);
    });    
  };
}

module.exports = WebpackDelete;