const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});
module.exports = {
    //避免eslint报错
    lintOnSave: false
}