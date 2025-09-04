import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Tex2SVG from "react-hook-mathjax";

import { WindupChildren, useSkip } from 'windups';
import { Link } from './buttonlink';

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
    'doing a 5K.',
    'cycling to work.',
    'unborking my Linux install.',
    'using Arch, btw.',
    'linting dotfiles.',
    'fixing a GRUB configuration.',
    'rebuilding an initramfs.',
    'proofing by induction.',
    'a fan of metrics.',
    'disabling telemetry.',
    'collecting Hagoromo.',
    'spamming First Isomorphism.',
    'verifying the Laplacian.',
    '(re)flashing my keyboard.',
    'Dockerizing router utilities.',
    'hitting upper body pull.',
    'a fan of public transit.',
    'coping with the Python type system.',
    ':CocInstall coc-rust-analyzer.'
];

const FANCY_ROLES = [
    <>
      TikZing it up in <Tex2SVG display="inline" className='italic' latex={String.raw`\mathrm{\LaTeX}`}/>.
    </>,
    <>
      doing <Tex2SVG display="inline" className='italic' latex={String.raw`\varepsilon-\delta`}/> proofs.
    </>,
];

const ALL_ROLES_AS_FRAGMENTS = TEXT_ROLES.map(e => <>
    <span key={Date.now()} className='italic'>{e}</span>
</>).concat(FANCY_ROLES);

const N_ROLES = ALL_ROLES_AS_FRAGMENTS.length;

const shuffle = (ignoreLast: boolean) => {
    const last = ALL_ROLES_AS_FRAGMENTS[N_ROLES - 1];

    let currentIndex = N_ROLES - 1,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [ALL_ROLES_AS_FRAGMENTS[currentIndex], ALL_ROLES_AS_FRAGMENTS[randomIndex]] = [
            ALL_ROLES_AS_FRAGMENTS[randomIndex],
            ALL_ROLES_AS_FRAGMENTS[currentIndex]
        ];
    }

    if (!ignoreLast && ALL_ROLES_AS_FRAGMENTS[0] === last) {
        randomIndex = Math.floor(Math.random() * (N_ROLES - 2)) + 1;
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
         ( () => { shuffle(true); return ALL_ROLES_AS_FRAGMENTS[0]; } )
    );

    const onFinished = () => {
        let timeout = TIMEOUT;
        if (isFirstRun) {
            setIsFirstRun(false);
        }

        const timeoutHandle = setTimeout(() => {
            let newIdx = idx + 1;
            if (newIdx >= N_ROLES) {
                newIdx = 0;
                shuffle(false);
            }
            setIdx(newIdx);
            setFlavorText(ALL_ROLES_AS_FRAGMENTS[newIdx]);
        }, timeout);
        return () => clearTimeout(timeoutHandle);
    };

    const date = new Date((new Date()).getTime() + (16 * 60 * 60 * 1000));
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();

    return (
        <SplashDiv className='center'>
            <div className='mb-xl'>
                <Avatar src='me.webp' alt='Profile picture'/>
            </div>
            <span className='large mr-l ml-l'>
                <span className='regular'>Hi, I'm </span>
                <span className='bold'>Jiahong!</span>
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
