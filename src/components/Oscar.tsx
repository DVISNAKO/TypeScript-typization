import React from 'react';

type Oscarprops = {
    children: React.ReactNode
}

const Oscar = (props: Oscarprops) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Oscar;