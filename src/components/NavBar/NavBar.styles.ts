import styled from 'styled-components/native';
import colors from 'values/colors';

export const Header = styled.View`
  flex-direction: row;
  background-color: ${colors.primary};
  height: 56px;
  align-items: center;
  padding-horizontal: 16px;
  justify-content: space-between;
`;
