const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();


const apiRoutes = require('./router/apiRoutes.js');
const router = require('./router/router.js');

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(session({
        secret: 'super-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 }
    }));

    //api 路由
    server.use('/api', apiRoutes);

    //地址路由
    router(server, handle);

    /* eslint-disable no-console */
    server.listen(4000, (err) => {
        if (err) throw err;
        console.log('Server ready on http://localhost:4000');
    });
});