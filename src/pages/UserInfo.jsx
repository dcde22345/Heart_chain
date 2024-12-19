import React, { useState, useContext } from "react";
import { Card, ListGroup, Container } from "react-bootstrap";
import { TokenContext } from "../TokenContext";
import Coupons from "../components/Coupons"

function UserInfo() {
    const { tokenBalance } = useContext(TokenContext); // 使用 Context
    const userInfo = {
        // name: "Alex",
        walletAddress: "0x1234...abcd",
        balance: 50,
        transactions: ["獲得 10 代幣 - 跑步", "支付 20 代幣 - 諮商"],
    };
    

    return (
        <Container className="my-5">
            {/* Profile */}
            <Container>
            <h1 className="mb-4 text-center">個人資料</h1>
            <Card>
                <Card.Header>錢包與餘額</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>錢包位址: {userInfo.walletAddress}</ListGroup.Item>
                    <ListGroup.Item>餘額: {tokenBalance} 心理代幣</ListGroup.Item>
                    <ListGroup.Item>
                        <strong>交易紀錄:</strong>
                        <ul>
                            {userInfo.transactions.map((tx, index) => (
                                <li key={index}>{tx}</li>
                            ))}
                        </ul>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </Container>

            {/* coupons */}
            <Coupons />
        </Container>
    );
}

export default UserInfo;
