import React from 'react';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme = {
  color: {
    red: '#FFAAAA'
  },
};

type Theme = typeof theme;
const styled = baseStyled as ThemedStyledInterface<Theme>;

const Foo = styled('div')`
  background: ${p => p.theme.color.redd};
`;

export const blah = () => <Foo />;
