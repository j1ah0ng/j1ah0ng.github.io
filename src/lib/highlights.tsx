import React, { FC } from 'react';

import { SectionDiv, StackDiv, SpacingDiv } from './styled';
import ButtonLink, { Link } from './buttonlink';

const BOLT_HREF: string = 'https://bolt.com';
const VALKYRIE_HREF: string = 'https://valkyrierobotics.org';
const CRUISE_HREF: string = 'https://getcruise.com';
const APPLIED_HREF: string = 'https://applied.co';
const ANTHROPIC_HREF: string = 'https://anthropic.com';

const Projects: FC = () =>
<div className='biggish light mt-m'>
    I'm also working on <span className='medium'>
        Hyperion
    </span>, a proprietary <code>C++</code> robotics middleware
    with my friends at <span className='medium'><Link href = { VALKYRIE_HREF }>
        Valkyrie Robotics
    </Link></span> including fast lockless IPC, trajectory planning, and solvers!
</div>;

const Work: FC = () =>
<div className='biggish light mt-m'>
    I'm working on reinforcement learning techniques to build safe, responsible, and human-centered
    language models at <span className='medium'><Link href={ ANTHROPIC_HREF }>
      Anthropic
    </Link></span>.
</div>;

const Highlights: FC = () => {
    return (<StackDiv>
        <SectionDiv>
            <ButtonLink content={'📯 What\'s new?'} className='large'/>
            <Work/>
            <Projects/>
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Highlights;
