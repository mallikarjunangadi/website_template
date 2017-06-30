
var express        = require('express');
var app            = express();

var port = process.env.PORT || 80; // set our port
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.timeout = 0;
app.listen(port);
app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});   
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app