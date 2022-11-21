const express = require('express');
const bodyParser = require('body-parser');
const notices = require('./routes/notice_route');
const location = require('./routes/location_route');
const cors = require('cors');

const app = express();
app.use(cors());

// Socket
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// socket Router
const socketRouter = require("./routes/socket_route")(io);


require('./config/db')


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/map", socketRouter);
app.use("/notice",notices);
app.use("/location",location);


app.get("/", (req, res)=>{
    res.send("Welcome Home");
})

io.on("connection", (socket) => {
    console.log(socket.id);
  });

// rout not found
app.use((req, res, next)=>{
    res.status(404).json({message : "Route not found"});
})

// server error
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Something  broke"});
})


module.exports = server;  