const withImages = require('next-images');
module.exports = withImages({
    esModule: true, //import image from ''
    images: {
        disableStaticImages: true
    }
});
