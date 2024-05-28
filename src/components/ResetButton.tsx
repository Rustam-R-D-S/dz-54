import React from 'react';

interface ResetButtonProps {
    handleReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ handleReset }) => {
    return <button onClick={handleReset}>Reset</button>;
};

export default ResetButton;
