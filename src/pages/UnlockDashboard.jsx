import React, { useEffect, useRef } from "react";
import {
    Card,
    Button,
    Container,
    Row,
    Col,
    ProgressBar,
} from "react-bootstrap";
import * as d3 from "d3";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UnlockDashboard = () => {
    const chartRef = useRef(null);

    const data = [
        { label: "Founder", value: 12.0, color: "#ff0077" },
        { label: "Public Investors", value: 18.0, color: "#d63384" },
        { label: "Private Contributors", value: 30.0, color: "#007bff" },
        { label: "Community", value: 25.0, color: "#0044ff" },
        { label: "Reserve", value: 12.3, color: "#28a745" },
        { label: "Others", value: 2.7, color: "#28a745" },
    ];

    useEffect(() => {
        const svg = d3
            .select(chartRef.current)
            .append("svg")
            .attr("width", 200)
            .attr("height", 200);

        const pie = d3.pie().value((d) => d.value);
        const arc = d3.arc().innerRadius(50).outerRadius(100);

        const color = d3.scaleOrdinal(data.map((d) => d.color));

        const g = svg.append("g").attr("transform", "translate(100,100)");

        g.selectAll("path")
            .data(pie(data))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", (d) => color(d.data.label))
            .attr("stroke", "#fff")
            .style("stroke-width", "2px");
    }, []);

    return (
        <Container
            fluid
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ maxWidth: "1000px", minHeight: "calc(100vh - 56px)" }}
        >
            <h1 className="text-center">Unlock Progress & Allocation</h1>
            <Row className="mt-5 w-100 d-flex justify-content-between">
                <Col xs={12} md={4}>
                    <Card className="w-100 p-3 d-flex flex-column justify-content-center align-items-center">
                        <h5>Allocation</h5>
                        <div ref={chartRef}></div>
                    </Card>
                </Col>
                <Col xs={12} md={8}>
                    <Card className="p-2">
                        <Row>
                            {data.map((d, i) => (
                                <Col xs={12} md={4}>
                                    <Card
                                        className="p-2 text-white m-2"
                                        style={{
                                            backgroundColor: d.color,
                                            height: "100px",
                                        }}
                                    >
                                        <h5>{d.label}</h5>
                                        <p className="mb-0 text-white">
                                            {d.value}%
                                        </p>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="my-4 w-100 d-flex justify-content-center">
                {/* Total Unlock Progress */}
                <Col
                    xs={12}
                    sm={6}
                    md={4}
                    className="d-flex align-items-stretch mb-5 justify-content-center"
                >
                    <Card className="p-3 d-flex flex-column justify-content-center">
                        <h5>Total Unlock Progress</h5>
                        <div
                            className="text-center"
                            style={{
                                width: "75px",
                                height: "75px",
                                margin: "20px auto",
                            }}
                        >
                            <CircularProgressbar
                                value={25}
                                text={`25%`}
                                styles={buildStyles({
                                    textColor: "#000",
                                    pathColor: "#28a745",
                                    trailColor: "#eee",
                                    textSize: "18px",
                                })}
                            />
                        </div>
                        <p>Total Locked: 25.26b HERT (74.21%)</p>
                        <p>Unlocked: 3.25b HERT (25.69%)</p>
                        <p className="mb-0">Untracked: 198.85m HERT (0.10%)</p>
                    </Card>
                </Col>
                <Col>
                    <h5>Unlock Events</h5>
                    <Row>
                        {/* Unlock Events */}
                        <Col
                            xs={12}
                            sm={6}
                            md={6}
                            className="d-flex align-items-stretch mb-5 justify-content-center"
                        >
                            <Card className="p-3 d-flex flex-column justify-content-center">
                                <h5>Previous Event</h5>
                                <p>Date: 05 DEC 24 - 12:00 AM UTC</p>
                                <p>Unlocked: 193.07m HERT ($30.73m)</p>
                                <p>Community Airdrop</p>
                                <Button variant="light">1 Allocation</Button>
                            </Card>
                        </Col>

                        {/* Upcoming Event */}
                        <Col
                            xs={12}
                            sm={6}
                            md={6}
                            className="d-flex align-items-stretch justify-content-center"
                        >
                            <Card className="p-3 d-flex flex-column justify-content-center mb-5">
                                <h5>Upcoming Event</h5>
                                <p>Date: 07 JAN 25 - 12:00 AM UTC</p>
                                <p>Countdown: 0d 10h 7m 32s</p>
                                <p>Unlocking: 182.23m HERT ($23.44m)</p>
                                <p>Community Airdrop</p>
                                <Button variant="light">1 Allocation</Button>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default UnlockDashboard;
