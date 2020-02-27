var express = require('express');
var router = express.Router();

require( './users' )( router )
require( './projects' )( router )

module.exports = router;
