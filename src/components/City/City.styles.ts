import styled from 'styled-components/native';
import colors from 'values/colors';

export const Favorite = styled.TouchableOpacity`
  margin-right: 10px;
  margin-top: 10px;
`;

export const Remove = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${colors.favorite};
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`;
