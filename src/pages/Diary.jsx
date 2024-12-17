import React, { useState } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';

const Diary = () => {
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    alert('您的匿名日記已保存');
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header>匿名日記</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="diaryEntry">
              <Form.Label>寫下您的日記：</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="輸入內容..."
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" className="mt-3" onClick={handleSave}>
              保存日記
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Diary;
