import React, { useState, useContext } from "react";
import { Container, Card, Button, Row, Col, Modal, Badge } from "react-bootstrap";
import { TokenContext } from "../TokenContext"; // 引入心理代幣的全局狀態管理

function CouponPage() {
    const { tokenBalance, consumeTokens } = useContext(TokenContext); // 取得代幣餘額與扣除方法

    const [coupons] = useState([
        { id: 1, store: "商家 A", description: "滿100元折20元", expiry: "2024/12/31", cost: 5 },
        { id: 2, store: "商家 B", description: "購買飲料第二杯半價", expiry: "2024/12/31", cost: 3 },
        { id: 3, store: "商家 C", description: "消費滿500元送50元代幣", expiry: "2024/12/31", cost: 7 },
        { id: 4, store: "商家 D", description: "所有商品享 10% 折扣", expiry: "2024/12/31", cost: 10 },
    ]);

    // 狀態用來控制 Modal 開關與當前選擇的優惠券
    const [showModal, setShowModal] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    // 用戶點擊兌換時觸發的函數
    const handleRedeem = (coupon) => {
        if (tokenBalance >= coupon.cost) {
            consumeTokens(coupon.cost); // 扣除代幣
            setSelectedCoupon(coupon); // 設定當前選擇的優惠券
            setShowModal(true); // 開啟 Modal
        } else {
            alert("代幣不足，無法兌換此折價券！");
        }
    };

    const handleClose = () => setShowModal(false); // 關閉 Modal

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">可兌換的折價券</h2>
            <p className="text-center">
                <Badge bg="info">目前心理代幣餘額：{tokenBalance} 個</Badge>
            </p>
            <Row>
                {coupons.map((coupon) => (
                    <Col md={6} lg={4} key={coupon.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{coupon.store}</Card.Title>
                                <Card.Text>
                                    <strong>優惠內容：</strong> {coupon.description}
                                    <br />
                                    <strong>到期日：</strong> 
                                    <span style={{ color: "red" }}>{coupon.expiry}</span>
                                    <br />
                                    <strong>消耗代幣：</strong> {coupon.cost} 個
                                </Card.Text>
                                <Button
                                    variant={tokenBalance >= coupon.cost ? "success" : "secondary"}
                                    disabled={tokenBalance < coupon.cost} // 代幣不足時禁用按鈕
                                    onClick={() => handleRedeem(coupon)}
                                >
                                    兌換折價券
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Bootstrap Modal 彈窗 */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>兌換成功！</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCoupon && (
                        <>
                            <p>
                                你已兌換 <strong>{selectedCoupon.store}</strong> 的優惠券：
                            </p>
                            <p>{selectedCoupon.description}</p>
                            <p>有效期限：{selectedCoupon.expiry}</p>
                            <p>消耗代幣：{selectedCoupon.cost} 個</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        關閉
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default CouponPage;
