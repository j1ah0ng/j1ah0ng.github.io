import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Ul = styled.ul`
display: flex;
justify-content: center;
padding-left: 1rem;
list-style: none;
align-items: center;
`;

const Li = styled.li`
padding-right: 1rem;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

type GithubResponse = {
    name: string,
    commit: {
        commit: {
            author: {
                date: string,
            },
        },
    },
};

const getLastUpdateDate = () => 
    axios.get<GithubResponse>('https://api.github.com/repos/j1ah0ng/j1ah0ng.github.io/branches/deploy')
        .then(res => res.data.commit.commit.author.date)
        .catch(err => Promise.reject(err));


const Footer: FC = () => {
    const [lastUpdate, setLastUpdate] = useState('an unknown date');
    useEffect(() => {
        getLastUpdateDate()
            .then(s => { setLastUpdate(new Date(s).toLocaleDateString()) })
            .catch(err => { setLastUpdate('an unknown date'); });
    }, [lastUpdate]);

    return (
        <Container>
            <nav><Ul>
                <Li>
                    <a href='https://github.com/j1ah0ng' aria-label='github'>
                        <FontAwesomeIcon icon={faGithub} size='lg' className='icon'/>
                    </a>
                </Li>
                <Li>
                    <a href='https://linkedin.com/in/jiahonglong' aria-label='Linkedin'>
                        <FontAwesomeIcon icon={faLinkedin} size='lg' className='icon'/>
                    </a>
                </Li>
            </Ul></nav>
            <span className='regular footnotesize mb-l'>
                Last updated on { lastUpdate }.
                Made with Vim, React, and 💖 in California
            </span>
        </Container>
    );
}

export default Footer;
