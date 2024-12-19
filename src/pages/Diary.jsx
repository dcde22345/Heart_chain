import React, { useState } from 'react';
import { Container, Button, Form, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const navigate = useNavigate(); // 使用 useNavigate 來導航
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '歡迎來到聊天室，有任何需要協助的地方，請隨時告訴我！' },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (!userInput.trim()) return;

    // 使用者輸入的訊息
    const userMessage = { sender: 'user', text: userInput };

    // 模擬機器人的回應
    const botMessage = {
      sender: 'bot',
      text: '我理解您可能需要更多的支持與幫助，若您願意，請點擊下方按鈕預約專業諮商服務。',
      showButton: true, // 加入一個標記來顯示按鈕
    };

    // 更新訊息列表
    setMessages([...messages, userMessage, botMessage]);

    // 清空輸入框
    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header>諮商聊天室</Card.Header>
        <Card.Body>
          <ListGroup className="chat-window mb-3" style={{ height: '300px', overflowY: 'scroll' }}>
            {messages.map((message, index) => (
              <ListGroup.Item
                key={index}
                className={message.sender === 'user' ? 'text-end' : 'text-start'}
                style={{
                  backgroundColor: message.sender === 'user' ? '#d1e7dd' : '#f8d7da',
                  borderRadius: '10px',
                  margin: '5px 0',
                  maxWidth: '70%',
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {message.text}
                {/* 如果是機器人且需要顯示按鈕，則渲染按鈕 */}
                {message.sender === 'bot' && message.showButton && (
                  <div className="mt-2">
                    <Button
                      variant="primary"
                      onClick={() => navigate('/counsel')} // 使用 useNavigate 導向
                    >
                      預約諮商
                    </Button>
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Form>
            <Form.Group controlId="userInput">
              <Form.Control
                type="text"
                placeholder="輸入訊息..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleSend}>
              發送
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Chatbot;
