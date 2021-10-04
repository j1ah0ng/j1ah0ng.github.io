import React, { FC } from 'react';

import { SectionDiv, StackDiv, SpacingDiv } from './styled';
import ButtonLink, { Link } from './buttonlink';

const RIVOS_HREF: string = 'https://semianalysis.substack.com/p/rivos-inc-a-chip-off-the-old-block';
const JS_HREF: string = 'https://www.janestreet.com';

const onClickToHref = (link: string) => {
    return () => window.location.href = link;
};

const Coursework: FC = () =>
<div className='biggish light'>
    I'm currently enjoying <span className='medium'>
        Modern Algebra
    </span>, a 3-course sequence on group theory and abstract algebra. I'm also
    keen to apply my linear algebra knowledge to <span className='medium'>
        Introduction to Computer Vision
    </span>.
</div>;

const Work: FC = () =>
<div className='biggish light mt-m'>
    I'm actively applying, interviewing, and looking for <span className='medium'>
        technical internships
     </span> for January through September of 2022.
</div>;

const Highlights: FC = () => {
    return (<StackDiv>
        <SectionDiv>
            <ButtonLink content={'📯 What\'s new?'} className='large'/>
            <Coursework/>
            <Work/>
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Highlights;
