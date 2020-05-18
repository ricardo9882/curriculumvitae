import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div `
    display: block;
    margin: 0;
`;

const SocialUl = styled.ul `
    list-style: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li `
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a `
    color: #212121;
    font-size: 1.2em;
    text-decoration: none;
`;

const SocialIcon = styled.i `
    color: ${props => props.theme.color};
`;

const facebook = {
    color: "#3b5998"
}

const twitter = {
    color: "#38a1f3"
}

const linkedin = {
    color: "0e76a8"
}

const github = {
    color: "#333"
}

const getColor = (name) => {
    if(name === 'facebook') return facebook;
    if(name === 'twitter') return twitter;
    if(name === 'linkedin') return linkedin;
    if(name === 'github') return github;
}

const Social = (props) => (
    <SocialStyle>
        {props.social &&
            <SocialUl>
                {props.social.map((item, index) => (
                    <SocialLi key={`social-${index}`} target="_blank">
                        <SocialAnchor href={item.url}>
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fa fa-${item.name}`} />
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl>
        }
    </SocialStyle>
);

export default Social;