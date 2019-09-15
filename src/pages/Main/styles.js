import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #121212;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#7F8698',
})`
  flex: 1;
  height: 40px;
  opacity: 0.9;
  background: #171717;
  border-radius: 7px;
  padding: 0 15px;
  border: 1px solid #7F8698;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #4285F4;
  border-radius: 5px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 15px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 15px;
  background: #40434A;
  border-radius: 9px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
  margin-top: 10px;
`;

export const Name = styled.Text`
  font-size: 17px;
  color: #FFF;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  line-height: 18px;
  color: #7F8698;
  margin: 7px 10px 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #4285F4;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin: 6px 15px 16px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
`;
