const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null', // This should match the base path of your API requests in React
        createProxyMiddleware({
            target: 'https://swiggyapitest.netlify.app/', // Change this to your backend server URL
            changeOrigin: true,
            pathRewrite: { '^/api': '' }, // Optionally rewrite the API path
        })
    );
};
