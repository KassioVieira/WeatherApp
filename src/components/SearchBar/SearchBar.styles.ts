import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from 'values/colors';

export const Header = styled.View`
  flex-direction: row;
  background-color: ${colors.primary};
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
  width: 80%;
  color: ${colors.secondary};
  font-size: 20px;
  border-bottom-width: 2px;
  height: 41px;
  border-color: ${colors.background};
`;

export const ListView = styled.View`
  position: absolute;
  z-index: 9;
  background-color: ${colors.secondary};
  top: 55px;
  width: 100%;
  align-self: center;
`;

export const Item = styled(TouchableOpacity)`
  justify-content: center;
  padding: 15px;
`;

export const Label = styled.Text`
  font-size: 16px;
`;
