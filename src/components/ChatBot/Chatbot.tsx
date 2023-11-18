import React, { ChangeEvent } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import useSocket from "../../hooks/useSocket";

interface IChatbotProps {}
const Chatbot: React.FC<IChatbotProps> = () => {
  const { messages, sendMessage } = useSocket("http://localhost:5000");
  const [input, setInput] = React.useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        height: "40vh",
        width: "35%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
        position: "fixed",
        bottom: "50px",
        right: "50px",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message: any) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Chatbot;
