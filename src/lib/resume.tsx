import React, {FC} from 'react';
import {MathComponent} from 'mathjax-react';

import ButtonLink, { Link } from './buttonlink';
import Card from './card';
import ResumeCardInterior from './resumecardinterior';
import {SectionDiv, SpacingDiv, StackDiv, Ul} from "./styled";

const HeadedList: FC<{divClass: string, header?: string, headerClass?: string, elements: JSX.Element[], anchor?: boolean}> = ({
    divClass, header, headerClass, elements, anchor
}) => {
    if (header && headerClass) {
        return anchor
            ? <div className={divClass}>
                <ButtonLink content={header} className={headerClass}/>
                <Ul>{elements.map(e => <li>{e}</li>)}</Ul>
            </div>
            : <div className={divClass}>
                <span className={headerClass}>{header}</span>
                <Ul>{elements.map(e => <li>{e}</li>)}</Ul>
            </div>;
    } else {
        return anchor
            ? <div className={divClass}>
                <Ul>{elements.map(e => <li>{e}</li>)}</Ul>
            </div>
            : <div className={divClass}>
                <Ul>{elements.map(e => <li>{e}</li>)}</Ul>
            </div>;
    }
}

const Resume: FC = () => {
    return (<StackDiv>
        <SectionDiv>
            <ButtonLink className='big' content='Skills 🤹🏻‍'/>
            <Card
                Detail={ () =>
                    <>
                        <div className='bold red'>⚠️ This section is a work-in-progress!</div>
                        <HeadedList
                            divClass='mt-m'
                            header='Tools 🛠'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <>Heavy user of <code>vim</code> and <code>doom-emacs</code></>,
                                <>Heavy user of regex (regular expressions), <code>zsh</code>, <code>bash</code></>,
                                <>
                                    Professional, personal, and educational experience with the JetBrains suite including
                                    CLion, IntelliJ, and PyCharm
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Languages 💬'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <>
                                    Systems languages: <code>c++</code>, <code>c</code>, <code>rust</code>, <code>go</code>
                                </>,
                                <>
                                    General languages: <code>java</code>, <code>python</code>, <code>haskell</code>
                                </>,
                                <>
                                    Mathematics and engineering languages: <code>R</code>, <code>matlab</code>, <code>octave</code>,
                                    and <span><Link href={ `https://github.com/j1ah0ng/papers` }>
                                        <MathComponent tex={String.raw`\mathrm{\LaTeX}`} display={ false }/> (obviously)
                                    </Link></span>
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Libraries 📚'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <>
                                    Data pipeline: <code>pandas</code>, <code>numpy</code>, <code>scipy</code>, <code>matplotlib</code>
                                </>,
                                <>
                                    Machine learning: <code>statsmodels</code>, <code>cv2</code>, <code>torch</code>
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Platforms 👨🏻‍💻'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <>
                                    Arch Linux (personal device) with Sway/Wayland
                                </>,
                                <>
                                    Debian (personal device) with i3wm
                                </>,
                                <>
                                    Amazon Linux 2 (Fedora-based) and the AWS ecosystem
                                    (professional)
                                </>,
                                <>
                                    CentOS (education)
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Web 🌐'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <>
                                    Production experience with Typescript, Javascript, and the React ecosystem
                                </>,
                                <>
                                    Production experience with the Spring Framework (Java server-side)
                                </>,
                            ]}
                        />
                    </>
                }
            />
        </SectionDiv>
        <SectionDiv>
            <ButtonLink className='big' content='Education 🎓'/>
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='University of California, San Diego'
                    flavor='B.Sc. Computer Engineering & B.Sc. Applied Mathematics'
                    logistics='September 2019 to June 2023 (projected). La Jolla, CA'
                    Detail={ () => <>
                        <HeadedList
                            divClass=''
                            header='💻 Computer science coursework:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Computer architecture (CSE 30): ARM assembly, low-level C, how data is represented
                                    at the hardware level
                                </>,
                                <>Advanced data structures (CSE 100)</>,
                                <>
                                    Design and analysis of algorithms (CSE 101): dynamic programming, NP completeness
                                    and methods of dealing with it, greedy algorithms, rigorous proof methodologies
                                    for algorithms
                                </>,
                                <>
                                    Theory of computation (CSE 105): models of computation including Turing machines
                                    and context-free grammars, the halting problem
                                </>,
                                <>
                                    Operating systems (CSE 120): Java, mutexes, race conditions, multiprogramming,
                                    context switching
                                </>,
                                <>
                                    Networked systems (CSE 124): Go (golang), RPC, physical and logical time, Lamport clocks, 
                                    consistent hashing, cluster-scale caching
                                </>,
                                <>
                                    Theory and implementation of programming languages (CSE 130): lexers, parsers,
                                    the functional paradigm, Haskell
                                </>,
                                <>
                                    Digital design and systems (CSE 140, 140L): SystemVerilog, CMOS logic,
                                    Boolean algebra including Shannon expansions and Karnaugh maps
                                </>,
                                <>
                                    Computer vision (CSE 152A): Epipolar geometry, intrinsic and extrinsic camera
                                    matrices, methodologies for estimation of the fundamental matrix, eight-point
                                    algorithm, RANSAC, Lucas-Kanade optical flow, basic neural networks
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='🔌 Electronics engineering coursework:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Circuits and systems (ECE 35, 45): the continuous Fourier transform, circuit analysis
                                    methods including loop and node, source transforms, continuous signal filters
                                </>,
                                <>
                                    Linear signals and systems (ECE 101): the discrete Fourier transform, correlation
                                    and autocorrelation, discrete signal filters, MATLAB signal processing methodologies
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='🧮 Mathematics coursework:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Discrete mathematics (CSE 20, 21): naive set theory, basic proof methods,
                                    counting arguments
                                </>,
                                <>
                                    Differential equations (MATH 20D): ordinary differential equations, direct substitutions,
                                    undetermined coefficients, the Laplace transform
                                </>,
                                <>Vector calculus (MATH 20A-E)</>,
                                <>
                                    Advanced linear algebra (MATH 18, 102): abstract vector spaces, eigendecompositions,
                                    the singular value decomposition
                                </>,
                                <>
                                    Modern algebra (MATH 100A): symmetric, alternating, and dihedral groups, group actions, 
                                    plane and polyhedral symmetry groups, Sylow theorems
                                </>,
                                <>
                                    Complex analysis (MATH 120A): Riemann spheres, complex differentiability, the Laplacian,
                                    contour integrals
                                </>,
                                <>
                                    Numerical linear algebra (MATH 170A): the Schur decomposition, numerical matrix rank,
                                    low-rank approximation, basic random matrices, perturbations and matrix condition numbers
                                </>,
                                <>
                                    Statistical methods (MATH 183): normal, <span className='italic'>t</span>, Poisson, geometric, and binomial distributions,
                                    experiment design and analysis in R
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Miscellaneous coursework:'
                            headerClass='medium'
                            elements={[
                                <>Beethoven and the Beatles (MUS 9)</>,
                                <>Music of the 20th century (MUS 114)</>,
                                <>Sociolinguistics of sign language (LIGN 7)</>,
                                <>Introduction to linguistics (LIGN 101)</>,
                                <>Pragmatics (linguistics) (LIGN 160)</>
                            ]}
                        />
                    </> }
                />
            } />
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='University of California, Berkeley'
                    flavor='2020 Summer Session, Data Science and Mathematics'
                    logistics='June 2020 to August 2020. Berkeley, CA'
                    Detail={ () => <>
                        <HeadedList
                            divClass=''
                            header='Miscellaneous coursework:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Data science (DS 100): Data cleaning,
                                    exploratory analysis, <code>sql</code>, <code>pandas</code>, <code>numpy</code>.
                                    Basic probability and statistics theory, least squares, feature engineering,
                                    scree plots.
                                </>,
                                <>
                                    Real analysis (MATH 104): Sequences and subsequences, monotonicity, <MathComponent
                                    tex={String.raw`\varepsilon`} display={false}/>-<MathComponent
                                    tex={String.raw`\delta`} display={false}/> proofs,
                                    the limit definition.
                                </>
                            ]}
                        />
                    </> }
                />
            } />
        </SectionDiv>
        <SectionDiv>
            <ButtonLink className='big' content='Experience 🔬'/>
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='Bolt Financial'
                    flavor='Software Engineering Intern'
                    logistics='January 2022 to April 2022. San Francisco, CA'
                    Detail={() => <>
                        <div>
                            Forthcoming!
                        </div>
                    </>}
                />
            } />
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='Amazon'
                    flavor='SDE Intern, Alexa Smart Properties'
                    logistics='June 2021 to September 2021. Seattle, WA'
                    Detail={() => <>
                        <div>
                            Full-stack design and implementation of a B2B customer facing SaaS subscription management portal
                            which interfaces with existing internal services to serve a React-based frontend console.
                            Entered internship with little to no web development experience and was able to ship into
                            production within twelve weeks.
                        </div>
                        <HeadedList
                            divClass='mt-m'
                            header='Frontend:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Built a React-based portal with extensibility in mind to allow it to be inserted
                                    within arbitrary webapp contexts
                                </>,
                                <>
                                    Stateful and Redux-based reactivity built on top of <code>react</code>, <code>
                                    redux</code>, <code>axios</code>, and <code>styled-components</code> in addition to
                                    various internal technologies
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Backend:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Spun up four new REST API endpoints within a fresh Spring-based server package to
                                    both hydrate
                                    the frontend state and allow the frontend to submit subscription requests,
                                    activations, etc.
                                </>,
                                <>
                                    Built persistent state stores using AWS Cloudformation and DynamoDB to record
                                    a customer subscription state calculated by aggregating information from multiple
                                    internal services
                                </>
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Devops:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Aided weekly deployments of services into production by writing unit and
                                    end-to-end tests with clear and concise failure modes and by fixing issues in
                                    beta and pre-production to completely eliminate service failures in production
                                </>,
                                <>
                                    Continually documented code and process changes with inlined comments and internal
                                    wikis while submitting long-term issues to the internal ticketing system
                                </>
                            ]}
                        />
                    </>}
                />
            } />
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Resume;
