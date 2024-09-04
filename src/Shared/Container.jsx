import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-6xl mx-auto py-6'>
            {children}
        </div>
    );
};

export default Container;