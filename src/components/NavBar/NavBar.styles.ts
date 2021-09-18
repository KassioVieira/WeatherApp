import styled from 'styled-components/native';
import colors from 'values/colors';
import {NavBarStylesProps} from './NavBar.types';

export const Header = styled.View`
  flex-direction: row;
  background-color: ${colors.primary};
  ${({justify}: NavBarStylesProps) =>
    !justify && 'justify-content: space-between;'}
  height: 56px;
  align-items: center;
  padding-horizontal: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 500;
`;

export const Input = styled.TextInput.attrs({
  selectionColor: colors.secondary,
})`
  margin-left: 16px;
  color: ${colors.secondary};
  font-size: 20px;
`;
