import React, { useRef, useEffect, useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MeetingRoom = () => {
  const userVideoRef = useRef(null); // 使用者鏡頭 <video>
  const therapistVideoRef = useRef(null); // 諮商師鏡頭 <video>
  const userStreamRef = useRef(null); // 保存使用者串流
  const [devices, setDevices] = useState([]); // 攝影機裝置列表
  const [selectedDeviceId, setSelectedDeviceId] = useState(""); // 選中的裝置
  const navigate = useNavigate();

  // 取得所有攝影機裝置
  const getCameraDevices = async () => {
    try {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = allDevices.filter((device) => device.kind === "videoinput");
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        setSelectedDeviceId(videoDevices[0].deviceId);
      }
    } catch (err) {
      console.error("無法取得攝影機裝置:", err);
    }
  };

  // 啟動選定的攝影機
  const startCamera = async (deviceId, videoRef) => {
    try {
      // 停止現有的串流
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }

      // 啟動新攝影機
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: deviceId ? { exact: deviceId } : undefined },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        if (videoRef === userVideoRef) {
          userStreamRef.current = stream; // 保存使用者串流
        }
      }
    } catch (err) {
      console.error("無法啟動攝影機:", err);
    }
  };

  // 停止攝影機
  const stopCamera = () => {
    if (userStreamRef.current) {
      userStreamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  // 離開按鈕
  const handleExit = () => {
    stopCamera();
    navigate("/");
  };

  // 啟動攝影機
  useEffect(() => {
    getCameraDevices();
    startCamera(null, therapistVideoRef); // 模擬諮商師鏡頭
  }, []);

  useEffect(() => {
    if (selectedDeviceId) {
      startCamera(selectedDeviceId, userVideoRef);
    }
  }, [selectedDeviceId]);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center vh-100 bg-light"
    >
        {/* 攝影機選擇器 */}
      <Card className="mt-4 p-3 shadow-sm" style={{ width: "100%", maxWidth: "500px" }}>
        <Card.Title className="text-center fw-bold">選擇攝影機</Card.Title>
        <Form.Select
          value={selectedDeviceId}
          onChange={(e) => setSelectedDeviceId(e.target.value)}
        >
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || `攝影機 ${device.deviceId}`}
            </option>
          ))}
        </Form.Select>
      </Card>
      
      {/* 諮商師鏡頭 */}
      <Card
        className="mb-4 shadow-sm"
        style={{
          width: "calc(100vw - 10px)",
          height: "calc(100vw - 10px)",
          maxWidth: "300px",
          maxHeight: "300px",
          borderRadius: "20px",
        }}
      >
        <Card.Body className="p-0">
          <video
            ref={therapistVideoRef}
            autoPlay
            playsInline
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              backgroundColor: "#000",
            }}
            src="https://www.w3schools.com/html/mov_bbb.mp4" // 模擬的諮商師影片
          />
        </Card.Body>
      </Card>

      {/* 使用者鏡頭 */}
      <Card
        className="shadow-sm"
        style={{
          width: "calc(100vw - 10px)",
          height: "calc(100vw - 10px)",
          maxWidth: "300px",
          maxHeight: "300px",
          borderRadius: "20px",
        }}
      >
        <Card.Body className="p-0">
          <video
            ref={userVideoRef}
            autoPlay
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              backgroundColor: "#000",
            }}
          />
        </Card.Body>
      </Card>

      

      {/* 離開按鈕 */}
      <Button
        variant="danger"
        size="lg"
        className="mt-4"
        onClick={handleExit}
      >
        離開會議室
      </Button>
    </Container>
  );
};

export default MeetingRoom;
