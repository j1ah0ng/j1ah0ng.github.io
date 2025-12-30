import { useState, type FC } from 'react';
import { WindupChildren, useSkip } from 'windups';

const TIMEOUT = 1500;
const TEXT_ROLES = [
  'doing a 5K.',
  'cycling to work.',
  'unborking Xorg.',
  'using Arch, btw.',
  'linting dotfiles.',
  'fixing a GRUB configuration.',
  'rebuilding an initramfs.',
  'proofing by induction.',
  'disabling telemetry.',
  'collecting Hagoromo.',
  'spamming First Isomorphism.',
  'verifying the Laplacian.',
  '(re)flashing my keyboard.',
  'Dockerizing router utilities.',
  'hitting upper body pull.',
  'a fan of public transit.',
  'coping with the Python type system.',
  'developing evals.',
  'TikZing it up in LaTeX.',
  'doing epsilon-delta proofs.',
];

const ALL_ROLES = TEXT_ROLES.map((e) => (
  <span key={e} style={{ fontStyle: 'italic' }}>
    {e}
  </span>
));

const N_ROLES = ALL_ROLES.length;

const shuffle = (ignoreLast: boolean) => {
  const last = ALL_ROLES[N_ROLES - 1];
  let currentIndex = N_ROLES - 1;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [ALL_ROLES[currentIndex], ALL_ROLES[randomIndex]] = [
      ALL_ROLES[randomIndex],
      ALL_ROLES[currentIndex],
    ];
  }

  if (!ignoreLast && ALL_ROLES[0] === last) {
    randomIndex = Math.floor(Math.random() * (N_ROLES - 2)) + 1;
    [ALL_ROLES[0], ALL_ROLES[randomIndex]] = [
      ALL_ROLES[randomIndex],
      ALL_ROLES[0],
    ];
  }
};

const Skip: FC<{ skip: boolean }> = ({ skip }) => {
  const skipFn = useSkip();
  if (skip) skipFn();
  return null;
};

const Splash: FC = () => {
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [idx, setIdx] = useState(0);
  const [flavorText, setFlavorText] = useState(() => {
    shuffle(true);
    return ALL_ROLES[0];
  });

  const onFinished = () => {
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
      setFlavorText(ALL_ROLES[newIdx]);
    }, TIMEOUT);
    return () => clearTimeout(timeoutHandle);
  };

  return (
    <header className="splash">
      <div className="splash-content">
        <img src="/me.webp" alt="Jiahong" className="avatar" />
        <h1>Hi, I'm <strong>Jiahong!</strong></h1>
        <p className="subtitle">
          <WindupChildren onFinished={onFinished} skipped={true}>
            I'm {flavorText}
            <Skip skip={isFirstRun} />
          </WindupChildren>
        </p>
        <a href="https://j1ah0ng.xyz/plog" className="plog-link">to the plog →</a>
        <a href="https://www.instagram.com/j1ah0ng.dng/" className="plog-link">to the insta →</a>
      </div>
    </header>
  );
};

export default Splash;
