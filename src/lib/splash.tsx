import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MathComponent } from 'mathjax-react';
import { WindupChildren, useSkip } from 'windups';

const SplashDiv = styled.div`
width: 100vw;
min-height: 100vh;
max-height: -webkit-fill-available;
max-height: -moz-available;
height: min-content;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-attachment: fixed;
background-image: linear-gradient(#88c0d0, #d8dee9);
`;

const Avatar = styled.img`
clip-path: circle(5rem at center);
width: 10em;
`;

const SizedSpan = styled.span`
height: 2em;
@media only screen and (max-width: 320px) {
  font-size: 1.5em;
}
`;

const TIMEOUT = 1500;
const TEXT_ROLES = [
    'moonlighting as a sysadmin.',
    'a double-major at UCSD.',
    'doing a 5K.',
    'cycling to school.',
    'an ex-Amazonian.',
    'a math nerd.',
    'probably working with Rust.',
    'unborking my Linux install.',
    'using Arch, btw.',
    'linting dotfiles.',
    'fixing a GRUB configuration.',
    'rebuilding an initramfs.',
    'proofing by induction.',
    'doing a pset.',
    'a fan of metrics.',
    'collecting Hagoromo.',
    'abusing First Isomorphism.',
    'verifying the Laplacian.',
];

const FANCY_ROLES = [
    <><span key={Date.now()} className='italic'>
        TikZing it up in <MathComponent tex={String.raw`\mathrm{\LaTeX}`} display={ false }/>.
    </span></>,
];

const ALL_ROLES_AS_FRAGMENTS = TEXT_ROLES.map(e => <>
    <span key={Date.now()} className='italic'>{e}</span>
</>).concat(FANCY_ROLES);

const N_ROLES = ALL_ROLES_AS_FRAGMENTS.length;

const shuffle = () => {
    const first = ALL_ROLES_AS_FRAGMENTS[0];

    let currentIndex = N_ROLES,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [ALL_ROLES_AS_FRAGMENTS[currentIndex], ALL_ROLES_AS_FRAGMENTS[randomIndex]] = [
            ALL_ROLES_AS_FRAGMENTS[randomIndex],
            ALL_ROLES_AS_FRAGMENTS[currentIndex]
        ];
    }

    if (ALL_ROLES_AS_FRAGMENTS[0] === first) {
        randomIndex = Math.floor(Math.random() * (N_ROLES - 1));
        [ALL_ROLES_AS_FRAGMENTS[0], ALL_ROLES_AS_FRAGMENTS[randomIndex]] = [
            ALL_ROLES_AS_FRAGMENTS[randomIndex],
            ALL_ROLES_AS_FRAGMENTS[0]
        ];
    }
}

const Skip: FC<{skip: boolean}> = ({skip}) => {
    const skipFn = useSkip();
    if (skip) skipFn();
    return <></>;
};

const Splash: FC = () => {
    const [isFirstRun, setIsFirstRun] = useState(true);
    const [idx, setIdx] = useState(0);
    const [flavorText, setFlavorText] = useState(
         ( () => { shuffle(); return ALL_ROLES_AS_FRAGMENTS[idx]; } )()
    );

    const onFinished = () => {
        let timeout = TIMEOUT;
        if (isFirstRun) {
            setIsFirstRun(false);
            //timeout = TIMEOUT * 1.5;
        }

        let newIdx = idx + 1;
        if (newIdx >= N_ROLES) {
            newIdx = 0;
            shuffle();
        }
        setIdx(newIdx);

        const timeoutHandle = setTimeout(() => {
            let newFlavorText = ALL_ROLES_AS_FRAGMENTS[idx];
            setFlavorText(newFlavorText);
        }, timeout);
        return () => clearTimeout(timeoutHandle);
    };

    return (
        <SplashDiv className='center'>
            <div className='mb-xl'>
                <Avatar src='me.jpg' alt='Profile picture'/>
            </div>
            <span className='large mr-l ml-l'>
                <span className='light'>Hi, I'm </span>
                <span className='regular'>Jiahong!</span>
            </span>
            <SizedSpan className='large light mr-l ml-l mt-s'>
                <WindupChildren onFinished={onFinished} skipped={true}>
                    I'm { flavorText }
                    <Skip skip={isFirstRun}/>
                </WindupChildren>
            </SizedSpan>
        </SplashDiv>
    );
};

export default Splash;
