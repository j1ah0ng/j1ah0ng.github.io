import React, { FC } from 'react';
import { MathJaxFormula } from 'mathjax3-react';
import {v4 as uuidv4} from 'uuid';

import ButtonLink, { Link } from './buttonlink';
import Card from './card';
import ResumeCardInterior from './resumecardinterior';
import { SectionDiv, SpacingDiv, StackDiv, Ul } from "./styled";

const HeadedList: FC<{divClass: string, header?: string, headerClass?: string, elements: JSX.Element[], anchor?: boolean}> = ({
    divClass, header, headerClass, elements, anchor
}) => {
    if (header && headerClass) {
        return anchor
            ? <div className={divClass}>
                <ButtonLink content={header} className={headerClass}/>
                <Ul>{elements.map(e => <li key={uuidv4()}>{e}</li>)}</Ul>
            </div>
            : <div className={divClass}>
                <span className={headerClass}>{header}</span>
                <Ul>{elements.map(e => <li key={uuidv4()}>{e}</li>)}</Ul>
            </div>;
    } else {
        return anchor
            ? <div className={divClass}>
                <Ul>{elements.map(e => <li key={uuidv4()}>{e}</li>)}</Ul>
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
                        <div className='bold red'>⚠️ This section is a(n eternal) work-in-progress!</div>
                        <HeadedList
                            divClass='mt-m'
                            header='Tools 🛠'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <><code>neovim</code> and <code>doom-emacs</code> enjoyer</>,
                                <><code>(?:bash|zsh|rg)</code></>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Languages 💬'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <>
                                    <code>c++</code>, <code>c</code>, <code>rust</code>, <code>go</code>
                                </>,
                                <>
                                    <code>java</code>, <code>python</code>, <code>haskell</code>
                                </>,
                                <>
                                    <code>R</code>, <code>matlab</code>, <code>octave</code>, <code>sql</code>, and <span>
                                      <Link href={ `https://github.com/j1ah0ng/papers` }>
                                        <MathJaxFormula formula={String.raw`\mathrm{\LaTeX}`}/> (obviously)
                                      </Link>
                                    </span>
                                </>,
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Frameworks 📚'
                            headerClass='medium biggish'
                            anchor={ true }
                            elements={[
                                <>
                                    <code>pandas</code>, <code>numpy</code>, <code>scipy</code>, <code>matplotlib</code>
                                </>,
                                <>
                                    <code>statsmodels</code>, <code>cv2</code>, <code>torch</code>, BigQuery
                                </>,
                                <>
                                    <code>tsx</code>, <code>jinja2</code>
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
                                    macOS + <code>yabai</code>
                                </>,
                                <>
                                    Arch Linux + <code>sway</code>
                                </>,
                                <>
                                    Debian + <code>i3</code>
                                </>,
                                <>
                                    AL2, Ubuntu
                                </>,
                                <>
                                    CentOS
                                </>,
                            ]}
                        />
                    </>
                }
            />
        </SectionDiv>
        <SectionDiv>
            <ButtonLink className='big' content='Experience 🔬'/>
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='Applied Intuition'
                    flavor='Software Engineer, Autonomy'
                    logistics='September 2024 to present. Mountain View, CA'
                    Detail={() => <>
                        <div>
                            End-to-end autonomy foundation modeling with a focus on
                            world prediction
                        </div>
                    </>}
                />
            } />
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='Cruise Automation'
                    flavor='ML/Robotics Engineer, Maneuver Planning & Simulation'
                    logistics='June 2022 to September 2024. San Francisco, CA'
                    Detail={() => <>
                        <div>
                            Unifying cross-modality AV behaviour metrics and
                            replacing terrible and nonperformant 🐍 RTTI with monomorphisation and <code>std::visit</code>.
                            Heavy focus on fast and clean data abstractions for closed-loop evaluation and 
                            ground truth sourcing at the petabyte scale
                        </div>
                        <div className='mt-m'>
                            Introduced novel error handling practices and consolidated fallback structure for a legacy nonconvex
                            solver within maneuver planning, building out architectural changes and future best practices to
                            improve DX and fault tolerance
                        </div>
                        <div className='mt-m'>
                            Also, please email me if you have successfully justified a Haskell rewrite of something
                            in production. (I realize this is orthogonal to performance, but still.)
                        </div>
                        <HeadedList
                            divClass='mt-m'
                            header='Technologies:'
                            headerClass='medium'
                            elements={[
                                <>
                                    <code>c++</code>, <code>ROS</code>, <code>SQL</code>, Python, Bazel, Spark, Ray
                                </>,
                                <> BigQuery, internal tooling including orchestration and graph compute </>,
                                <> Open source at <code>tobymao/sqlglot</code> and <code>duckdb/duckdb</code></>,
                            ]}
                        />
                    </>}
                />
            } />
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='Bolt Financial'
                    flavor='Software Engineering Intern, Merchant Tools'
                    logistics='January 2022 to June 2022. San Francisco, CA — Toronto, ON'
                    Detail={() => <>
                        <div>
                            Scoped and delivered two projects to address tech
                            debt in a large monorepo. Reduced developer
                            onboarding overhead by deprecating legacy onboarding flows in favour of an
                            internal dashboard, and fixed a longstanding database model error to
                            correctly display refund transactions
                        </div>
                        <HeadedList
                            divClass='mt-m'
                            header='Technologies:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Golang (<code>gorm</code>), Typescript, React
                                </>,
                                <> Postgres, Elasticsearch, K8 </>,
                            ]}
                        />
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
                            which interfaces with existing internal services to serve a React-based frontend console
                        </div>
                        <HeadedList
                            divClass='mt-m'
                            header='Technologies:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Java (<code>spring</code>, <code>tomcat</code>)
                                </>,
                                <>
                                    Typescript (<code>react</code>, <code>redux</code>, <code>axios</code>, <code>
                                        styled-components</code>)
                                </>
                            ]}
                        />
                        <HeadedList
                            divClass='mt-m'
                            header='Details:'
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
                    </>}
                />
            } />
        </SectionDiv>
        <SectionDiv>
            <ButtonLink className='big' content='Education 🎓'/>
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='University of California, San Diego'
                    flavor='M.S. Intelligent Systems, Robotics, and Controls'
                    logistics='January 2022 to present (leave of absence). Not conferred. La Jolla, CA'
                    Detail={() => <>
                        <HeadedList
                            divClass=''
                            header='Coursework:'
                            headerClass='medium'
                            elements={[
                                <>
                                    Statistical learning, deep learning
                                </>,
                                <>
                                    Sensing and estimation in robotics, RL in robotics
                                </>,
                                <>
                                    Cooperative multi-agent systems
                                </>,
                                <>
                                    Convex optimisation
                                </>,
                                <>
                                    Parameter estimation
                                </>,
                            ]}
                        />
                    </>}
                />
            } />
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='University of California, San Diego'
                    flavor='B.S. Applied Mathematics (4.00)'
                    logistics='September 2019 to June 2023. La Jolla, CA'
                    Detail={ () => <>
                        <HeadedList
                            divClass=''
                            header='🧮 Mathematics coursework'
                            headerClass='medium'
                            elements={[
                                <>
                                    Algebra (MATH 100A): symmetric, alternating, and dihedral groups, group actions, 
                                    plane and polyhedral symmetry groups, Sylow theorems
                                </>,
                                <>
                                    Complex analysis (MATH 120A): Riemann spheres, complex differentiability, the Laplacian,
                                    contour integrals
                                </>,
                                <>
                                    Real analysis (MATH 142AB)
                                </>,
                                <>
                                    Numerical methods (MATH 170ABC): the Schur decomposition, numerical matrix rank,
                                    low-rank approximation, basic random matrices, perturbations and matrix condition numbers,
                                    iterative root-finding
                                </>,
                                <>
                                    Linear and nonlinear optimisation (MATH 171AB): the simplex method
                                </>,
                                <>
                                    Statistical methods (MATH 183): normal, <span className='italic'>t</span>, Poisson, geometric, and binomial distributions,
                                    experiment design and analysis in R
                                </>,
                                <>
                                    Discrete mathematics (CSE 20, 21): naive set theory, basic proof methods,
                                    counting arguments
                                </>,
                                <>
                                    Differential equations (MATH 20D): ordinary differential equations, direct substitutions,
                                    undetermined coefficients, the Laplace transform
                                </>,
                                <>Vector calculus (MATH 20ABCE)</>,
                                <>
                                    Advanced linear algebra (MATH 18, 102): abstract vector spaces, eigendecompositions,
                                    the singular value decomposition
                                </>,
                            ]}
                        />
                    </> }
                />
            } />
            <Card Detail={ () =>
                <ResumeCardInterior
                    name='University of California, San Diego'
                    flavor='B.S. Computer Engineering (3.90)'
                    logistics='September 2019 to June 2023. La Jolla, CA'
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
                                    Programming languages and compilers (CSE 130, 131): lexers, parsers,
                                    the functional paradigm, Haskell, AST lowering
                                </>,
                                <>
                                    Digital design and systems (CSE 140, 140L): SystemVerilog, CMOS logic,
                                    Boolean algebra including Shannon expansions and Karnaugh maps
                                </>,
                                <>
                                    Computer architecture (CSE 142, 142L)
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
                                    Linear signals and systems (ECE 101): the discrete Fourier transform, correlation
                                    and autocorrelation, discrete signal filters, MATLAB signal processing methodologies
                                </>,
                                <>
                                    Digital design (ECE 111): SystemVerilog, building a Bitcoin mining FPGA
                                </>,
                                <>
                                    Circuits and systems (ECE 35, 45): the continuous Fourier transform, circuit analysis
                                    methods including loop and node, source transforms, continuous signal filters
                                </>,
                                <>
                                    Nonlinear circuit theory (ECE 65): op-amps, small-signal model
                                </>,
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
                                  Real analysis (MATH 104): Sequences and subsequences, monotonicity, <MathJaxFormula formula={String.raw`\varepsilon`}/>-<MathJaxFormula formula={String.raw`\delta`}/> proofs,
                                    the limit definition.
                                </>
                            ]}
                        />
                    </> }
                />
            } />
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Resume;
