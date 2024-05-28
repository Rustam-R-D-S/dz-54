import React from 'react';

interface AttemptsProps {
    attempts: number;
}

const Attempts: React.FC<AttemptsProps> = ({ attempts }) => {
    return <p>Попытки: {attempts}</p>;
};

export default Attempts;
