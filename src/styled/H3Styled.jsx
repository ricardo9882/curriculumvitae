import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3 `
    color: #212121;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin: .5em 0 0 0;
`;

const H3Sthyled = ({children}) => <StyledH3>{children}</StyledH3>

export default H3Sthyled; 