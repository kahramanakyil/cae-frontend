module.exports = {
    devServer: {
        proxy: {
            "/v1/consume_cpu": {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
                ws: true
            }
        }
    },
}
