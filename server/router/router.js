const router = (server, handle) => {
    server.get('/aa', (req, res) => {
        res.locals = {aa: 111222299999};
        return handle(req, res);
    });
    server.get('*', (req, res) => {
        res.locals = {aa: 1112222};
        return handle(req, res);
    });
};

module.exports = router;