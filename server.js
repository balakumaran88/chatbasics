const express = require('express')
const cors = require('cors')
const app = express();
var server = require('http').createServer(app);
const io = require('socket.io').listen(server)



io.on('connection', (socket) => {
    console.log('one user connected', socket.id)
})



const routes = require('./routes')
  
app.use(cors({credentials:false, origin: 'http://localhost:4200'}))
//using cross browser compatability

//configuring routes
app.use('/api', routes)






server.listen(3001, (err, resp) => {
    console.log('server is running on port 3001')
})