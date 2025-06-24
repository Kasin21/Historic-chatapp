body {
  font-family: Arial, sans-serif;
  background: #f0f2f5;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 600px;
  margin: 40px auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.chatbox {
  border: 1px solid #ccc;
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  background: #fafafa;
  margin-bottom: 10px;
}
.message {
  margin: 5px 0;
  padding: 8px;
  border-radius: 6px;
}
.message.user {
  background: #d2eafd;
  text-align: right;
}
.message.ai {
  background: #e8e8e8;
  text-align: left;
}
.input-area {
  display: flex;
  gap: 10px;
}
textarea {
  flex: 1;
  padding: 8px;
  resize: none;
}
button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
