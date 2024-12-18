import React, { createContext, useState } from "react";

// 創建 Context
export const TokenContext = createContext();

// Context Provider 組件
export const TokenProvider = ({ children }) => {
    // 代幣餘額的狀態，預設為 50
    const [tokenBalance, setTokenBalance] = useState(50);

    // 消耗代幣的方法
    const consumeTokens = (amount) => {
        setTokenBalance((prevBalance) => Math.max(prevBalance - amount, 0)); // 避免餘額小於 0
    };

    return (
        <TokenContext.Provider value={{ tokenBalance, consumeTokens }}>
            {children}
        </TokenContext.Provider>
    );
};
