import styled from 'styled-components/native';
import colors from 'values/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.transparentBlack};
`;

export const Content = styled.View`
  width: 80%;
  padding-vertical: 20px;
  padding-horizontal: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;
