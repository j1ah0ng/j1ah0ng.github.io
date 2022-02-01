import React, { FC } from 'react';

import { SectionDiv, StackDiv, SpacingDiv } from './styled';
import ButtonLink, { Link } from './buttonlink';

const BOLT_HREF: string = 'https://bolt.com';
const VALKYRIE_HREF: string = 'https://valkyrierobotics.org';

const Coursework: FC = () =>
<div className='biggish light'>
    I'm currently enjoying <span className='medium'>
        Modern Algebra
    </span>, a 3-course sequence on group theory and abstract algebra. I'm also
    keen to dig deep into the lower half of the OSI stack in our <span className='medium'>
        Computer Networks
    </span> course.
</div>;
    
const Projects: FC = () =>
<div className='biggish light'>
    I'm working on <span className='medium'>
        Wyrd
    </span>, a proprietary <code>C++</code> robotics middleware for FIRST Robotics Competition applications
    with my friends at <span className='medium'><Link href = { VALKYRIE_HREF }>
        Valkyrie Robotics
    </Link></span>!
</div>;

const Work: FC = () =>
<div className='biggish light mt-m'>
    I'm also winterning with <span className='medium'><Link href={ BOLT_HREF }>
        Bolt Financial
    </Link></span> through the first quarter of 2022!
</div>;

/*
    Otherwise, I'm actively applying, interviewing, and looking for <span className='medium'>
        technical internships
     </span> for summer 2022.
 */

const Highlights: FC = () => {
    return (<StackDiv>
        <SectionDiv>
            <ButtonLink content={'📯 What\'s new?'} className='large'/>
            <Projects/>
            <Work/>
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Highlights;
