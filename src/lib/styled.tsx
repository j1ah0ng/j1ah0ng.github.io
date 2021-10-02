import styled, { css } from "styled-components";

export const StackDivCss = css`
display: flex;
flex-direction: column;
align-items: center;
`;

export const StackDiv = styled.div`
${StackDivCss}
`;

export const SectionDiv = styled.div`
margin-top: 5vh;
min-width: 250px;
max-width: 720px;
width: 85vw;
`;
export const SpacingDiv = styled.div`
margin-bottom: 5vh;
`;

export const Ul = styled.ul`
margin: 0;
margin-top: 0.25rem;

&:first-child {
    padding-top: 0;
}

> li {
    padding-top: 0.35rem;
}
`;