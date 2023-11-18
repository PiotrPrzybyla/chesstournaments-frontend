// useSocket.ts
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

interface IMessage {
  sender: string;
  text: string;
}
const useSocket = (serverUrl: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const newSocket = io(serverUrl);
    setSocket(newSocket);

    newSocket.on("reply", (message: string) => {
      const messageObject = {
        sender: "bot",
        text: message,
      };
      setMessages((prev) => [...prev, messageObject]);
    });

    return () => {
      newSocket.close();
    };
  }, [serverUrl]);

  const sendMessage = (message: string) => {
    const messageObject = {
      sender: "user",
      text: message,
    };
    setMessages((prev) => [...prev, messageObject]);
    if (socket) {
      socket.emit("message", message);
    }
  };

  return { messages, sendMessage };
};

export default useSocket;
