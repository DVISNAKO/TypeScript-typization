import React from 'react';

type InputProps = {
    value: string
    handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handlerChange}: InputProps) => {
    return (
        <div>
            <input
            type="text"
            value={value}
            onChange={handlerChange}
            />
        </div>
    );
};

export default Input;