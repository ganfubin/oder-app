const withLess = require('@zeit/next-less');
module.exports = withLess({
    postcssLoaderOptions: {
        parser: true
    }
})