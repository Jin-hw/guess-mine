const socket = io("/");

socket.on("hello", () => console.log("Somebody joined"));

setTimeout(() => socket.emit("hello Guys"), 4000);