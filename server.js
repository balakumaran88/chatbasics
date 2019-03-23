const express = require('express')
var cors = require('cors')
const app = express();
var server = require('http').Server(app);
const socket = require('socket.io')
const io = socket(server)



const routes = require('./routes')
  
app.use(cors())
//using cross browser compatability

//configuring routes
app.use('/api', routes)






app.listen(3001, (err, resp) => {
    console.log('server is running on port 3001')
})