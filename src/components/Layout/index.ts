import styled from 'styled-components/native';
import colors from 'values/colors';

interface LayoutProps {
  top: number;
}

export const Card = styled.TouchableOpacity`
  padding-horizontal: 16px;
  padding-vertical: 16px;
  background-color: ${colors.secondary};
  width: 90%;
  align-self: center;
  border-radius: 5px;
  shadow-color: ${colors.textSecondary};
  shadow-opacity: 0.1px;
  shadow-radius: 3.84px;
  elevation: 2;
  ${({top}: LayoutProps) => top && `margin-top: ${top}px`}
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View``;

export const Spacer = styled.View`
  margin-top: 13px;
`;
