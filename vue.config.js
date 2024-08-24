module.exports = {
    devServer: {
        proxy: {
            '/v1/consume_cpu': {
                target: 'app-test-backend:9090',
                changeOrigin: true,
                ws: true
            }
        }
    },
}
