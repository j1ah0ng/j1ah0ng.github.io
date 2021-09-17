import react, { FC } from 'react';
import styled from 'styled-components';

const Button = styled.button`
all: inherit;
background: none!important;
padding: 0!important;
border: none;
color: inherit;
&:hover {
  color: #5e81ac;
}
`;

const ButtonLink: FC<{content: string, className: string}> = ({content, className}) => {
    const id = content.replace(/[^A-Z0-9]/ig, '');
    return (
        <div className={ className } id={ id }>
            <Button
                onClick={
                    () => {
                        var loc = document.location.toString().split('#')[0];
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