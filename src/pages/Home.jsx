import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Home 元件
function Home() {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "calc(100vh - 56px)" }} // 減去 Navbar 高度
    >
      <div className="mb-4">
        <h1 className="fw-bold display-2">心理鏈</h1>
        <p className="fs-3 text-muted">守護你的心理隱私，給予安心的空間</p>
      </div>
      {/* 卡片1：匿名日記 */}
      <Card className="text-center p-4 shadow-sm mb-4" style={{ maxWidth: "500px" }}>
        <Card.Title as="h2" className="fw-bold">你今天過得好嗎？</Card.Title>
        <Card.Text>記錄下今天的心情，為自己留下一段回憶</Card.Text>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/diary")}
        >
          匿名日記
        </Button>
      </Card>

      {/* 卡片2：匿名輔導 */}
      <Card className="text-center p-4 shadow-sm" style={{ maxWidth: "500px" }}>
        <Card.Title as="h2" className="fw-bold">你的安心空間</Card.Title>
        <Card.Text>
          在這裡，一切都是匿名的<br />
          放下壓力輕鬆聊聊，我們始終陪伴著你
        </Card.Text>
        <Button
          variant="success"
          size="lg"
          onClick={() => navigate("/counsel")}
        >
          匿名諮詢
        </Button>
      </Card>
    </Container>
  );
}

export default Home