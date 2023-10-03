import React from 'react';

type InputProps = {
    value: string
    handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
    return (
        <div>
            <input
            type="text"
            value={props.value}
            onChange={props.handlerChange}
            />
        </div>
    );
};

export default Input;