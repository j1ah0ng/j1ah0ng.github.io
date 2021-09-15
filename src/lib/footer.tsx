import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../redux/store';

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

> * {
  max-width: 85vw;
}
`;

const Footer: FC = () => {
    const lastUpdate = useSelector((state: RootState) => state.network.dateString);
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
                <Li>
                    <a href='Resume-2021-Sept.pdf' aria-label='Resume'>
                        <FontAwesomeIcon icon={faFileAlt} size='lg' className='icon'/>
                    </a>
                </Li>
            </Ul></nav>
            <span className='center regular footnotesize ml-s mr-s'>
                Last updated on { new Date(Date.parse(lastUpdate)).toLocaleDateString() }.
                Made with Vim, React, and 💖 in California.
            </span>
            <span className='center regular footnotesize ml-s mr-s mb-xxl'>
                Much love to <a href='https://nordtheme.com'>Arctic Ice Studio!</a>
            </span>
        </Container>
    );
}

export default Footer;
