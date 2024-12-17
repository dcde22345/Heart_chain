import React, { useState } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';

const Questionnaire = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    alert(`問卷回答：${response}`);
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header>問卷 for 了解</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="questionnaire">
              <Form.Label>請回答以下問題：</Form.Label>
              <Form.Control
                type="text"
                placeholder="輸入您的回答..."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleSubmit}>
              提交
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Questionnaire;
