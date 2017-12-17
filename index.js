function WebpackDeletePlugin(options) {
  WebpackDeletePlugin.prototype.apply = function(compiler) {
    compiler.plugin("done", function(compilation) {
      
      const del = require("del");
      del(options).then(paths => {
        console.log("\nWebpackDeletePlugin has deleted:\n", paths.join("\n"));
      });

    });    
  };
}

module.exports = WebpackDeletePlugin;