import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

const port = 3000;
const app = express();

const server = createServer(app);

const io = new Server(server, {
    cors: {
        // origin: "*"
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    }
});

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    }
    )
);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

io.on("connection", (socket) => {
    console.log("User Connected");
    console.log("Id", socket.id);
    // socket.emit("welcome", `Welcome to the server.`);
    // socket.broadcast.emit("welcome", `${socket.id} joined the server.`);

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});