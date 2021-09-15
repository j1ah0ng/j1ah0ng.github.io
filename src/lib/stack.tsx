import React, { FC } from 'react';
import styled from 'styled-components';
import { MathComponent } from 'mathjax-react';

import Card from './card';
import ResumeCardInterior from './resumecardinterior';

const StackDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const SectionDiv = styled.div`
margin-top: 5vh;
min-width: 250px;
max-width: 720px;
width: 85vw;
`;

const SpacingDiv = styled.div`
margin-bottom: 5vh;
`;

const Ul = styled.ul`
margin: 0;
margin-top: 0.25rem;

&:first-child {
    padding-top: 0;
}

> li {
    padding-top: 0.35rem;
}
`;

const Stack: FC = () => {
    return (<StackDiv>
        <SectionDiv>
            <span className='big'>
                Skills 🤹🏻‍
            </span>
            <Card
                Detail={ () =>
                    <div>
                        <div className='bold red'>⚠️ This section is a work-in-progress!</div>
                        <div className='mt-m'>
                            <span className='medium'>Tools 🛠</span>
                            <Ul>
                                <li>
                                    Heavy user of <code>vim</code> and <code>doom-emacs</code>
                                </li>
                                <li>
                                    Professional, personal, and educational experience with the JetBrains suite including
                                    CLion, IntelliJ, and PyCharm
                                </li>
                                <li>
                                    Heavy user of regex (regular expressions), <code>zsh</code>, <code>bash</code>
                                </li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Languages 💬</span>
                            <Ul>
                                <li>
                                    Systems languages: <code>c++</code>, <code>c</code>, <code>rust</code>
                                </li>
                                <li>
                                    General languages: <code>java</code>, <code>python</code>, <code>haskell</code>
                                </li>
                                <li>
                                    Mathematics and engineering languages: <code>R</code>, <code>matlab</code>, <code>octave</code>,
                                    and <MathComponent
                                        tex={String.raw`\mathrm{\LaTeX}`}
                                        display={ false }
                                    /> (obviously)
                                </li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Platforms 👨🏻‍💻</span>
                            <Ul>
                                <li>
                                    Arch Linux (personal device) with Sway/Wayland
                                </li>
                                <li>
                                    Debian (personal device) with i3wm
                                </li>
                                <li>
                                    Amazon Linux 2 (Fedora-based) and the AWS ecosystem
                                    (professional)
                                </li>
                                <li>
                                    CentOS (education)
                                </li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Web 🌐</span>
                            <Ul>
                                <li>
                                    Production experience with Typescript, Javascript, and the React ecosystem
                                </li>
                                <li>
                                    Production experience with the Spring Framework (Java server-side)
                                </li>
                            </Ul>
                        </div>
                    </div>
                }
            />
        </SectionDiv>
        <SectionDiv>
            <span className='big'>
                Education 🎓
            </span>
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='University of California, San Diego'
                    flavor='B.Sc. Computer Engineering & B.Sc. Applied Mathematics'
                    logistics='September 2019 to June 2023 (projected). La Jolla, CA'
                    Detail={ () => <>
                        <div>
                            <span className='medium'>Computer science coursework:</span>
                            <Ul>
                                <li>
                                    Computer architecture (CSE 30): ARM assembly, low-level C, how data is represented
                                    at the hardware level
                                </li>
                                <li>Advanced data structures (CSE 100)</li>
                                <li>
                                    Design and analysis of algorithms (CSE 101): dynamic programming, NP completeness
                                    and methods of dealing with it, greedy algorithms, rigorous proof methodologies
                                    for algorithms
                                </li>
                                <li>
                                    Theory of computation (CSE 105): Models of computation including Turing machines
                                    and context-free grammars, the halting problem
                                </li>
                                <li>
                                    Operating systems (CSE 120): Java, mutexes, race conditions, multiprogramming,
                                    context switching
                                </li>
                                <li>Networked systems (CSE 124)</li>
                                <li>
                                    Theory and implementation of programming languages (CSE 130): Lexers, parsers,
                                    the functional paradigm, Haskell
                                </li>
                                <li>
                                    Digital design and systems (CSE 140, 140L): SystemVerilog, CMOS logic,
                                    Boolean algebra including Shannon expansions and Karnaugh maps
                                </li>
                                <li>Computer vision (CSE 152A)</li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Electronics engineering coursework:</span>
                            <Ul>
                                <li>
                                    Circuits and systems (ECE 35, 45): the continuous Fourier transform, circuit analysis
                                    methods including loop and node, source transforms, continuous signal filters
                                </li>
                                <li>
                                    Linear signals and systems (ECE 101): the discrete Fourier transform, cross-correlation
                                    and autocorrelation, discrete signal filters, MATLAB signal processing methodologies
                                </li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Mathematics coursework:</span>
                            <Ul>
                                <li>
                                    Discrete mathematics (CSE 20, 21): naive set theory, basic proof methods,
                                    methods of counting
                                </li>
                                <li>
                                    Differential equations (MATH 20D): ordinary differential equations, direct substitutions,
                                    undetermined coefficients, the Laplace transform
                                </li>
                                <li>Vector calculus (MATH 20A-E)</li>
                                <li>
                                    Advanced linear algebra (MATH 18, 102): abstract vector spaces, eigendecompositions,
                                    the singular value decomposition
                                </li>
                                <li>Complex analysis (MATH 120A)</li>
                                <li>
                                    Numerical linear algebra (MATH 170A): the Schur decomposition, numerical matrix rank,
                                    low-rank approximation, basic random matrices, perturbations and matrix condition numbers
                                </li>
                                <li>
                                    Statistical methods (MATH 183): normal, t, Poisson, geometric, and binomial distributions,
                                    experiment design and analysis in R
                                </li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Miscellaneous coursework:</span>
                            <Ul>
                                <li>Beethoven and the Beatles (MUS 9)</li>
                                <li>Music of the 20th century (MUS 114)</li>
                                <li>Sociolinguistics of sign language (LIGN 7)</li>
                                <li>Introduction to linguistics (LIGN 101)</li>
                            </Ul>
                        </div>
                    </> }
                />
            } />
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='University of California, Berkeley'
                    flavor='2020 Summer Session, Data Science and Mathematics'
                    logistics='June 2020 to August 2020. Berkeley, CA'
                    Detail={ () => <>
                        Data science (DS 100), real analysis (MATH 104).
                    </> }
                />
            } />
        </SectionDiv>
        <SectionDiv>
            <span className='big'>
                Experience 🔬
            </span>
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='Amazon'
                    flavor='SDE Intern, Alexa Smart Properties'
                    logistics='June 2021 to September 2021. Seattle, WA'
                    Detail={() => <>
                        <div>
                            Full-stack design and implementation of a B2B customer facing SaaS subscription management portal
                            which interfaces with existing internal services to serve a React-based frontend console.
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Frontend:</span>
                            <Ul>
                                <li>
                                    Built a React-based portal with extensibility in mind to allow it to be inserted
                                    within arbitrary webapp contexts
                                </li>
                                <li>
                                    Stateful and Redux-based reactivity built on top of <code>react</code>, <code>
                                    redux</code>, <code>axios</code>, and <code>styled-components</code> in addition to
                                    various internal technologies
                                </li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Backend:</span>
                            <Ul>
                                <li>
                                    Spun up four new REST API endpoints within a fresh Spring-based server package to
                                    both hydrate
                                    the frontend state and allow the frontend to submit subscription requests,
                                    activations, etc.
                                </li>
                                <li>
                                    Built persistent state stores using AWS Cloudformation and DynamoDB to record
                                    a customer subscription state calculated by aggregating information from multiple
                                    internal services
                                </li>
                            </Ul>
                        </div>
                        <div className='mt-m'>
                            <span className='medium'>Devops:</span>
                            <Ul>
                                <li>
                                    Aided weekly deployments of services into production by writing unit and
                                    end-to-end tests with clear and concise failure modes and by fixing issues in
                                    beta and pre-production to completely eliminate service failures in production
                                </li>
                                <li>
                                    Continually documented code and process changes with inlined comments and internal
                                    wikis while submitting long-term issues to the internal ticketing system
                                </li>
                            </Ul>
                        </div>
                    </>}
                />
            } />
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Stack;
