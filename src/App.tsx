import React, { useState } from 'react';
import { createItems, ItemType } from './createItems';
import Board from './components/Board';
import Attempts from './components/Attempts';
import ResetButton from './components/ResetButton';
import "./App.css"

const App: React.FC = () => {
    const [items, setItems] = useState<ItemType[]>(createItems());
    const [attempts, setAttempts] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const handleClick = (index: number) => {
        if (gameOver || items[index].clicked) return;

        const newItems = items.map((item, i) =>
            i === index ? { ...item, clicked: true } : item
        );

        setItems(newItems);
        setAttempts(attempts + 1);

        if (newItems[index].hasItem) {
            setGameOver(true);
        }
    };

    const handleReset = () => {
        setItems(createItems());
        setAttempts(0);
        setGameOver(false);
    };

    return (
        <div className="game">
            <h1>Найди спрятанный предмет</h1>
            <Attempts attempts={attempts} />
            <Board items={items} handleClick={handleClick} />
            {gameOver && <p>Вы выйграли за {attempts} попыток!</p>}
            <ResetButton handleReset={handleReset} />
        </div>
    );
};

export default App;
