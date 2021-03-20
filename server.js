//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
app.use(express.static(__dirname+'/dist/open-financial-tech-website'));
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
// app.use(express.static(__dirname + '/dist/'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/open-financial-tech-website/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen( process.env.PORT || 8080);


