export const socketIndivisual = (io, socket) => {

    socket.on("users-request", () => {
        let users = [];
        for (let [id, sc] of io.of("/").sockets) {
            if (id !== socket.id) {
                users.push({
                    socketId: id,
                    name: sc.name,
                });
            }
        };
        socket.emit("all-users", users);
        // console.log(users);
    });

    socket.on("send-message", ({ to, message }) => {
        socket.to(to).emit("receive-message", { from: socket.id, message });
    });

    socket.on("disconnect", (reason) => {
        console.log(reason + socket.id);

    });
}