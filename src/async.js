module.exports = {
    getUrl: function (url, cb) {
        if (!!cb && typeof cb === 'function') {
            setTimeout(function () {
                cb.call(this, url);
            }, 2000);
        }
    }
};
