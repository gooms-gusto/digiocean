const _express = require('express');
const _app = _express();
const _routeroot = require("./route");
_app.use(_routeroot.routes);

_app.listen(3030);