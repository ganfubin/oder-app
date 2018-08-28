const router = (server, handle) => {
    server.get('/tableIndex', (req, res) => {
        return handle(req, res);
    });
    server.get('/orderList', (req, res) => {
        return handle(req, res);
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    });
};

module.exports = router;