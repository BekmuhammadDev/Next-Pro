"ue client"
import React from 'react';

const index = ({children}:{children:React.JSX.Element | any}) => {
    return (
        <main className='min-h-screen'>
            {children}
        </main>
    );
};

export default index;