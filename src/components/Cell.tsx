import React from 'react';
import { ItemType } from '../createItems.ts';

interface CellProps {
    item: ItemType;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ item, onClick }) => {
    return (
        <div className={`cell ${item.clicked ? 'clicked' : ''}`} onClick={onClick}>
            {item.clicked && (item.hasItem ? 'x' : '')}
        </div>
    );
};

export default Cell;
