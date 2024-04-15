import * as React from "react";
import { AppBar, Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography, TextField, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function ChatApp() {
  const [selectedChat, setSelectedChat] = React.useState(null);
  const [messageInput, setMessageInput] = React.useState("");
  const [messages, setMessages] = React.useState({});

  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;
    const newMessage = {
      sender: "You",
      message: messageInput.trim(),
    };
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedChat]: [...(prevMessages[selectedChat] || []), newMessage],
    }));
    setMessageInput("");

    setTimeout(() => {
      const automaticMessage = {
        sender: `Expert ${selectedChat}`,
        message: `Thank you our expert will contact you shortly.`,
      };
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedChat]: [...(prevMessages[selectedChat] || []), automaticMessage],
      }));
    }, 1500);
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  return (
    <Container sx={{ display: 'flex', mt:12, mb:5 }}>
      <Box sx={{ width: '30%', borderRight: 1, borderColor: 'divider' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="/images/GD_Logo-.png" alt="Logo" style={{ marginRight: "10px", maxHeight: "40px" }} />
              Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
          <List>
            {[1, 2, 3].map((chatId) => (
              <ListItem key={chatId} button onClick={() => handleChatSelect(chatId)}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary={`Expert ${chatId}`} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
      <Box sx={{ width: '70%', bgcolor: 'background.default', overflowY: 'auto', borderRadius: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {selectedChat ? `Expert ${selectedChat}` : 'Select an expert'}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ height: 'calc(100vh - 64px - 250px)', padding: '16px', overflowY: 'auto' }}>
          {selectedChat ? (
            <Box>
              {messages[selectedChat] && 
                messages[selectedChat].map((chat, index) => (
                  <Box key={index} sx={{ mb: 2, display: 'flex', justifyContent: chat.sender === 'You' ? 'flex-end' : 'flex-start' }}>
                    <Box sx={{ maxWidth: '70%', borderRadius: '10px', p: 1, backgroundColor: chat.sender === 'You' ? '#dcf8c6' : '#f0f0f0' }}>
                      <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 'bold' }}>
                        {chat.sender}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {chat.message}
                      </Typography>
                      {chat.sender === 'You' && <Typography variant="caption" color="text.secondary">✓✓</Typography>}
                    </Box>
                  </Box>
                ))}
            </Box>
          ) : (
            <Typography variant="body1" color="text.secondary">
              Please select an expert from the left sidebar.
            </Typography>
          )}
        </Container>
        {selectedChat && (
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
            <TextField
              label="Type a message"
              variant="outlined"
              size="small"
              fullWidth
              value={messageInput}
              onChange={handleInputChange}
            />
            <IconButton onClick={handleSendMessage} color="primary">
              <SendIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default ChatApp;
