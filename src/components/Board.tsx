import React from 'react';
import { ItemType } from '../createItems';
import Cell from './Cell';

interface BoardProps {
    items: ItemType[];
    handleClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ items, handleClick }) => {
    return (
        <div className="board">
            {items.map((item, index) => (
                <Cell key={index} item={item} onClick={() => handleClick(index)} />
            ))}
        </div>
    );
};

export default Board;
