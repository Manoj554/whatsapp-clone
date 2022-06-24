export default (io, socket) => {
    socket.on("join-chat", (name) => {
        console.log(name + " joined the chat");
        socket.broadcast.emit('receive', { text: `${name} is joined the chat!!!`, sender: '' });
    });

    socket.on('send-message', (data) => {
        socket.broadcast.emit('receive', { text: data.message, sender: data.sender });
    });
}