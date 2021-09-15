import React, { FC } from 'react';

const ResumeCardInterior: FC<{name: string, flavor: string, logistics: string, Detail: FC}> = ({name, flavor, logistics, Detail}) => {
    return (
        <>
            <div className='medium'>{ name }</div>
            <div className='regular'>{ flavor }</div>
            <div className='mb-m mt-s xsmall light'>{ logistics }</div>
            <span className='regular'><Detail/></span>
        </>
    );
};

export default ResumeCardInterior;