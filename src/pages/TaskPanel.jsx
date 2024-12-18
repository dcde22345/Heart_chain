import React, { useState } from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";

function TaskPanel() {
    const [selectedTask, setSelectedTask] = useState(null);
    const tasks = [
        { name: "跑步：20分鐘", type: "running" },
        { name: "冥想：10分鐘", type: "meditation" },
        { name: "閱讀：30分鐘", type: "reading" },
    ];

    return (
        <Container className="mt-5">
            <Card>
                <Card.Header>心理代幣任務</Card.Header>
                <ListGroup>
                    {tasks.map((task, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                            {task.name}
                            <Button onClick={() => setSelectedTask(task)}>開始</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                {selectedTask && (
                    <Card.Footer>
                        你選擇了任務：<strong>{selectedTask.name}</strong>
                    </Card.Footer>
                )}
            </Card>
        </Container>
    );
}

export default TaskPanel;
