import React, { FC } from 'react';

import { SectionDiv, StackDiv, SpacingDiv } from './styled';
import ButtonLink, { Link } from './buttonlink';

const BOLT_HREF: string = 'https://bolt.com';
const VALKYRIE_HREF: string = 'https://valkyrierobotics.org';
const CRUISE_HREF: string = 'https://getcruise.com';
const APPLIED_HREF: string = 'https://applied.co';

const Projects: FC = () =>
<div className='biggish light mt-m'>
    In spare time, I'm working with friends at <span className='medium'><Link href = { VALKYRIE_HREF }>
        Valkyrie Robotics
    </Link></span> on toy robotics middleware including lockless IPC, trajectory planning, and solvers
    in addition to foundational research on information retrieval.
</div>;

const Work: FC = () =>
<div className='biggish light mt-m'>
    👀 On to the next chapter!
</div>;

const Highlights: FC = () => {
    return (<StackDiv>
        <SectionDiv>
            <ButtonLink content={'📯 What\'s new?'} className='large'/>
            <Work/>
            {
              // <Projects/>
            }
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Highlights;
