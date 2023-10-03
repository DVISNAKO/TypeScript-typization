import React from 'react';

type ConateinerProps = {
    styles: React.CSSProperties
}

const Container = (props: ConateinerProps) => {
    return (
        <div style={props.styles}>
            Text content
        </div>
    );
};

export default Container;