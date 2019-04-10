const express = require('express');
const server = express();
const router = express.Router(); // Create router
const path = require('path'); // Needed for routing
const smartcharge = require('./api')(router);
const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use('/api', smartcharge); // load api for usage

server.use(express.static(path.join(__dirname, 'client/build')));

server.get('*',(req, res) => {
  // Send frontend
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



server.listen(PORT, () => console.log('Listening on port ' + PORT))