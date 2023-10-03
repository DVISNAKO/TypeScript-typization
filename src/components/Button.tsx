import React from 'react';

type ButtonProps = {
    handlerClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}


const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={(event) => props.handlerClick(event, 1)}>Click</button>
        </div>
    );
};

export default Button;
