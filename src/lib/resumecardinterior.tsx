import React, { FC } from 'react';
import ButtonLink from './buttonlink';

const ResumeCardInterior: FC<{name: string, flavor: string, logistics: string, Detail: FC}> = ({name, flavor, logistics, Detail}) => {
    const id = name.replace(/[^A-Z0-9]/ig, '');
    return (
        <>
            <ButtonLink content={ name } className='medium biggish'/>
            <div className='regular'>{ flavor }</div>
            <div className='mb-m mt-s xsmall light'>{ logistics }</div>
            <span className='regular'><Detail/></span>
        </>
    );
};

export default ResumeCardInterior;