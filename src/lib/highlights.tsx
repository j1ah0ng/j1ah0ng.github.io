import React, { FC } from 'react';

import { SectionDiv, StackDiv, SpacingDiv } from './styled';
import ButtonLink, { Link } from './buttonlink';

const BOLT_HREF: string = 'https://bolt.com';
const VALKYRIE_HREF: string = 'https://valkyrierobotics.org';
const CRUISE_HREF: string = 'https://getcruise.com';

const Updates: FC = () =>
<div className='biggish light'>
    I'm currently on sabbatical, traveling around <span className='medium'>
        Japan!
    </span>
</div>;
    
const Projects: FC = () =>
<div className='biggish light mt-m'>
    Otherwise, I'm working on <span className='medium'>
        Hyperion
    </span>, a proprietary <code>C++</code> robotics middleware
    with my friends at <span className='medium'><Link href = { VALKYRIE_HREF }>
        Valkyrie Robotics
    </Link></span> including fast lockless IPC, trajectory planning, and solvers!
</div>;

const Work: FC = () =>
<div className='biggish light mt-m'>
    I'm also building out a unified AV behaviour validation framework at <span className='medium'><Link href={ CRUISE_HREF }>
        Cruise Automation
    </Link></span>, with a focus on correct & clean data abstractions. 
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
