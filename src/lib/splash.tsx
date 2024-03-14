import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { MathComponent } from 'mathjax-react';
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
    <><span key={String(Math.random())} className='italic'>
        TikZing it up in <MathComponent tex={String.raw`\mathrm{\LaTeX}`} display={ false }/>.
    </span></>,
    <><span key={String(Math.random())} className='italic'>
        doing more <MathComponent tex={String.raw`\varepsilon-\delta`} display={ false }/> proofs.
    </span></>,
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

const getVacation = (month: number, day: number): string | JSX.Element => {
    if (month == 3) {
        if (day == 15) return <Link href="https://www.flightaware.com/live/flight/UAL875">on a flight! ✈</Link>;
        if (day == 16) return <Link href="https://www.flightaware.com/live/flight/UAL875">on a flight! ✈</Link>;
        if (day == 17) return "at Teamlabs Planets!";
        if (day == 18) return "on a shinkansen to Sapporo!";
        if (day == 19) return "in Sapporo!";
        if (day == 20) return "at Noboribetsu!!";
        if (day == 21) return "in Hokkaido!";
        if (day == 22) return "on a shinkansen to Tokyo!";
        if (day == 23) return "in Tokyo!";
        if (day == 24) return "in Hakone!";
        if (day == 25) return "in an onsen!";
        if (day == 26) return "in Ginza!";
        if (day == 27) return "in Shibuya!";
        if (day == 28) return "on a shinkansen to Osaka!";
        if (day == 29) return "in Osaka!";
        if (day == 30) return "in Kyoto!";
        if (day == 31) return "in Kyoto!";
    };
    if (month == 4) {
        if (day == 1) return "in Hiroshima!";
        if (day == 2) return "in Osaka!";
        if (day == 3) return "in Osaka!";
        if (day == 4) return "on a shinkansen to Fukuoka!";
        if (day == 5) return "in Fukuoka!";
        if (day == 6) return "in Kagoshima!";
        if (day == 7) return "in Fukuoka!";
        if (day == 8) return "on a shinkansen to Tokyo!";
        if (day == 9) return "at the Kimi no Na Wa stairs!";
        if (day == 10) return "in Nikko!";
        if (day == 11) return "at Teamlabs Borderless!";
        if (day == 12) return "in Enoshima!";
        if (day == 13) return "at Mount Fuji!";
        if (day == 14) return "at the imperial palace!";
        if (day == 15) return "in Seoul!";
        if (day == 16) return "on a flight!";
    };
    return "";
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
    const vacation = getVacation(month, day);

    return (
        <SplashDiv className='center'>
            <div className='mb-xl'>
                <Avatar src='me.jpg' alt='Profile picture'/>
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
            { vacation !== ""
                ? <SizedSpan className='biggish light mr-l ml -l mt-s'>
                    <span className="italic">I'm also </span><span className='medium'>
                        {vacation}
                    </span>
                </SizedSpan>
                : <></>
            }
        </SplashDiv>
    );
};

export default Splash;
