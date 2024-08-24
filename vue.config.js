module.exports = {
    devServer: {
        proxy: {
            "/v1": {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
                ws: true
            }
        }
    },
}
