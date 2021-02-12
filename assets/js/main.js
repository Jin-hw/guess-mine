import { handleMessageNotif } from "./chat";

const socket = io("/");

function sendMessage(message) {
    socket.on("newMessage", { message });
    console.log(`You: ${message}`);
}

function setNickname(nickname) {
    socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif)