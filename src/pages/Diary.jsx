import React, { useState } from 'react';
import { Container, Button, Form, Card, ListGroup } from 'react-bootstrap';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (!userInput.trim()) return;

    // 使用者輸入的訊息
    const userMessage = { sender: 'user', text: userInput };

    // 模擬機器人的回應
    const botMessage = {
      sender: 'bot',
      text: `${userInput}`,
    };

    // 更新訊息列表
    setMessages([...messages, userMessage, botMessage]);

    // 清空輸入框
    setUserInput('');
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
                }}
              >
                {message.text}
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
