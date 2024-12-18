import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate(); // 使用 useNavigate Hook

    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #f0f0f0, #f8f5f2)",
                height: "calc(95vh - 56px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                padding: "20px 10px",
            }}
        >
            <Container
                fluid
                className="d-flex justify-content-center align-items-center flex-column"
            >
                <h1
                    className="text-center"
                    style={{
                        fontWeight: "900",
                        color: "#2F4F4F",
                        marginTop: "10px", // 減少間距
                    }}
                >
                    心理鏈
                </h1>
                <p
                    style={{
                        fontSize: "1rem",
                        
                        color: "#6C7A89",
                        fontWeight: "500",
                        margin: "0px",
                        paddingTop: "0.5rem"

                    }}
                >
                    匿名傾訴，保護隱私，讓心更輕鬆
                </p>
            </Container>

            {/* 頭像照片 */}
            <Container
                fluid
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ marginTop: "10px" }}
            >
                <Image
                    src="/image/user_head.png"
                    roundedCircle
                    style={{
                        width: "250px",
                        height: "250px",
                        objectFit: "cover",
                        marginBottom: "10px", // 增加與按鈕間距
                        border: "10px solid #A4D1C3"
                    }}
                />
            </Container>

            {/* 中間按鈕 */}
            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
            >
                <Button
                    variant="primary"
                    size="lg"
                    style={{
                        backgroundColor: "#A4D1C3",
                        borderColor: "#A4D1C3",
                        borderRadius: "10px",
                        width: "70%", // 調整按鈕寬度
                        height: "60px",
                        fontSize: "18px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 添加陰影
                    }}
                    onClick={() => navigate("/counsel")}
                >
                    開始您的諮詢
                </Button>
            </Container>

            {/* 新增下方輔助文字 */}
            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={{ marginTop: "10px" }}
            >
                <p
                    style={{
                        fontSize: "0.9rem",
                        color: "#888",
                        textAlign: "center",
                    }}
                >
                    每天記錄，讓心更平靜。
                </p>
            </Container>
        </div>
    );
}

export default Home;
