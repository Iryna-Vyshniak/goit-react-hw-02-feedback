import styled from 'styled-components';

export const MainHeader = styled.h1`
margin-bottom: ${props => props.theme.space[4]}px;
text-align: center;
  color: ${props => props.theme.color.accent}
  text-shadow: ${props => props.theme.shadows.textShadow}
  font-size: ${props => props.theme.fontSize.l};
`;
