const _express = require('express');
const _router = _express();

_router.get('/', (req, res) => {
    res.send("<p>hello akbar </>");
});

exports.routes = _router;