import React from 'react';

interface ITransactionRatioBarProps {
    buyCount: number;
    sellCount: number;
}

const TransactionRatioBar: React.FC<ITransactionRatioBarProps> = ({ buyCount, sellCount }) => {
    const total = buyCount + sellCount;

    const buyPercentage = total > 0 ? (buyCount / total) * 100 : 50;
    const sellPercentage = 100 - buyPercentage;

    return (
        <div className="flex h-1 rounded-full overflow-hidden mt-1.5">
            <div
                className="bg-success"
                style={{ width: `${buyPercentage}%` }}
                title={`Buy: ${buyCount} (${buyPercentage.toFixed(1)}%)`}
            ></div>
            <div
                className="bg-error"
                style={{ width: `${sellPercentage}%` }}
                title={`Sell: ${sellCount} (${sellPercentage.toFixed(1)}%)`}
            ></div>
        </div>
    );
};

export default TransactionRatioBar