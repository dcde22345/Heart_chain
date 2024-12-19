import React, { useState } from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";

function TaskPanel() {
    const [selectedTask, setSelectedTask] = useState(null);
    const tasks = [
        { name: "跑步：30分鐘，10代幣", type: "running" },
        { name: "冥想：10分鐘，10代幣", type: "meditation" },
        { name: "閱讀：30分鐘，5代幣", type: "reading" },
    ];

    return (
        <Container>
            <Card>
                <Card.Header>任務列表</Card.Header>
                <ListGroup>
                    {tasks.map((task, index) => (
                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between align-items-center"
                        >
                            {task.name}
                            <Button onClick={() => setSelectedTask(task)}>
                                開始
                            </Button>
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
