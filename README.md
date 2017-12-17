# Webpack Delete Plugin
The Webpack Delete plugin is used to delete files after completing the output process.

## Installation
`npm install webpack-delete-plugin --save-dev`

## Use

This plugin runs async after the output has been completed. Use it to delete files **after** they've been built! This plugin **does not** clean folders for pre-processing.

### General Use

```const WebpackDeletePlugin = require("webpack-delete-plugin");

module.exports = {
  ...
  plugins: [
    new WebpackDelete(["./path/file.js", "./path/**/*", "./path/folder/**"])
  ]
}
```

Delete entire folders with `./path/folder/**` - this will delete the folder and everything inside.

WebpackDelete takes a string or array of strings as input.