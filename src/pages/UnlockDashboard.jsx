import React from 'react';
import { ProgressBar, Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UnlockDashboard = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center" style={{maxWidth: " 1000px"}}>
      <h1 c>Unlock Progress & Allocation</h1>
      <Row className="my-4">
        {/* Total Unlock Progress */}
        <Col xs={12} md={4} className="d-flex align-items-stretch mb-3">
          <Card className="p-3 w-100 d-flex flex-column justify-content-center">
            <h5>Total Unlock Progress</h5>
            <div className="text-center">
              <ProgressBar now={88} label={`88% Unlocked`} variant="success" style={{ height: '150px', borderRadius: '50%' }} />
            </div>
            <p>Total Locked: 3.25b KAS (11.31%)</p>
            <p>Unlocked: 25.26b KAS (88%)</p>
            <p>Untracked: 198.85m KAS (0.69%)</p>
          </Card>
        </Col>

        {/* Unlock Events */}
        <Col xs={12} md={4} className="d-flex align-items-stretch mb-3">
          <Card className="p-3 w-100 d-flex flex-column justify-content-center">
            <h6>Previous Event</h6>
            <p>Date: 06 DEC 24 - 12:00 AM UTC</p>
            <p>Unlocked: 193.07m KAS ($30.73m)</p>
            <p>0.76% of Cir. supply</p>
            <Button variant="light">1 Allocation</Button>
          </Card>
        </Col>

        {/* Upcoming Event */}
        <Col xs={12} md={4} className="d-flex align-items-stretch mb-5">
          <Card className="p-3 w-100 d-flex flex-column justify-content-center text-white bg-danger">
            <h6>Upcoming Event</h6>
            <p>Date: 06 JAN 25 - 12:00 AM UTC</p>
            <p>Countdown: 1d 10h 7m 32s</p>
            <p>Unlocking: 182.23m KAS ($23.44m)</p>
            <p>0.72% of Cir. supply</p>
            <Button variant="light">1 Allocation</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UnlockDashboard;
