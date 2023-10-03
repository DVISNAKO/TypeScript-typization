import React from 'react';

type GreetProps = {
    name: string
    messageCout: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            {
              props.isLoggedIn 
              ? <h2>Hello {props.name} You have {props.messageCout} unreaded message</h2> 
              : <h2>Welcom Guest</h2>
            }
             
        </div>
    );
};

export default Greet;