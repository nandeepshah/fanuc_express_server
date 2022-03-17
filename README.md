# FANUC ASG Express Server

## Steps

1. Paste `public` folder with `aboutus.html` and `index.html`
1. In `package.json` use `nodemon` to run the script

   ```json
       "scripts": {
           ...
           "start": "nodemon server"
           ...
       },
   ```

1. Install express using `node install express@4.17.1`
1. Create a file called `server.js`
1. Add the following variables for `hostname` and `port`

   ```js
   const hostname = 'localhost';
   const port = 3000;
   ```

1. Add a basic server that returns the same thing for all requests

   ```js
   const app = express();
   app.use((req, res) => {
   	console.log(req.headers);
   	res.statusCode = 200;
   	res.setHeader('Content-Type', 'text/html');
   	res.end(
   		'<html><body><h1>This is the FANUC ASG Express Server</h1><p>It will only grow from here </p></body></html>'
   	);
   });
   ```

1. Make the server listen
   ```js
   app.listen(port, hostname, () => {
   	console.log(`Server running at  http://${hostname}:${port}`);
   });
   ```
