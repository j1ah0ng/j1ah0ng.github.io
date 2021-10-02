import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const CommonCss = css`
all: inherit;
background: none!important;
padding: 0!important;
border: none;
color: inherit;
&:hover {
  color: #5e81ac;
}
`;

export const Button = styled.button`
${CommonCss}
&:hover {
    cursor: pointer;
}
`;

export const Link = styled.a`
${CommonCss}
`;

const ButtonLink: FC<{content: string, className: string}> = ({content, className}) => {
    const id = content.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    return (
        <div className={ className } id={ id }>
            <Button
                onClick={
                    () => {
                        const loc = document.location.toString().split('#')[0];
                        document.location.href = loc + '#' + id;
                        return false;
                    }
                }
            >{
                content
            }</Button>
        </div>
    );
};

export default ButtonLink;