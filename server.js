/** These are all the required dependencies */
const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

/**
 * Setup a basic server that sends the same response for all routes
 */

app.use((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(
		'<html><body><h1>This is the FANUC ASG Express Server</h1><p>It will only grow from here </p></body></html>'
	);
});

/**
 * Make the server listen
 */
app.listen(port, hostname, () => {
	console.log(`Server running at  http://${hostname}:${port}`);
});
